'use client';

import { useRouter } from 'next/navigation';
import { INextButton } from '../StepContent/types';
import styles from './NextButton.module.scss';
import { useStore } from '@/store/useStore';
import { useNavigation } from '@/store/useNavigation';

interface NextButtonProps extends INextButton {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const NextButton = ({
  value,
  redirectTo,
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
          // !onClick ? () => router.push(`/quiz?q=${redirectTo}`) : onClick
          () => {
            // if (!(typeof window === undefined)) {
            navigation.next();
            // }
          }
        }
        disabled={disabled}
      >
        {value}
      </button>
    </div>
  );
};
