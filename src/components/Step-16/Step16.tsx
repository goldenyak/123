'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';

function Step16() {
  const router = useRouter();
  const inputChangeHandler = () => {
    setTimeout(() => router.push('/quiz?q=17'), 200);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>
          Does the statement below characterize you?
        </h1>
      </header>

      <h2 className={styles.header_description}>
        «Before entering personal information into a website, I look at the top
        of my browser to check if there is lock symbol»
      </h2>

      <div className={styles.wrapper_for_answers}>
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
      </div>
    </div>
  );
}

export default Step16;
