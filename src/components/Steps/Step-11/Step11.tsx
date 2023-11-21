'use client';
import styles from './Step.module.scss';
import Image from 'next/image';
import man_with_paper from '../../../assets/images/man_with_paper.png';
import StepHeader from '@/components/StepHeader/StepHeader';

function Step11() {
  return (
    <div
      style={{
        marginTop: '15px',
      }}
    >
      <StepHeader
        align='center'
        value='Let is define your risk profile for data leakage'
      />
      <Image
        src={man_with_paper}
        alt='man_with_paper'
        className={styles.image}
        priority={true}
      />
    </div>
    // </div>
  );
}

export default Step11;
