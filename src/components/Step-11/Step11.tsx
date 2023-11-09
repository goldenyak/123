'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import man_with_paper from '../../assets/images/man_with_paper.png';
import { Button } from '../Button/Button';

function Step11() {
  const router = useRouter();

  return (
    <div>
        <h1 className={styles.header}>
          Let is define your risk profile for data leakage
        </h1>
          <Image
            src={man_with_paper}
            alt='man_with_paper'
            className={styles.image}
            priority={true}
          />
        {/* </div> */}
        <Button
          title='Continue'
          onClick={() => router.push('/quiz?q=12')}
          disabled={false}
        />
      </div>
    // </div>
  );
}

export default Step11;
