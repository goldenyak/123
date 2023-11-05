'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import { useState } from 'react';

function Step15() {
  const router = useRouter();

  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);

  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.multi_step_bar}></div>

        <header className={styles.header}>
          <h1 className={styles.header_title}>
            Does the statement below characterize you?
          </h1>
          <h2 className={styles.header_description}>
            «If I see links in the incoming email, I open them immediately»
          </h2>
        </header>

        <div className={styles.answers_wrapper}>
          <label
            className={styles.label}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          >
            <input type="radio" name="input_name" value="one" />
            <div
              className={
                isChecked ? styles.label_text : styles.label_text_checked
              }
            >
              1
            </div>
          </label>

          <label className={styles.label}>
            <input type="radio" name="input_name" value="one" />
            <div className={styles.label_text}>2</div>
          </label>

          <label className={styles.label}>
            <input type="radio" name="input_name" value="one" />
            <div className={styles.label_text}>3</div>
          </label>

          <label className={styles.label}>
            <input type="radio" name="input_name" value="one" />
            <div className={styles.label_text}>4</div>
          </label>

          <label className={styles.label}>
            <input type="radio" name="input_name" value="one" />
            <div className={styles.label_text}>5</div>
          </label>
        </div>

        <div className={styles.answers_variant}>
          <span>Not at all</span>
          <span>Totally</span>
        </div>

        <div className={styles.button_wrapper}>
          <button onClick={() => router.push('/step-16')}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Step15;
