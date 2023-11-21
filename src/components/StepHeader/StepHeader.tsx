import { ReactNode } from 'react';
import styles from './StepHeader.module.scss';

interface StepHeaderProps {
  children: ReactNode;
  align?: 'left' | 'center';
}

const StepHeader = ({ children, align = 'left' }: StepHeaderProps) => {
  return (
    <header
      className={styles.header}
      style={{
        textAlign: align,
      }}
    >
      {children}
    </header>
  );
};

export default StepHeader;
