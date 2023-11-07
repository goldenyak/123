'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_adult_sites from '../../assets/icons/icon_adult_sites.png';
import icon_film_projector from '../../assets/icons/icon_film_projector.png';
import icon_social_networks from '../../assets/icons/icon_social_networks.png';
import icon_sport_sites from '../../assets/icons/icon_sport_sites.png';
import icon_other from '../../assets/icons/icon_other.png';

function Step6() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.multi_step_bar}></div>

      <header className={styles.header}>
        Where do you see this restriction most often?
      </header>

      <label className={styles.label}>
        <input type='radio' name='input_name' value='input_value' />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_film_projector}
              alt='icon_film_projector'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Netflix or other streaming</div>
          </div>
        </div>
      </label>

      <label className={styles.label}>
        <input type='radio' name='input_name' value='input_value' />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_adult_sites}
              alt='icon_adult_sites'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Adult sites</div>
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
              src={icon_social_networks}
              alt='icon_social_networks'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Social Networks</div>
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
              src={icon_sport_sites}
              alt='icon_sport_sites'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Sport sites</div>
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
              src={icon_other}
              alt='icon_other'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Other</div>
          </div>
        </div>
      </label>

      <div className={styles.button_wrapper}>
        <button onClick={() => router.push('/quiz?q=7')}>Continue</button>
      </div>
    </div>
  );
}

export default Step6;
