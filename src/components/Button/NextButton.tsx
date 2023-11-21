import { useRouter } from 'next/navigation';
import { INextButton } from '../StepContent/types';
import styles from './NextButton.module.scss';

interface NextButtonProps extends INextButton {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const NextButton = ({
  value,
  redirectTo,
  disabled = false,
  type = 'button',
}: NextButtonProps) => {
  const router = useRouter();
  return (
    <div className={styles.button_wrapper}>
      <button
        type={type}
        className={styles.button}
        onClick={() => router.push(`/quiz?q=${redirectTo}`)}
        disabled={disabled}
      >
        {value}
      </button>
    </div>
  );
};
