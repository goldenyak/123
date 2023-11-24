import { create } from 'zustand';
import { config } from '@/utils/utils';
import { IStepConfig } from '@/components/StepContent/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type State = {
  currentStepId: string;
  config: IStepConfig[];
  answers: Record<string, { locked: boolean }>;
};

type Action = {
  next: (router: AppRouterInstance) => void;
  back: (router: AppRouterInstance) => void;
  goTo: (router: AppRouterInstance, stepId: string) => void;
  setCurrentStepId: (newCurrentId: string) => void;
  isFirstStep: boolean | undefined;
  isLastStep: boolean | undefined;
};

const initAnswers: Record<string, { locked: boolean }> = {};
const steps: Record<
  string,
  IStepConfig & { firstStep?: boolean; lastStep?: boolean }
> = {};

config.steps.map((step, index) => {
  initAnswers[step.id] = { locked: true };
  steps[step.id] = step;
  if (index === 0) {
    steps[step.id] = { ...steps[step.id], firstStep: true };
  }
  if (index === config.steps.length - 1) {
    steps[step.id] = { ...steps[step.id], lastStep: true };
  }
});
console.log('---steps/n', steps);
initAnswers[config.mainScreen.yesRedirectTo] = { locked: false };
initAnswers[config.mainScreen.noRedirectTo] = { locked: false };

// console.log('initAnswers', initAnswers);

export const useStore = create<State & Action>((set, get) => ({
  currentStepId: config.steps[0].id,
  answers: initAnswers,
  steps: steps,
  setCurrentStepId: (newCurrentId) => {
    set({ currentStepId: newCurrentId });
  },
  config: config.steps as IStepConfig[],
  goTo: (router, stepId) => {
    const nextStep = steps[stepId];
    set({ isFirstStep: nextStep.firstStep });
    set({ isLastStep: nextStep.lastStep });
    router.push(`?q=${stepId}`);
  },
  next: (router) => {
    const currentStep = steps[get().currentStepId];
    if (currentStep?.nextButton?.redirectTo) {
      const nextStep = steps[currentStep.nextButton.redirectTo];
      set({ currentStepId: nextStep.id });
      set({ isFirstStep: nextStep.firstStep });
      set({ isLastStep: nextStep.lastStep });
      router.push(`?q=${nextStep.id}`);
    }
  },
  back: (router) => {
    const currentStep = steps[get().currentStepId];
    const prevStepId = currentStep.prevStep;
    set({ currentStepId: prevStepId || config.steps[0].id });
    if (prevStepId) {
      const prevStep = steps[prevStepId];
      set({ isFirstStep: prevStep.firstStep });
      set({ isLastStep: prevStep.lastStep });
    }
    prevStepId ? router.push(`?q=${prevStepId}`) : router.push(`/`);
  },
  isFirstStep: true,
  isLastStep: false,
}));
