import styles from './Button.module.scss';

interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled: boolean;
}

export const Button = ({ title, onClick, disabled }: ButtonProps) => {
  return (
    <div className={styles.button_wrapper}>
      <button type="button" className={styles.button} onClick={onClick} disabled={disabled}>
        {title}
      </button>
    </div>
  );
};
