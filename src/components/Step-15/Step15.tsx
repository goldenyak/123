'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import { useState } from 'react';

function Step15() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const inputChangeHandler = () => {
    setIsChecked(true);
  };

  return (
    <div>
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
        <label className={styles.label}>
          <input
            onChange={inputChangeHandler}
            className={styles.input}
            type='radio'
            name='input_name'
            value='one'
          />
          <div className={styles.label_text}>1</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={inputChangeHandler}
            className={styles.input}
            type='radio'
            name='input_name'
            value='two'
          />
          <div className={styles.label_text}>2</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={inputChangeHandler}
            className={styles.input}
            type='radio'
            name='input_name'
            value='three'
          />
          <div className={styles.label_text}>3</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={inputChangeHandler}
            className={styles.input}
            type='radio'
            name='input_name'
            value='four'
          />
          <div className={styles.label_text}>4</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={inputChangeHandler}
            className={styles.input}
            type='radio'
            name='input_name'
            value='five'
          />
          <div className={styles.label_text}>5</div>
        </label>
      </div>

      <div className={styles.answers_variant}>
        <span>Not at all</span>
        <span>Totally</span>
      </div>

      <div
        className={
          isChecked ? styles.button_wrapper : styles.button_wrapper_disabled
        }
      >
        <button
          disabled={isChecked ? false : true}
          onClick={() => router.push('/quiz?q=16')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Step15;
