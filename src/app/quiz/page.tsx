'use client';

import { useSearchParams } from 'next/navigation';
import styles from './Quiz.module.scss';
import { MultiStepBar } from '@/components/MultiStepBar/MultiStepBar';
import StepContent from '@/components/StepContent/StepContent';
import config from '../../../quiz-config.json';
import { IStepConfig } from '@/components/StepContent/types';

export default function QuizPage() {
  const params = useSearchParams();
  const queryValue = params.get('q');
  const stepNumber = queryValue !== null ? parseInt(queryValue) : 0;

  let stepConfig = config.variants[0].steps.find(
    (item) => item.id === stepNumber,
  ) as IStepConfig;

  return (
    <div
      className={
        stepConfig?.fillGradient
          ? [styles.main_wrapper, styles.gradient].join(' ')
          : styles.main_wrapper
      }
    >
      {stepConfig?.showMultiStepBar && <MultiStepBar />}
      <div
        className={styles.step_wrapper}
        style={{
          paddingTop: `${stepConfig?.showMultiStepBar ? '50px' : '0'}`,
          marginBottom: '100px',
        }}
      >
        <StepContent config={stepConfig} />
      </div>
    </div>
  );
}
