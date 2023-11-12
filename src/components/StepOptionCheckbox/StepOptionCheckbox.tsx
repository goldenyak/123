import styles from './StepOptionCheckbox.module.scss';
import Image, { StaticImageData } from 'next/image';
import icon_check_blue from '../../assets/icons/icon_check_blue.svg';

interface StepOptionCheckboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: StaticImageData;
  value: string;
}

const StepOptionCheckbox = ({
  onChange,
  icon,
  value,
}: StepOptionCheckboxProps) => {
  return (
    <label className={styles.label}>
      <input
        onChange={onChange}
        type='checkbox'
        name='input_name'
        value='input_value'
      />
      <div className={styles.label_wrapper}>
        <div className={styles.label_content}>
          <Image src={icon} alt='' className={styles.label_icon} />
          <div className={styles.label_text}>{value}</div>
        </div>
        <div className={styles.label_circle}>
          <Image src={icon_check_blue} alt='' className={styles.label_check} />
        </div>
      </div>
    </label>
  );
};

export default StepOptionCheckbox;
