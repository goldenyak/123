'use client';
import styles from './ProgressBar.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

function extractStepNumber(str: string) {
  const match = str.match(/\/step-(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

const TOTAL_STEPS = 20;

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const pathName = usePathname();

  useEffect(() => {
    setProgress(
      (100 / TOTAL_STEPS) * (extractStepNumber(pathName) || TOTAL_STEPS),
    );
  }, [pathName]);

  return (
    <div style={{ width: '100%', margin: '50px 0', position: 'relative' }}>
      <button
        onClick={() => {
          setProgress((state) => state + 20);
        }}
      >
        add
      </button>
      <div
        style={{
          transition: 'all 0.5s ease-in-out',
          position: 'absolute',
          width: `${progress}px`,
          background: '#5072F1',
          height: '3px',
        }}
      ></div>
      <div
        style={{
          width: '100%',
          background: '#E4E9F9',
          height: '3px',
        }}
      ></div>
    </div>
  );
};
