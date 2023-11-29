import { StaticImageData } from 'next/image';
import styles from './RadioOption.module.scss';
import Image from 'next/image';
import { useNavigation } from '@/hooks/useNavigation';
import { useStore } from '@/store/useStore';

interface RadioOptionsProps {
  redirectTo: string;
  icon: StaticImageData;
  value: string;
}

const RadioOption = ({ redirectTo, icon, value }: RadioOptionsProps) => {
  const { goTo } = useNavigation();
  const addAnswer = useStore((state) => state.addAnswer);
  return (
    <label className={styles.label}>
      <input type='radio' value='input_value' />
      <div
        className={styles.label_wrapper}
        onClick={() => {
          goTo(redirectTo);
          addAnswer(value);
        }}
      >
        <div className={styles.label_content}>
          <div className={styles.icon_circle}>
            <Image src={icon} alt='' />
          </div>
          <div className={styles.label_text}>{value}</div>
        </div>
      </div>
    </label>
  );
};

export default RadioOption;
