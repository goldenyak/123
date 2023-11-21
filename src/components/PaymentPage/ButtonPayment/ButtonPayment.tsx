import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonPaymentProps {
  children: ReactNode;
}

const ButtonPayment = ({ children }: ButtonPaymentProps) => {
  return (
    <div className={styles.button}>
      <div style={{ position: 'relative', zIndex: 10000 }}>{children}</div>
      <div className={styles.pulse} />
    </div>
  );
};

export default ButtonPayment;