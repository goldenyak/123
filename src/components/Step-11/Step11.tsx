'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import man_with_paper from '../../assets/images/man_with_paper.png';

function Step11() {
  const router = useRouter();

  return (
    <div>
      <div className={styles.main_wrapper}>
        <h1 className={styles.header}>
          Let is define your risk profile for data leakage
        </h1>
        <div className={styles.image_wrapper}>
          <Image
            src={man_with_paper}
            alt="man_with_paper"
            className={styles.image}
            width={375}
            height={315}
            priority={true}
          />
        </div>
        <div className={styles.button_wrapper}>
          <button onClick={() => router.push('/quiz?q=12')}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Step11;
