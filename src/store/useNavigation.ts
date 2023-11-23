import { create } from 'zustand';
import { useRouter } from 'next/navigation';
import AppRouterInstance from 'next/router';
import config from '../../quiz-config/quiz-config.json';
import { IConfig, IStepConfig } from '@/components/StepContent/types';

type State = {
  currentStepId: string;
  config: IConfig;
};

type Action = {
  next: (router: any) => void;
};

export const useStore = create<State & Action>((set, get) => ({
  //   currentStepId: config.variants[0].steps[0].id,
  currentStepId: 'WhyDidntLikeOtherVpn',
  config: config.variants[0].steps as IStepConfig[],
  next: (router) => {
    console.log('push');
    if (router) {
      const currentStep = config.variants[0].steps.find(
        (step) => step.id === get().currentStepId,
      );
      const nextStepId = currentStep?.nextButton?.value;
      console.log('---', currentStep?.nextButton);

      console.log('currentStep', currentStep);
      console.log('nextStepId', nextStepId);
      //   set({ currentStepId: nextStepId });
      //   router.push(`?q=${nextStepId}`);
      router.push(`?q=${currentStep?.nextButton?.redirectTo}`);
    }
  },
}));

export const useNavigation = () => {
  const router = useRouter();
  const state = useStore();
  //   AppRouterInstance.push('yooo');
  const next = () => state.next(router);
  console.log('use navi');

  return { next };
};
