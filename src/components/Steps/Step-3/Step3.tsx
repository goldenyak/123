'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_was_not_working from '../../../assets/icons/icon_was_not_working.png';
import icon_expensive from '../../../assets/icons/icon_expensive.png';
import icon_low_connection from '../../../assets/icons/icon_low_connection.png';
import icon_was_not_safe from '../../../assets/icons/icon_was_not_safe.png';
import icon_other from '../../../assets/icons/icon_other.png';
import icon_check_blue from '../../../assets/icons/icon_check_blue.svg';
import { ChangeEvent, useState } from 'react';
import { Button } from '../../Button/Button';

function Step3() {
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
        What did not you like about other VPN services before?
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
              src={icon_was_not_working}
              alt=''
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Was not working</div>
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
              src={icon_expensive}
              alt=''
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Too expensive</div>
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
              src={icon_low_connection}
              alt=''
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Low connection speed</div>
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
              src={icon_was_not_safe}
              alt=''
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Wasn’t safe</div>
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
              src={icon_other}
              alt=''
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Other</div>
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
        onClick={() => router.push('/quiz?q=4')}
        disabled={isChecked ? false : true}
      />
    </div>
  );
}

export default Step3;
