import { StaticImageData } from 'next/image';
import styles from './StepOption.module.scss';
import Image from 'next/image';

interface StepOptionProps {
  onClick: () => void;
  icon: StaticImageData;
  value: string;
}

const StepOption = ({ onClick, icon, value }: StepOptionProps) => {
  return (
    <label onClick={onClick} className={styles.label}>
      <input type='radio' value='input_value' />
      <div className={styles.label_wrapper}>
        <div className={styles.label_content}>
          <Image src={icon} alt='' className={styles.label_icon} />
          <div className={styles.label_text}>{value}</div>
        </div>
      </div>
    </label>
  );
};

export default StepOption;
