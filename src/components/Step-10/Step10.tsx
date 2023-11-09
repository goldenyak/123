'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import map from '../../assets/images/map.png';
import ProgressBar from '../ProgressBar/ProgressBar';

function Step10() {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <h1 className={styles.header}>
          VPN Lumos will help you explore internet without borders
        </h1>
        <div className={styles.image_wrapper}>
          <Image
            src={map}
            alt='world_map'
            className={styles.label_icon}
            width={320}
            height={200}
          />
        </div>
        <ProgressBar path='/quiz?q=11' />
      </div>
    </div>
  );
}

export default Step10;
