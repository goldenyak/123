import { create } from 'zustand';
import { config } from '@/utils/utils';
import { ICheckboxGroup, IStepConfig } from '@/components/StepContent/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type State = {
  currentStepId: string;
  config: IStepConfig[];
  answers: Record<
    string,
    { values: string[]; locked: boolean; disableNext?: boolean }
  >;
};

type Action = {
  next: (router: AppRouterInstance) => void;
  back: (router: AppRouterInstance) => void;
  goTo: (router: AppRouterInstance, stepId: string) => void;
  setCurrentStepId: (newCurrentId: string) => void;
  isLocked(stepId: string): boolean;
  isFirstStep: boolean | undefined;
  isLastStep: boolean | undefined;
  isNextDisabled: () => boolean;
  addAnswer: (value: string) => void;
};

const initAnswers: State['answers'] = {};

const steps: Record<
  string,
  IStepConfig & {
    firstStep?: boolean;
    lastStep?: boolean;
  }
> = {};

config.steps.map((step, index) => {
  initAnswers[step.id] = { locked: true, values: [] };
  if (
    step.content.type === 'checkbox-group' ||
    step.content.type === 'agreement-scale'
  ) {
    initAnswers[step.id] = { ...initAnswers[step.id], disableNext: true };
  }
  steps[step.id] = step;
  if (index === 0) {
    steps[step.id] = { ...steps[step.id], firstStep: true };
  }
  if (index === config.steps.length - 1) {
    steps[step.id] = { ...steps[step.id], lastStep: true };
  }
});
initAnswers[config.mainScreen.yesRedirectTo] = {
  ...initAnswers[config.mainScreen.yesRedirectTo],
  locked: false,
};
initAnswers[config.mainScreen.noRedirectTo] = {
  ...initAnswers[config.mainScreen.noRedirectTo],
  locked: false,
};

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
    set({
      answers: {
        ...get().answers,
        [nextStep.id]: { ...get().answers[nextStep.id], locked: false },
      },
    });
    router.push(`?q=${stepId}`);
  },
  next: (router) => {
    const currentStep = steps[get().currentStepId];
    if (currentStep?.nextButton?.redirectTo) {
      const nextStep = steps[currentStep.nextButton.redirectTo];
      set({ currentStepId: nextStep.id });
      set({ isFirstStep: nextStep.firstStep });
      set({ isLastStep: nextStep.lastStep });
      set({
        answers: {
          ...get().answers,
          [nextStep.id]: { ...get().answers[nextStep.id], locked: false },
        },
      });
      router.push(`?q=${nextStep.id}`);
    }
  },
  back: (router) => {
    const currentStep = steps[get().currentStepId];
    const prevStepId = currentStep.prevStep;
    set({ currentStepId: prevStepId || config.steps[0].id });
    prevStepId ? router.push(`?q=${prevStepId}`) : router.push(`/`);
    if (prevStepId) {
      const prevStep = steps[prevStepId];
      set({ isFirstStep: prevStep.firstStep });
      set({ isLastStep: prevStep.lastStep });
    }
  },
  isFirstStep: true,
  isLastStep: false,
  isLocked: (stepId) => {
    return get().answers[stepId]?.locked;
  },
  isNextDisabled: () => !!get().answers[get().currentStepId]?.disableNext,
  addAnswer: (value) => {
    get().answers[get().currentStepId].values.push(value);
    if (!!get().answers[get().currentStepId]?.disableNext) {
      if (get().answers[get().currentStepId].values.length > 0) {
        set({
          answers: {
            ...get().answers,
            [get().currentStepId]: {
              ...get().answers[get().currentStepId],
              disableNext: false,
            },
          },
        });
      }
    }
  },
}));
