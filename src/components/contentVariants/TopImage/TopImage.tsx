'use client';
import styles from './TopImage.module.scss';
import Image from 'next/image';
import about_vpn from '@/assets/images/about_vpn.webp';
import { ITopImage } from '@/components/StepContent/types';

interface TopImageProps extends Omit<ITopImage, 'type'> {}

function TopImage({ header, paragraphs }: TopImageProps) {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.image_wrapper}>
          <Image
            src={about_vpn}
            alt='about_vpn'
            className={styles.image}
            width={375}
            height={315}
            priority={true}
          />
        </div>
        <div>
          <h1 className={styles.header}>{header}</h1>
          {paragraphs.map((paragraph, index) => (
            <h3 className={styles.description} key={index}>
              {paragraph}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopImage;
