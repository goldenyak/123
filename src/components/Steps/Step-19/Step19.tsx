'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import loader from '../../../assets/icons/loader.png';

function Step19() {
  const router = useRouter();

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
      <h1 className={styles.header}>
        We optimize the settings according to your preferences...
      </h1>

      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIconWrapper}>
            <div className={styles.featureIconBorderAnim}></div>
            <div className={styles.featureIconImageAnim}></div>
            <div className={styles.featureIconShadowAnim}></div>
          </div>
          <div className={styles.featureTextAnim}>Analyzing received data</div>
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
          <div className={styles.featureTextAnim}>
            Searching for a perfect plan
          </div>
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
          <div className={styles.featureTextAnim}>
            We analyze possible content restrictions in your country...
          </div>
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
            onAnimationEnd={() =>
              setTimeout(() => router.push('/quiz?q=20'), 500)
            }
          >
            Optimizing VPN settings for maximum security...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step19;