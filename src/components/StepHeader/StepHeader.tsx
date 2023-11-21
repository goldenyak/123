import { ReactNode } from 'react';
import styles from './StepHeader.module.scss';

interface StepHeaderProps {
  value: ReactNode;
  align?: 'left' | 'center';
}

const StepHeader = ({ value, align = 'left' }: StepHeaderProps) => {
  return (
    <header
      className={styles.header}
      style={{
        textAlign: align,
      }}
    >
      {value}
    </header>
  );
};

export default StepHeader;
