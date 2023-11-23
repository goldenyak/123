'use client';

import { INextButton } from '../StepContent/types';
import styles from './NextButton.module.scss';
import { useNavigation } from '@/hooks/useNavigation';

interface NextButtonProps extends INextButton {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const NextButton = ({
  value,
  disabled = false,
  type = 'button',
}: NextButtonProps) => {
  const navigation = useNavigation();
  return (
    <div className={styles.button_wrapper}>
      <button
        type={type}
        className={styles.button}
        onClick={() => {
          navigation.next();
        }}
        disabled={disabled}
      >
        {value}
      </button>
    </div>
  );
};
