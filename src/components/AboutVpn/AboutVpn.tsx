'use client';
import { useRouter } from 'next/navigation';
import styles from './AboutVpn.module.css';

function AboutVpn() {
  const router = useRouter();
  return (
    <div className={styles.main_div}>
      <p>About vpn</p>
      <div className={styles.button_wrapper}>
        <button onClick={() => router.push('/step-2')} className={styles.button} type="button">OK, GOT IT</button>
      </div>
    </div>
  );
}

export default AboutVpn;
