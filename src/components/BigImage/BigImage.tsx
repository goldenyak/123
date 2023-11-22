'use client';
import styles from './BigImage.module.scss';
import Image, { StaticImageData } from 'next/image';
import man_with_paper from '../../../assets/images/man_with_paper.png';
import StepHeader from '@/components/StepHeader/StepHeader';

interface BigImageProps {
  image: StaticImageData;
  header?: string;
}

function BigImage({ image, header }: BigImageProps) {
  return (
    <div className={styles.container}>
      <StepHeader align='center' value={header} />
      <div className={styles.image_container}>
        <Image
          src={image}
          alt='man_with_paper'
          className={styles.image}
          priority={true}
        />
      </div>
    </div>
  );
}

export default BigImage;
