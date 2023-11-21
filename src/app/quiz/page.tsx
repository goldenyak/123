'use client';

import { useSearchParams } from 'next/navigation';
import styles from './Quiz.module.scss';
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
        stepConfig?.gradientFill
          ? [styles.main_wrapper, styles.gradient].join(' ')
          : styles.main_wrapper
      }
    >
      <StepContent config={stepConfig} />
    </div>
  );
}
