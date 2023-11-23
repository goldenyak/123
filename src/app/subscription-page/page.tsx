'use client';
import styles from './SubscriptionPage.module.scss';
import dynamic from 'next/dynamic';

const SubscriptionPage = dynamic(
  () => import('../../components/SubscriptionPage/SubscriptionPage'),
  {
    ssr: false,
  },
);

export default function payment() {
  return (
    <div className={styles.main_wrapper}>
      <SubscriptionPage />
    </div>
  );
}
