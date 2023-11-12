'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_yes from '../../../assets/icons/icon_yes.png';
import icon_no from '../../../assets/icons/icon_no.png';
import { decrement, increment } from '@/app/redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks/hooks';
import StepHeader from '@/components/StepHeader/StepHeader';

function Step2() {
  const router = useRouter();
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <StepHeader>Have you ever used any VPN before?</StepHeader>

      <label onClick={() => router.push('/quiz?q=3')} className={styles.label}>
        <input type='radio' name='input_name_yes' value='input_value' />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_yes}
              alt='icon_yes'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Yes</div>
          </div>
        </div>
      </label>

      <label onClick={() => router.push('/quiz?q=4')} className={styles.label}>
        <input
          type='radio'
          name='input_name_no'
          value='input_value'
          style={{ display: 'none' }}
        />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_no}
              alt=''
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>No</div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default Step2;
