import styles from './StepOptionNumber.module.scss';

interface StepOptionNumberProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepOptionNumber = ({ onChange }: StepOptionNumberProps) => {
  return (
    <div className={styles.wrapper_for_answers}>
      <div className={styles.answers_wrapper}>
        <label className={styles.label}>
          <input
            onChange={onChange}
            className={styles.input}
            type='radio'
            name='input_name'
            value='one'
          />
          <div className={styles.label_text}>1</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={onChange}
            className={styles.input}
            type='radio'
            name='input_name'
            value='two'
          />
          <div className={styles.label_text}>2</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={onChange}
            className={styles.input}
            type='radio'
            name='input_name'
            value='three'
          />
          <div className={styles.label_text}>3</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={onChange}
            className={styles.input}
            type='radio'
            name='input_name'
            value='four'
          />
          <div className={styles.label_text}>4</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={onChange}
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
  );
};

export default StepOptionNumber;
