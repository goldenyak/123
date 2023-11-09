'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import world_map from '../../assets/images/world_map.png';
import ProgressBar from '../ProgressBar/ProgressBar';

function Step10() {
  return (
    <div>
        <h1 className={styles.header}>
          VPN Lumos will help you explore internet without borders
        </h1>
        <Image
          className={styles.image}
          src={world_map}
          alt='world_map'
          priority={true}
        />
      {/* <ProgressBar path='/quiz?q=11' /> */}
    </div>
  );
}

export default Step10;
