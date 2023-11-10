'use client';
import styles from './MainScreen.module.scss';
import { useRouter } from 'next/navigation';
import logo from '../../assets/icons/logo.svg';
import main_image from '../../assets/images/main_image.png';
import Image from 'next/image';

function MainScreen() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.content_wrapper}>
        <div className={styles.logo_wrapper}>
          <Image alt='VPN Lumos' src={logo} />
          <div className={styles.logo_title}>VPN Lumos</div>
        </div>
        <div
          style={{
            color: '#FFF',
            textAlign: 'center',
            fontSize: ' 24px',
            fontWeight: '700',
            padding: '0 10px',
          }}
        >
          Do you know what is VPN?
        </div>
        <div className={styles.text_wrapper}>
          <div className={styles.description}></div>
          <div className={styles.buttons_wrapper}>
            <button
              onClick={() => router.push('/quiz?q=2')}
              className={styles.btn}
            >
              Yes
            </button>
            <button
              onClick={() => router.push('/about-vpn')}
              className={styles.btn}
            >
              Not really
            </button>
          </div>
        </div>
        <Image alt='MainImage' src={main_image} className={styles.main_image} />
        <div className={styles.privacy}>
          By continuing you agree{'\n'}to our{' '}
          <span
            style={{
              fontWeight: '700',
            }}
          >
            Terms of Service
          </span>{' '}
          and
          <span
            style={{
              fontWeight: '700',
            }}
          >
            {' '}
            Privacy Policy
          </span>
        </div>
      </div>
    </main>
  );
}
export default MainScreen;
