'use client';

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
  disabled = false,
  type = 'button',
  onClick,
}: NextButtonProps) => {
  const navigation = useNavigation();
  return (
    <div className={styles.button_wrapper}>
      <button
        type={type}
        className={styles.button}
        onClick={
          !onClick
            ? () => {
                navigation.next();
              }
            : () => {
                onClick();
              }
        }
        disabled={disabled}
      >
        {value}
      </button>
    </div>
  );
};
