'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import man_with_paper from '../../../assets/images/man_with_paper.png';
import { Button } from '../../Button/Button';
import StepHeader from '@/components/StepHeader/StepHeader';

function Step11() {
  const router = useRouter();

  return (
    <div
      style={{
        marginTop: '15px',
      }}
    >
      <StepHeader align='center'>
        Let is define your risk profile for data leakage
      </StepHeader>
      <Image
        src={man_with_paper}
        alt='man_with_paper'
        className={styles.image}
        priority={true}
      />
      {/* </div> */}
      <Button title='Continue' onClick={() => router.push('/quiz?q=12')} />
    </div>
    // </div>
  );
}

export default Step11;