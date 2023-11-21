'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import StepHeader from '@/components/StepHeader/StepHeader';
import AgreementScale from '@/components/AgreementScaleComponent/AgreementScale/AgreementScale';

function Step16() {
  const router = useRouter();
  const onChangeHandler = () => {
    setTimeout(() => router.push('/quiz?q=17'), 200);
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
        «Before entering personal information into a website, I look at the top
        of my browser to check if there is lock symbol»
      </h2>

      <AgreementScale onChange={onChangeHandler} />
    </div>
  );
}

export default Step16;
