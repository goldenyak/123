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

const NextButton = ({ value, type = 'button', onClick }: NextButtonProps) => {
  const { next } = useNavigation();
  const isNextDisabled = useStore((state) => state.isNextDisabled);

  return (
    <div className={styles.button_wrapper}>
      <button
        disabled={isNextDisabled}
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
      >
        {value}
      </button>
    </div>
  );
};

export default NextButton;
