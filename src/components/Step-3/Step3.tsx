'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_yes from '../../assets/icons/icon_yes.png';
import icon_no from '../../assets/icons/icon_no.png';
import icon_was_not_working from '../../assets/icons/icon_was_not_working.png';
import icon_expensive from '../../assets/icons/icon_expensive.png';
import icon_low_connection from '../../assets/icons/icon_low_connection.png';
import icon_was_not_safe from '../../assets/icons/icon_was_not_safe.png';
import icon_other from '../../assets/icons/icon_other.png';


function Step3() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.multi_step_bar}></div>

        <header className={styles.header}>
          What did not you like about other VPN services before?
        </header>

        <label className={styles.label}>
          <input type="radio" name="input_name" value="input_value" />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_was_not_working}
                alt=""
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>Was not working</div>
            </div>
          </div>
        </label>

        <label className={styles.label}>
          <input type="radio" name="input_name" value="input_value" />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_expensive}
                alt=""
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>Too expensive</div>
            </div>
          </div>
        </label>

        <label className={styles.label}>
          <input
            type="radio"
            name="input_name"
            value="input_value"
            style={{ display: 'none' }}
          />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_low_connection}
                alt=""
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>Low connection speed</div>
            </div>
          </div>
        </label>

        <label className={styles.label}>
          <input
            type="radio"
            name="input_name"
            value="input_value"
            style={{ display: 'none' }}
          />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_was_not_safe}
                alt=""
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>Wasn’t safe</div>
            </div>
          </div>
        </label>

        <label className={styles.label}>
          <input
            type="radio"
            name="input_name"
            value="input_value"
            style={{ display: 'none' }}
          />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_other}
                alt=""
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>Other</div>
            </div>
          </div>
        </label>

        <div className={styles.button_wrapper}>
          <button onClick={() => router.push('/step-4')}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Step3;
