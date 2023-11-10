'use client';

import { useSearchParams } from 'next/navigation';
import steps from './steps';
import styles from './Quiz.module.scss';
import { MultiStepBar } from '@/components/MultiStepBar/MultiStepBar';

const STEPS_WO_STEP_BAR = [4, 10, 11, 17, 18, 19];

export default function QuizPage() {
  const params = useSearchParams();
  const queryValue = params.get('q');
  const stepNumber = queryValue !== null ? parseInt(queryValue) : 0;
  const StepComponent = steps[stepNumber];

  const fillGradient = stepNumber === 15 || stepNumber === 16;

  const showStepBar = () => !STEPS_WO_STEP_BAR.includes(stepNumber);

  return (
    <div
      className={
        fillGradient
          ? [styles.main_wrapper, styles.gradient].join(' ')
          : styles.main_wrapper
      }
    >
      {showStepBar() && <MultiStepBar />}
      <div
        className={styles.step_wrapper}
        style={{
          paddingTop: `${showStepBar() ? '100px' : '0'}`,
          marginBottom: '100px',
        }}
      >
        <StepComponent />
      </div>
    </div>
  );
}
