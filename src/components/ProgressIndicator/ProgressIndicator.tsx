'use client';
import { useRouter } from 'next/navigation';
import styles from './ProgressIndicator.module.scss';
import { useEffect, useState } from 'react';

interface ProgressIndicatorProps {
  path: string;
}

function ProgressIndicator({ path }: ProgressIndicatorProps) {
  const [filled, setFilled] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (filled < 100) {
      const timeout = setTimeout(() => setFilled((prev) => (prev += 2)), 100);
      return () => clearTimeout(timeout);
    } else {
      router.push(`${path}`);
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
