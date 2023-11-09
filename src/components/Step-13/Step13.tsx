'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_yes from '../../assets/icons/icon_yes.png';
import icon_no from '../../assets/icons/icon_no.png';

function Step13() {
  const router = useRouter();
  return (
    <div>
      <header className={styles.header}>
        Do you save passwords to your browser?
      </header>

      <label onClick={() => router.push('/quiz?q=14')} className={styles.label}>
        <input type='radio' name='input_name' value='input_value' />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_yes}
              alt='icon_yes'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Yes</div>
          </div>
        </div>
      </label>

      <label onClick={() => router.push('/quiz?q=14')} className={styles.label}>
        <input
          type='radio'
          name='input_name'
          value='input_value'
          style={{ display: 'none' }}
        />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_no}
              alt='icon_no'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>No</div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default Step13;
