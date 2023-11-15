import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonPaymentProps {
  children: ReactNode;
}

const ButtonPayment = ({ children }: ButtonPaymentProps) => {
  return <div className={styles.button}>{children}</div>;
};

export default ButtonPayment;
