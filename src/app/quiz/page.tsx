'use client';
import { useSearchParams } from 'next/navigation';
import styles from './Quiz.module.scss';
import StepContent from '../../components/StepContent/StepContent';
import config from '../../../quiz-config/quiz-config.json';
import { IStepConfig } from '@/components/StepContent/types';
import { steps } from '../../../quiz-config/steps';

export default function QuizPage() {
  const params = useSearchParams();

  const currentStepId = params.get('q') || steps[0];
  console.log('-----', currentStepId);
  let stepConfig = config.variants[0]['steps'].find(
    (item) => currentStepId === item.id,
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
