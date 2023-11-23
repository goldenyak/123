import { useStore } from '@/store/useStore';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useNavigation = () => {
  const router = useRouter();
  const state = useStore();
  const params = useSearchParams();
  const currentStepId = params.get('q');
  useEffect(() => {
    state.setCurrentStepId(currentStepId || state.currentStepId);
  }, [currentStepId]);
  const next = () => state.next(router);
  const goTo = (stepId: string) => state.goTo(router, stepId);
  const back = () => state.back(router);
  return { next, back, goTo };
};
