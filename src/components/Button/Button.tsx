import styles from './Button.module.scss';

interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  title,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  return (
    <div className={styles.button_wrapper}>
      <button
        type={type}
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};