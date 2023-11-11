'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_rocket from '../../../assets/icons/icon_rocket.png';
import icon_locked from '../../../assets/icons/icon_locked.png';
import icon_world_map from '../../../assets/icons/icon_world_map.png';
import icon_ninja from '../../../assets/icons/icon_ninja.png';
import { Button } from '../../Button/Button';
import { ChangeEvent, useState } from 'react';
import icon_check_blue from '../../../assets/icons/icon_check_blue.svg';

function Step9() {
  const [isChecked, setIsChecked] = useState(0);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      setIsChecked((prev) => prev + 1);
    } else {
      setIsChecked((prev) => prev - 1);
    }
  };

  const router = useRouter();
  return (
    <div>
      <header className={styles.header}>
        Choose additional benefits of VPN Lumos:
      </header>

      <label className={styles.label}>
        <input
          onChange={(e) => inputChangeHandler(e)}
          type='checkbox'
          name='input_name'
          value='input_value'
        />
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
          <div className={styles.label_circle}>
            <Image
              src={icon_check_blue}
              alt=''
              className={styles.label_check}
            />
          </div>
        </div>
      </label>

      <label className={styles.label}>
        <input
          onChange={(e) => inputChangeHandler(e)}
          type='checkbox'
          name='input_name'
          value='input_value'
        />
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
          <div className={styles.label_circle}>
            <Image
              src={icon_check_blue}
              alt=''
              className={styles.label_check}
            />
          </div>
        </div>
      </label>

      <label className={styles.label}>
        <input
          onChange={(e) => inputChangeHandler(e)}
          type='checkbox'
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
          <div className={styles.label_circle}>
            <Image
              src={icon_check_blue}
              alt=''
              className={styles.label_check}
            />
          </div>
        </div>
      </label>

      <label className={styles.label}>
        <input
          onChange={(e) => inputChangeHandler(e)}
          type='checkbox'
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
          <div className={styles.label_circle}>
            <Image
              src={icon_check_blue}
              alt=''
              className={styles.label_check}
            />
          </div>
        </div>
      </label>
      <Button
        title='Continue'
        onClick={() => router.push('/quiz?q=10')}
        disabled={isChecked ? false : true}
      />
    </div>
  );
}

export default Step9;
