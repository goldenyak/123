'use client';

import { useSearchParams } from 'next/navigation';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import steps from './steps';
import styles from './Quiz.module.scss';

export default function QuizPage() {
  const params = useSearchParams();
  const queryValue = params.get('q');
  const stepNumber = queryValue !== null ? parseInt(queryValue) : 0;
  const StepComponent = steps[stepNumber];

  return (
    <div className={styles.main_wrapper}>
      <ProgressBar />
      <StepComponent />
    </div>
  );
}
