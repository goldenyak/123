'use client';
import { IFactsImage } from '@/components/StepContent/types';
import styles from './Step.module.scss';
import FactImageItem from './FactImageItem';

type FactImageProps = Omit<IFactsImage, 'type'>;

function FactImage({ caption, items }: FactImageProps) {
  return (
    <div
      style={{
        padding: '0 15px',
      }}
    >
      <p className={styles.header_description}>{caption}</p>
      {items.map((item) => (
        <FactImageItem {...item} key={item.text} />
      ))}
    </div>
  );
}

export default FactImage;
