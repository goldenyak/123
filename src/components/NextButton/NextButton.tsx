import { useRouter } from 'next/navigation';
import { INextButton } from '../StepContent/types';
import styles from './NextButton.module.scss';

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
  const router = useRouter();
  return (
    <div className={styles.button_wrapper}>
      <button
        type={type}
        className={styles.button}
        onClick={
          !onClick ? () => router.push(`/quiz?q=${redirectTo}`) : onClick
        }
        disabled={disabled}
      >
        {value}
      </button>
    </div>
  );
};
