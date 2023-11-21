'use client';
import styles from './Step.module.scss';
import Image from 'next/image';
import world_map from '../../../assets/images/world_map.png';
import icon_point_small from '../../../assets/icons/icon_point_small.svg';
import icon_point_medium from '../../../assets/icons/icon_point_medium.svg';
import icon_point_big from '../../../assets/icons/icon_point_big.svg';
import ProgressBar from '../../ProgressBar/ProgressBar';
import StepHeader from '@/components/StepHeader/StepHeader';

function Step10() {
  return (
    <div
      style={{
        marginTop: '15px',
      }}
    >
      <StepHeader align='center'>
        VPN Lumos will help you explore internet without borders
      </StepHeader>

      <div className={styles.image_wrapper}>
        <Image
          className={styles.image}
          src={world_map}
          alt='world_map'
          priority={true}
        />
        <Image
          className={styles.icon_point_small}
          src={icon_point_small}
          alt='world_map'
          priority={true}
        />
        <Image
          className={styles.icon_point_medium}
          src={icon_point_medium}
          alt='world_map'
          priority={true}
        />
        <Image
          className={styles.icon_point_big}
          src={icon_point_big}
          alt='world_map'
          priority={true}
        />
      </div>

      <ProgressBar path='/quiz?q=11' />
    </div>
  );
}

export default Step10;
