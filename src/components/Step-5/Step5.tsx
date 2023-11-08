'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_yes from '../../assets/icons/icon_yes.png';
import icon_no from '../../assets/icons/icon_no.png';

function Step5() {
  const router = useRouter();
  return (
    <div>
        <header className={styles.header}>
          Do you need to fix «Video is not available in your country» issue?
        </header>

        <label onClick={() => router.push('/quiz?q=6')} className={styles.label}>
          <input
            type="radio"
            name="input_name_yes"
            value="input_value"
          />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_yes}
                alt=""
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>
                Yes
              </div>
            </div>
          </div>
        </label>

        <label onClick={() => router.push('/quiz?q=7')} className={styles.label}>
          <input
            type="radio"
            name="input_name_no"
            value="input_value"
          />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_no}
                alt=""
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>
                No
              </div>
            </div>
          </div>
        </label>
      </div>
  );
}

export default Step5;
