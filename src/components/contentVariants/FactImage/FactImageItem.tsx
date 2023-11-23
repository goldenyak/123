import styles from './Step.module.scss';
import Image from 'next/image';
import { getImage } from '../../../utils/utils';
import { IFactImageItem } from '../../StepContent/types';

const FactImageItem = ({ text, image }: IFactImageItem) => {
  return (
    <label className={styles.label}>
      <input type='radio' name='input_name' value='input_value' />
      <div className={styles.label_wrapper}>
        <div className={styles.label_content}>
          <Image
            src={getImage(image)}
            alt='icon_hide_ip'
            className={styles.label_icon}
            width={60}
            height={70}
          />
          <div className={styles.label_text}>{text}</div>
        </div>
      </div>
    </label>
  );
};

export default FactImageItem;
