'use client';
import styles from './Progressbar.module.scss';
import { useEffect, useState } from 'react';
import icon_check from '@/assets/icons/icon_check.svg';
import icon_step_back from '@/assets/icons/icon_step_back.svg';
import Image from 'next/image';
import { useNavigation } from '@/hooks/useNavigation';
import { useStore } from '@/store/useStore';

const stepProgressMap: Record<string, number> = {
  UsedAnyVpnBefore: 15,
  WhyDidntLikeOtherVpn: 25,
  VideoNotAvailableNeedFix: 38,
  VideoNotAvailableWhatSites: 44,
  MessengersNotAvailableNeedFix: 51,
  MessengersNotAvailableWhatApps: 58,
  ChooseAdditionalBenefits: 65,
  OftenUsePublicWifi: 78,
  SavePasswordsBrowser: 84,
  HowQuicklyUpdate: 89,
  StatementOpenLinksFromEmail: 96,
  StatementCheckLockSymbol: 100,
};

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const currentStepId = useStore((state) => state.currentStepId);
  const isLastStep = useStore((state) => state.isLastStep());
  const { back } = useNavigation();

  useEffect(() => {
    setProgress(stepProgressMap[currentStepId]);
  }, [currentStepId]);

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
          onClick={() => back()}
        />
        {!isLastStep && (
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
