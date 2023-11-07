'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_smile_glasses from '../../assets/icons/icon_smile_glasses.png';
import icon_smile from '../../assets/icons/icon_smile.png';
import icon_thinking from '../../assets/icons/icon_thinking.png';
import icon_grimacing from '../../assets/icons/icon_grimacing.png';

function Step14() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.multi_step_bar}></div>

        <header className={styles.header}>
          How quickly do you update your devices and apps?
        </header>

        <label
          onClick={() => router.push('/quiz?q=15')}
          className={styles.label}
        >
          <input type='radio' name='input_name' value='input_value' />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_smile_glasses}
                alt='icon_smile_glasses'
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>
                I have auto-update enabled
              </div>
            </div>
          </div>
        </label>

        <label
          onClick={() => router.push('/quiz?q=15')}
          className={styles.label}
        >
          <input type='radio' name='input_name' value='input_value' />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_smile}
                alt='icon_smile'
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>
                Installing every version of the update
              </div>
            </div>
          </div>
        </label>

        <label
          onClick={() => router.push('/quiz?q=15')}
          className={styles.label}
        >
          <input
            type='radio'
            name='input_name'
            value='input_value'
            style={{ display: 'none' }}
          />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_thinking}
                alt='icon_thinking'
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>
                Installing updates through multiple versions
              </div>
            </div>
          </div>
        </label>

        <label
          onClick={() => router.push('/quiz?q=15')}
          className={styles.label}
        >
          <input
            type='radio'
            name='input_name'
            value='input_value'
            style={{ display: 'none' }}
          />
          <div className={styles.label_wrapper}>
            <div className={styles.label_content}>
              <Image
                src={icon_grimacing}
                alt='icon_grimacing'
                className={styles.label_icon}
                width={40}
                height={40}
              />
              <div className={styles.label_text}>Almost never</div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Step14;
