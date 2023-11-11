'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_hide_ip from '../../../assets/icons/icon_hide_ip.png';
import icon_helps_watch from '../../../assets/icons/icon_helps_watch.png';
import icon_helps_access from '../../../assets/icons/icon_helps_access.png';
import { Button } from '../../Button/Button';

function Step4() {
  const router = useRouter();
  return (
    <div>
      <header className={styles.header}>
        With VPN Lumos you get a <span>75% faster</span> online connection
      </header>

      <p className={styles.header_description}>Also, VPN Lumos :</p>

      <label className={styles.label}>
        <input type='radio' name='input_name' value='input_value' />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_hide_ip}
              alt='icon_hide_ip'
              className={styles.label_icon}
              width={60}
              height={70}
            />
            <div className={styles.label_text}>
              Hides your IP and does not storage your data
            </div>
          </div>
        </div>
      </label>

      <label className={styles.label}>
        <input type='radio' name='input_name' value='input_value' />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_helps_watch}
              alt='icon_helps_watch'
              className={styles.label_icon}
              width={60}
              height={70}
            />
            <div className={styles.label_text}>
              Helps watch videos that are not available in your country
            </div>
          </div>
        </div>
      </label>

      <label className={styles.label}>
        <input
          type='radio'
          name='input_name'
          value='input_value'
          style={{ display: 'none' }}
        />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_helps_access}
              alt='icon_helps_access'
              className={styles.label_icon}
              width={60}
              height={70}
            />
            <div className={styles.label_text}>
              Helps you access social networks and messengers
            </div>
          </div>
        </div>
      </label>

      <Button
        title='Continue'
        onClick={() => router.push('/quiz?q=5')}
        disabled={false}
      />
    </div>
  );
}

export default Step4;