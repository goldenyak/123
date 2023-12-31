'use client';
import styles from './ProgressBar.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import icon_check from '../../assets/icons/icon_check.svg';
import icon_step_back from '../../assets/icons/icon_step_back.svg';
import Image from 'next/image';

const stepProgressMap: Record<string, number> = {
  '2': 15,
  '3': 25,
  '5': 38,
  '6': 44,
  '7': 51,
  '8': 58,
  '9': 65,
  '12': 78,
  '13': 84,
  '14': 89,
  '15': 96,
  '16': 100,
};

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const params = useSearchParams();
  const stepNumber = params.get('q') || '';
  const router = useRouter();

  const isFirstStep = (step: string) => step === '2';

  const isLastStep = () => stepNumber === '20';

  useEffect(() => {
    setProgress(stepProgressMap[stepNumber]);
  }, [stepNumber]);

  const goBack = useCallback((step: string) => {
    if (isFirstStep(step)) {
      router.push(`/`);
    } else {
      router.push(`/quiz?q=${parseInt(step) - 1}`);
    }
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        position: 'fixed',
        left: '0',
        backgroundColor: '#FFF',
        zIndex: '10000',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '15px',
        paddingBottom: '15px',
      }}
    >
      <div className={styles.wrapper}>
        <Image
          className={styles.btn_back}
          src={icon_step_back}
          alt=''
          onClick={() => goBack(stepNumber)}
        />
        {!isLastStep() && (
          <div style={{ width: '100%', position: 'relative' }}>
            <div
              style={{
                transition: 'all 0.5s ease-in-out',
                position: 'absolute',
                width: `${progress}%`,
                background: '#5072F1',
                height: '3px',
              }}
            ></div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                top: '50%',
                transform: ' translateY(-50%)',
              }}
            >
              <div className={[styles.circle, styles.circle_filled].join(' ')}>
                <Image src={icon_check} alt='' />
              </div>
              <div
                className={
                  progress < 32
                    ? styles.circle
                    : [styles.circle, styles.circle_filled].join(' ')
                }
              >
                {progress > 32 && <Image src={icon_check} alt='' />}
              </div>
              <div
                className={
                  progress < 63
                    ? styles.circle
                    : [styles.circle, styles.circle_filled].join(' ')
                }
              >
                {progress > 63 && <Image src={icon_check} alt='' />}
              </div>
              <div
                className={
                  progress < 97
                    ? styles.circle
                    : [styles.circle, styles.circle_filled].join(' ')
                }
              >
                {progress > 96 && <Image src={icon_check} alt='' />}
              </div>
            </div>
            <div
              style={{
                width: '100%',
                background: '#E4E9F9',
                height: '3px',
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};
