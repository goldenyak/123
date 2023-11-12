'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_almost_never from '../../../assets/icons/icon_almost_never.png';
import icon_rarely from '../../../assets/icons/icon_rarely.png';
import icon_every_week from '../../../assets/icons/icon_every_week.png';
import icon_often from '../../../assets/icons/icon_often.png';
import icon_several_times from '../../../assets/icons/icon_several_times.png';
import StepHeader from '@/components/StepHeader/StepHeader';

function Step12() {
  const router = useRouter();
  return (
    <div>
      <StepHeader>How often do you use Public Wi-Fi?</StepHeader>

      <label onClick={() => router.push('/quiz?q=13')} className={styles.label}>
        <input type='radio' name='input_name' value='input_value' />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_almost_never}
              alt='icon_almost_never'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Almost never</div>
          </div>
        </div>
      </label>

      <label onClick={() => router.push('/quiz?q=13')} className={styles.label}>
        <input type='radio' name='input_name' value='input_value' />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_rarely}
              alt='icon_rarely'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Rarely</div>
          </div>
        </div>
      </label>
      <label onClick={() => router.push('/quiz?q=13')} className={styles.label}>
        <input
          type='radio'
          name='input_name'
          value='input_value'
          style={{ display: 'none' }}
        />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_every_week}
              alt='icon_every_week'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Every week</div>
          </div>
        </div>
      </label>

      <label onClick={() => router.push('/quiz?q=13')} className={styles.label}>
        <input
          type='radio'
          name='input_name'
          value='input_value'
          style={{ display: 'none' }}
        />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_often}
              alt='icon_often'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Often</div>
          </div>
        </div>
      </label>

      <label onClick={() => router.push('/quiz?q=13')} className={styles.label}>
        <input
          type='radio'
          name='input_name'
          value='input_value'
          style={{ display: 'none' }}
        />
        <div className={styles.label_wrapper}>
          <div className={styles.label_content}>
            <Image
              src={icon_several_times}
              alt='icon_several_times'
              className={styles.label_icon}
              width={40}
              height={40}
            />
            <div className={styles.label_text}>Several times a day</div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default Step12;
