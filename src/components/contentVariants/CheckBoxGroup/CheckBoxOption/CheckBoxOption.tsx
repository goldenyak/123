import styles from './CheckBoxOption.module.scss';
import Image, { StaticImageData } from 'next/image';
import icon_check_blue from '../../../../assets/icons/icon_check_blue.svg';
import { useStore } from '@/store/useStore';
import React from 'react';

interface CheckBoxOptionProps {
  icon: StaticImageData;
  value: string;
}

const CheckBoxOption = ({ icon, value }: CheckBoxOptionProps) => {
  const addAnswer = useStore((state) => state.addAnswer);
  return (
    <label className={styles.label}>
      <input type='checkbox' name='input_name' value='input_value' />
      <div
        className={styles.label_wrapper}
        onClick={(e) => {
          e.stopPropagation;
          addAnswer(value);
        }}
      >
        <div className={styles.label_content}>
          <div className={styles.icon_circle}>
            <Image src={icon} alt='' />
          </div>
          <div className={styles.label_text}>{value}</div>
        </div>
        <div className={styles.label_circle}>
          <Image src={icon_check_blue} alt='' className={styles.label_check} />
        </div>
      </div>
    </label>
  );
};

export default React.memo(CheckBoxOption);
