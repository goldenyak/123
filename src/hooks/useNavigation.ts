import { useStore } from '@/store/useStore';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useNavigation = () => {
  const router = useRouter();

  const setCurrentStepId = useStore((state) => state.setCurrentStepId);
  const nextAction = useStore((state) => state.next);
  const goToAction = useStore((state) => state.goTo);
  const backAction = useStore((state) => state.back);

  const params = useSearchParams();
  const currentStepId = params.get('q');

  useEffect(() => {
    setCurrentStepId(currentStepId || '');
  }, [currentStepId]);

  const next = () => nextAction(router);
  const goTo = (stepId: string) => goToAction(router, stepId);
  const back = () => backAction(router);

  return { next, back, goTo };
};
