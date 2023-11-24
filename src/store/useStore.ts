import { create } from 'zustand';
import config from '../../quiz-config/quiz-config.json';
import { IConfig, IStepConfig } from '@/components/StepContent/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type State = {
  currentStepId: string;
  config: IConfig;
};

type Action = {
  next: (router: AppRouterInstance) => void;
  back: (router: AppRouterInstance) => void;
  goTo: (router: AppRouterInstance, stepId: string) => void;
  setCurrentStepId: (newCurrentId: string) => void;
  isFirstStep: () => boolean;
  isLastStep: () => boolean;
};

export const useStore = create<State & Action>((set, get) => ({
  currentStepId: config.variants[0].steps[0].id,
  setCurrentStepId: (newCurrentId) => {
    set({ currentStepId: newCurrentId });
  },
  config: config.variants[0].steps as IStepConfig[],
  goTo: (router, stepId) => {
    router.push(`?q=${stepId}`);
  },
  next: (router) => {
    const currentStep = config.variants[0].steps.find(
      (step) => step.id === get().currentStepId,
    );
    const nextStepId = currentStep?.nextButton?.value;
    set({ currentStepId: nextStepId });
    router.push(`?q=${currentStep?.nextButton?.redirectTo}`);
  },
  back: (router) => {
    const currentStep = config.variants[0].steps.find(
      (step) => step.id === get().currentStepId,
    );
    const nextStepId = currentStep?.nextButton?.value;
    set({ currentStepId: nextStepId });
    router.push(`?q=${currentStep?.prevStep}`);
  },
  isFirstStep: () => {
    const currentStepIndex = config.variants[0].steps.findIndex(
      (step) => step.id === get().currentStepId,
    );
    return currentStepIndex === 0;
  },
  isLastStep: () => {
    const currentStepIndex = config.variants[0].steps.findIndex(
      (step) => step.id === get().currentStepId,
    );
    return currentStepIndex === config.variants[0].steps.length - 1;
  },
}));
