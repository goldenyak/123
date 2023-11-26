'use client';
import styles from './ProgressIndicator.module.scss';
import { useEffect, useState } from 'react';
import { IProgressIndicator } from '../StepContent/types';
import { useNavigation } from '@/hooks/useNavigation';

function ProgressIndicator({ redirectTo }: IProgressIndicator) {
  const [filled, setFilled] = useState(0);
  const { goTo } = useNavigation();

  useEffect(() => {
    if (filled < 100) {
      const timeout = setTimeout(() => setFilled((prev) => (prev += 2)), 100);
      return () => clearTimeout(timeout);
    } else {
      goTo(redirectTo);
    }
  }, [filled]);

  return (
    <div className={styles.zx}>
      <div className={styles.progressbar_wrapper}>
        <div
          className={styles.progressbar_content}
          style={{
            width: `${filled}%`,
          }}
        ></div>
        <span className={styles.progress_percent}>Progress {filled}%</span>
      </div>
    </div>
  );
}

export default ProgressIndicator;
