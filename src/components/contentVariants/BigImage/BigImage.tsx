'use client';
import styles from './BigImage.module.scss';
import Image from 'next/image';
import { getImage } from '@/utils/utils';

interface BigImageProps {
  image: string;
}

function BigImage({ image }: BigImageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image
          src={getImage(image)}
          alt='man_with_paper'
          className={styles.image}
          priority={true}
        />
      </div>
    </div>
  );
}

export default BigImage;
