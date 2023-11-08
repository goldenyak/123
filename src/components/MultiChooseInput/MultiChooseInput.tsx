import Image from 'next/image';
import styles from './MultiChooseInput.module.scss';

interface MultiChooseInputProps {
    inputChangeHandler: () => void;
    img: any
}

export const MultiChooseInput = ({img, inputChangeHandler}: MultiChooseInputProps) => {
  return (
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
            src={img}
            alt=""
            className={styles.label_icon}
            width={40}
            height={40}
          />
          <div className={styles.label_text}>Was not working</div>
        </div>
      </div>
    </label>
  );
};
