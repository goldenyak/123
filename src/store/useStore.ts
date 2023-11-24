import { create } from 'zustand';
import { config } from '@/utils/utils';
import { IStepConfig } from '@/components/StepContent/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type State = {
  currentStepId: string;
  config: IStepConfig[];
};

type Action = {
  next: (router: AppRouterInstance) => void;
  back: (router: AppRouterInstance) => void;
  goTo: (router: AppRouterInstance, stepId: string) => void;
  setCurrentStepId: (newCurrentId: string) => void;
  isFirstStep: () => boolean;
  isLastStep: () => boolean;
};

const initAnswers = c;

export const useStore = create<State & Action>((set, get) => ({
  currentStepId: config.steps[0].id,
  setCurrentStepId: (newCurrentId) => {
    set({ currentStepId: newCurrentId });
  },
  config: config.steps as IStepConfig[],
  goTo: (router, stepId) => {
    router.push(`?q=${stepId}`);
  },
  next: (router) => {
    const currentStep = config.steps.find(
      (step) => step.id === get().currentStepId,
    );
    const nextStepId = currentStep?.nextButton?.value;
    set({ currentStepId: nextStepId });
    router.push(`?q=${currentStep?.nextButton?.redirectTo}`);
  },
  back: (router) => {
    const currentStep = config.steps.find(
      (step) => step.id === get().currentStepId,
    );
    const nextStepId = currentStep?.nextButton?.value;
    set({ currentStepId: nextStepId });
    nextStepId ? router.push(`?q=${currentStep?.prevStep}`) : router.push(`/`);
  },
  isFirstStep: () => {
    const currentStepIndex = config.steps.findIndex(
      (step) => step.id === get().currentStepId,
    );
    return currentStepIndex === 0;
  },
  isLastStep: () => {
    const currentStepIndex = config.steps.findIndex(
      (step) => step.id === get().currentStepId,
    );
    return currentStepIndex === config.steps.length - 1;
  },
}));
