'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_rocket from '../../assets/icons/icon_rocket.png';
import icon_locked from '../../assets/icons/icon_locked.png';
import icon_world_map from '../../assets/icons/icon_world_map.png';
import icon_ninja from '../../assets/icons/icon_ninja.png';
import { ProgressBar } from '../ProgressBar/ProgressBar';

function Step9() {
  const router = useRouter();
  return (
    <div>
      <header className={styles.header}>
        Choose additional benefits of VPN Lumos:
      </header>

      <label className={styles.label}>
        <input type='radio' name='input_name' value='input_value' />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_rocket}
              alt='icon_rocket'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Internet speed boost</div>
          </div>
        </div>
      </label>

      <label className={styles.label}>
        <input type='radio' name='input_name' value='input_value' />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_locked}
              alt='icon_locked'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Secure Online browsing</div>
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
              src={icon_world_map}
              alt='icon_world_map'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Hide real location</div>
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
              src={icon_ninja}
              alt='icon_ninja'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Hide browser history</div>
          </div>
        </div>
      </label>

      <div className={styles.button_wrapper}>
        <button onClick={() => router.push('/quiz?q=10')}>Continue</button>
      </div>
    </div>
  );
}

export default Step9;
