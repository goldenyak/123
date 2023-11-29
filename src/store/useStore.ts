import { create } from 'zustand';
import { config } from '@/utils/utils';
import { IStepConfig } from '@/components/StepContent/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type State = {
  currentStepId: string;
  steps: Record<
    string,
    IStepConfig & { locked: boolean; disableNext?: boolean; lastStep?: boolean }
  >;
  answers: Record<string, string[]>;
};

type Action = {
  next: (router: AppRouterInstance) => void;
  back: (router: AppRouterInstance) => void;
  goTo: (router: AppRouterInstance, stepId: string) => void;
  setCurrentStepId: (newCurrentId: string) => void;
  isLocked(stepId: string): boolean;
  isNextDisabled: () => boolean;
  addAnswer: (value: string) => void;
  isLastStep: () => boolean;
};

const initSteps: State['steps'] = {};
const initAnswers: State['answers'] = config.steps.reduce(
  (acc, step) => {
    acc[step.id] = [];
    return acc;
  },
  {} as State['answers'],
);

config.steps.map((step, index) => {
  initSteps[step.id] = { ...step, locked: true };
  if (
    step.content.type === 'checkbox-group' ||
    step.content.type === 'agreement-scale'
  ) {
    initSteps[step.id] = { ...initSteps[step.id], disableNext: true };
  }
  if (index === config.steps.length - 1) {
    initSteps[step.id] = { ...initSteps[step.id], lastStep: true };
  }
});

initSteps[config.mainScreen.yesRedirectTo] = {
  ...initSteps[config.mainScreen.yesRedirectTo],
  locked: false,
};
initSteps[config.mainScreen.noRedirectTo] = {
  ...initSteps[config.mainScreen.noRedirectTo],
  locked: false,
};

export const useStore = create<State & Action>((set, get) => ({
  currentStepId: config.steps[0].id,
  answers: initAnswers,
  steps: initSteps,
  setCurrentStepId: (currentStepId) => {
    set({ currentStepId });
  },
  // config: config.steps as IStepConfig[],
  goTo: (router, stepId) => {
    const nextStep = get().steps[stepId];
    set({
      steps: {
        ...get().steps,
        [nextStep.id]: { ...get().steps[nextStep.id], locked: false },
      },
    });
    router.push(`?q=${stepId}`);
  },
  next: (router) => {
    const currentStep = get().steps[get().currentStepId];
    if (currentStep?.nextButton?.redirectTo) {
      const nextStep = get().steps[currentStep.nextButton.redirectTo];
      set({
        steps: {
          ...get().steps,
          [nextStep.id]: { ...get().steps[nextStep.id], locked: false },
        },
        currentStepId: nextStep.id,
      });
      router.push(`?q=${nextStep.id}`);
    }
  },
  back: (router) => {
    const currentStep = get().steps[get().currentStepId];
    const prevStepId = currentStep.prevStep;
    set({ currentStepId: prevStepId || config.steps[0].id });
    prevStepId ? router.push(`?q=${prevStepId}`) : router.push(`/`);
  },
  isLastStep: () => !!get().steps[get().currentStepId].lastStep,
  isLocked: (stepId) => get().steps[stepId]?.locked,
  isNextDisabled: () => !!get().steps[get().currentStepId]?.disableNext,
  addAnswer: (value) => {
    if (get().answers[get().currentStepId].includes(value)) {
      set({
        answers: {
          ...get().answers,
          [get().currentStepId]: get().answers[get().currentStepId].filter(
            (item) => item !== value,
          ),
        },
      });
    } else {
      set({
        answers: {
          ...get().answers,
          [get().currentStepId]: [...get().answers[get().currentStepId], value],
        },
      });
    }
    if (get().steps[get().currentStepId].hasOwnProperty('disableNext')) {
      if (get().answers[get().currentStepId].length === 0) {
        set({
          steps: {
            ...get().steps,
            [get().currentStepId]: {
              ...get().steps[get().currentStepId],
              disableNext: true,
            },
          },
        });
      }
      if (get().answers[get().currentStepId].length > 0) {
        set({
          steps: {
            ...get().steps,
            [get().currentStepId]: {
              ...get().steps[get().currentStepId],
              disableNext: false,
            },
          },
        });
      }
    }
  },
}));
