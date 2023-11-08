'use client';
import { useRouter } from 'next/navigation';
import styles from './AboutVpn.module.scss';
import Image from 'next/image';
import about_vpn from '../../assets/images/about_vpn.webp';

function AboutVpn() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.image_wrapper}>
          <Image
            src={about_vpn}
            alt="about_vpn"
            className={styles.image}
            width={375}
            height={315}
            priority={true}
          />
        </div>

        <div>
          <h1 className={styles.header}>Virtual Private Network (VPN)</h1>
          <h3 className={styles.description}>
            VPN a service that protects your internet connection and privacy
            online.
          </h3>
          <h3 className={styles.description}>
            VVPN changes your real IP and encrypts your internet traffic,
            thereby makes it difficult for others to track your online
            activities or identify your location
          </h3>
          <h3 className={styles.description}>That is why you get the opportunity to use services that are not available in your country.</h3>
        </div>

        <div className={styles.button_wrapper}>
          <button onClick={() => router.push('/quiz?q=2')}>
            Wow! That’s great
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutVpn;
