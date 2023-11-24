'use client';

import styles from './Analyzer.module.scss';
import Image from 'next/image';
import loader from '../../../assets/icons/loader.png';
import StepHeader from '../../StepHeader/StepHeader';
import { IAnalyzer } from '../../StepContent/types';
import { useNavigation } from '@/hooks/useNavigation';

type AnalyzerProps = Omit<IAnalyzer, 'type'>;

function Analyzer({ header, stepsContent, redirectTo }: AnalyzerProps) {
  const { goTo } = useNavigation();

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.image_wrapper}>
        <Image
          src={loader}
          alt='loader'
          className={styles.image}
          width={75}
          height={72}
          priority={true}
        />
      </div>
      {header && <StepHeader type='center' value={header} />}

      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIconWrapper}>
            <div className={styles.featureIconBorderAnim}></div>
            <div className={styles.featureIconImageAnim}></div>
            <div className={styles.featureIconShadowAnim}></div>
          </div>
          <div className={styles.featureTextAnim}>{stepsContent[0]}</div>
          <div className={styles.stripe}></div>
          <div className={styles.stripeActiveWrapperAnim}>
            <div className={styles.stripeActive}></div>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIconWrapper}>
            <div className={styles.featureIconBorderAnim}></div>
            <div className={styles.featureIconImageAnim}></div>
            <div className={styles.featureIconShadowAnim}></div>
          </div>
          <div className={styles.featureTextAnim}>{stepsContent[1]}</div>
          <div className={styles.stripe}></div>
          <div className={styles.stripeActiveWrapperAnim}>
            <div className={styles.stripeActive}></div>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIconWrapper}>
            <div className={styles.featureIconBorderAnim}></div>
            <div className={styles.featureIconImageAnim}></div>
            <div className={styles.featureIconShadowAnim}></div>
          </div>
          <div className={styles.featureTextAnim}>{stepsContent[2]}</div>
          <div className={styles.stripe}></div>
          <div className={styles.stripeActiveWrapperAnim}>
            <div className={styles.stripeActive}></div>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIconWrapper}>
            <div className={styles.featureIconBorderAnim}></div>
            <div className={styles.featureIconImageAnim}></div>
            <div className={styles.featureIconShadowAnim}></div>
          </div>
          <div
            className={styles.featureTextAnim}
            onAnimationEnd={() => setTimeout(() => goTo(redirectTo), 500)}
          >
            {stepsContent[3]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analyzer;
