'use client';

import { useSearchParams } from 'next/navigation';
import steps from './steps';
import styles from './Quiz.module.scss';
import { MultiStepBar } from '@/components/MultiStepBar/MultiStepBar';

export default function QuizPage() {
  const params = useSearchParams();
  const queryValue = params.get('q');
  const stepNumber = queryValue !== null ? parseInt(queryValue) : 0;
  const StepComponent = steps[stepNumber];

  return (
    <div className={styles.main_wrapper}>
      <MultiStepBar />
      <StepComponent />
    </div>
  );
}