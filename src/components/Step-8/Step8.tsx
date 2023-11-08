'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_whatsapp from '../../assets/icons/icon_whatsapp.png';
import icon_facebook from '../../assets/icons/icon_facebook.png';
import icon_telegram from '../../assets/icons/icon_telegram.png';
import icon_viber from '../../assets/icons/icon_viber.png';
import { Button } from '../Button/Button';
import { ChangeEvent, useState } from 'react';

function Step8() {
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
        Where do you see this restriction most often?
      </header>

      <label className={styles.label}>
        <input
          onChange={(e) => inputChangeHandler(e)}
          type="checkbox"
          name="input_name"
          value="one"
        />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_whatsapp}
              alt="icon_whatsapp"
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>WhatsApp</div>
          </div>
        </div>
      </label>

      <label className={styles.label}>
        <input
          onChange={inputChangeHandler}
          type="checkbox"
          name="input_name"
          value="input_value"
        />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_facebook}
              alt="icon_facebook"
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Facebook messenger</div>
          </div>
        </div>
      </label>

      <label className={styles.label}>
        <input
          onChange={inputChangeHandler}
          type="checkbox"
          name="input_name2"
          value="input_value"
          style={{ display: 'none' }}
        />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_telegram}
              alt="icon_telegram"
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Telegram</div>
          </div>
        </div>
      </label>

      <label className={styles.label}>
        <input
          onChange={inputChangeHandler}
          type="checkbox"
          name="input_name"
          value="input_value"
          style={{ display: 'none' }}
        />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_viber}
              alt="icon_viber"
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Viber</div>
          </div>
        </div>
      </label>
      <Button
        title="Continue"
        onClick={() => router.push('/quiz?q=9')}
        disabled={isChecked ? false : true}
      />
    </div>
  );
}

export default Step8;
