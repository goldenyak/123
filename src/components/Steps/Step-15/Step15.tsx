'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import StepHeader from '@/components/StepHeader/StepHeader';
import StepOptionNumber from '@/components/StepOptionNumber/StepOptionNumber';

function Step15() {
  const router = useRouter();
  const onChangeHandler = () => {
    setTimeout(() => router.push('/quiz?q=16'), 200);
  };

  return (
    <div className={styles.wrapper}>
      <div
        style={{
          padding: '0 15px',
        }}
      >
        <StepHeader>Does the statement below characterize you?</StepHeader>
      </div>

      <h2 className={styles.header_description}>
        «If I see links in the incoming email, I open them immediately»
      </h2>

      <StepOptionNumber onChange={onChangeHandler} />
    </div>
  );
}

export default Step15;
