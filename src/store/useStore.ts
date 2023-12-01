import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { config } from '@/utils/utils';
import { IStepConfig } from '@/components/StepContent/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type State = {
  currentStepId: string;
  steps: Record<
    string,
    IStepConfig & { locked: boolean; disableNext?: boolean; lastStep?: boolean }
  >;
  answers: Record<string, { values: string[]; score: number }>;
  isNextDisabled: boolean;
};

type Action = {
  next: (router: AppRouterInstance) => void;
  back: (router: AppRouterInstance) => void;
  goTo: (router: AppRouterInstance, stepId: string) => void;
  setCurrentStepId: (newCurrentId: string) => void;
  isLocked(stepId: string): boolean;
  addAnswer: (value: string, score?: number) => void;
  isLastStep: () => boolean;
  getTotalScore: () => number;
  resetAnswers: () => void;
};

const initSteps: State['steps'] = {};
const initAnswers: State['answers'] = config.steps.reduce(
  (acc, step) => {
    acc[step.id] = { values: [], score: 0 };
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

export const useStore = create<State & Action>()(
  persist(
    (set, get) => ({
      isNextDisabled: Boolean(false),
      currentStepId: config.steps[0].id,
      answers: initAnswers,
      steps: initSteps,
      setCurrentStepId: (currentStepId) => {
        set({ currentStepId });
      },
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
        set({
          answers: {
            ...get().answers,
            [get().currentStepId]: { values: [], score: 0 },
          },
        });
        prevStepId ? router.push(`?q=${prevStepId}`) : router.push(`/`);
      },
      isLastStep: () => !!get().steps[get().currentStepId].lastStep,
      isLocked: (stepId) => get().steps[stepId]?.locked,
      resetAnswers: () => {
        set({
          answers: {
            ...get().answers,
            [get().currentStepId]: { values: [], score: 0 },
          },
        });
        if (get().steps[get().currentStepId].hasOwnProperty('disableNext')) {
          set({
            isNextDisabled: true,
          });
        }
      },
      addAnswer: (value, score) => {
        const oldAnswers = get().answers;
        const currentStepId = get().currentStepId;
        const currentAnswerStep = oldAnswers[currentStepId];
        const steps = get().steps;
        const currentStep = steps[currentStepId];
        if (currentAnswerStep.values.includes(value)) {
          set({
            answers: {
              ...oldAnswers,
              [currentStepId]: {
                ...currentAnswerStep,
                values: currentAnswerStep.values.filter(
                  (item) => item !== value,
                ),
              },
            },
          });
          if (
            currentStep.content.type === 'checkbox-group' ||
            currentStep.content.type === 'radio-group'
          ) {
            const score = currentStep.content.options.find(
              (item) => item.value === value,
            )?.score;
            const oldTotalScore = currentAnswerStep.score;
            set({
              answers: {
                ...oldAnswers,
                [currentStepId]: {
                  ...get().answers[currentStepId],
                  score: oldTotalScore - (score || 0),
                },
              },
            });
          }
          if (currentStep.content.type === 'agreement-scale') {
            if (!!score) {
              set({
                answers: {
                  ...oldAnswers,
                  [currentStepId]: {
                    ...get().answers[currentStepId],
                    score: currentAnswerStep.score - (score || 0),
                  },
                },
              });
            }
          }
        } else {
          set({
            answers: {
              ...oldAnswers,
              [currentStepId]: {
                ...currentAnswerStep,
                values: [...currentAnswerStep.values, value],
              },
            },
          });
          if (
            currentStep.content.type === 'checkbox-group' ||
            currentStep.content.type === 'radio-group'
          ) {
            const score = currentStep.content.options.find(
              (item) => item.value === value,
            )?.score;
            set({
              answers: {
                ...oldAnswers,
                [currentStepId]: {
                  ...get().answers[currentStepId],
                  score: currentAnswerStep.score + (score || 0),
                },
              },
            });
          }
          if (currentStep.content.type === 'agreement-scale') {
            if (!!score) {
              set({
                answers: {
                  ...oldAnswers,
                  [currentStepId]: {
                    ...get().answers[currentStepId],
                    score: currentAnswerStep.score + (score || 0),
                  },
                },
              });
            }
          }
        }
        if (currentStep.hasOwnProperty('disableNext')) {
          if (get().answers[currentStepId].values.length === 0) {
            set({
              isNextDisabled: true,
            });
          }
          if (get().answers[currentStepId].values.length > 0) {
            set({
              isNextDisabled: false as const,
            });
          }
        }
      },
      getTotalScore: () =>
        Object.values(get().answers).reduce((acc, item) => acc + item.score, 0),
    }),
    {
      name: 'quiz-storage',
    },
  ),
);
