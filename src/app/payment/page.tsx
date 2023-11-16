'use client';

import styles from './Payment.module.scss';
import dynamic from 'next/dynamic';

const PaymentPage = dynamic(
  () => import('@/components/PaymentPage/PaymentPage'),
  {
    ssr: false,
  },
);

export default function payment() {
  return (
    <div className={styles.main_wrapper}>
      <PaymentPage />
    </div>
  );
}
