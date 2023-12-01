import { ReactNode } from 'react';
import styles from './StepHeader.module.scss';

interface StepHeaderProps {
  value: ReactNode;
  type?: 'left' | 'center';
}

const StepHeader = ({ value, type = 'left' }: StepHeaderProps) => {
  return (
    <header
      className={
        type === 'center'
          ? [styles.header, styles.center].join(' ')
          : styles.header
      }
      style={{
        textAlign: type,
      }}
    >
      {value}
    </header>
  );
};

export default StepHeader;
