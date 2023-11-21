'use client';

import { useSearchParams } from 'next/navigation';
import { NewStepComponent } from '@/components/NewStepComponent/NewStepComponent';
import { config } from './quizConfig';

export default function QuizPage() {
  const params = useSearchParams();
  const queryValue = params.get('q');
  const stepNumber = queryValue !== null ? parseInt(queryValue) : 0;
  const stepConfig = config.variants[0].steps.find(
    (item: any) => item.id === stepNumber,
  );

  return (
    <div>
      <NewStepComponent {...stepConfig} />
    </div>
  );
}
