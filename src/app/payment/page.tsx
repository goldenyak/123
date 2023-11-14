'use client';

import styles from './Payment.module.scss';
import { useSearchParams } from 'next/navigation';
import { MultiStepBar } from '@/components/MultiStepBar/MultiStepBar';
import PaymentPage from '@/components/PaymentPage/PaymentPage';

export default function payment() {
  return (
    <div className={styles.main_wrapper}>
      <PaymentPage />
    </div>
  );
}
