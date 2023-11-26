'use client';

import { useStore } from '@/store/useStore';
import { INextButton } from '../StepContent/types';
import styles from './NextButton.module.scss';
import { useNavigation } from '@/hooks/useNavigation';

interface NextButtonProps extends INextButton {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const NextButton = ({
  value,
  type = 'button',
  onClick,
}: NextButtonProps) => {
  const { next } = useNavigation();
  const { isNextDisabled } = useStore();

  console.log(isNextDisabled());

  return (
    <div className={styles.button_wrapper}>
      <button
        type={type}
        className={styles.button}
        onClick={
          !onClick
            ? () => {
                next();
              }
            : () => {
                onClick();
              }
        }
        disabled={isNextDisabled()}
      >
        {value}
      </button>
    </div>
  );
};
