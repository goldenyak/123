'use client';
import styles from './ProgressBar.module.scss';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const TOTAL_STEPS = 20;

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const params = useSearchParams();
  const stepNumber = params.get('q');

  useEffect(() => {
    if (stepNumber) {
      setProgress((100 / TOTAL_STEPS) * parseInt(stepNumber) || TOTAL_STEPS);
    }
  }, [stepNumber]);

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
