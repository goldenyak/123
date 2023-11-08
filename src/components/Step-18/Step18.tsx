'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import { DiagramHigh } from './DiagramHigh';
import icon_warning from '../../assets/icons/icon_warning.svg';
import Image from 'next/image';
import { Accordion } from './Accordion/Accordion';
import { Button } from '../Button/Button';

function Step18() {
  const router = useRouter();

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.header_title}>Your risk profile</h1>
      </header>

      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src={icon_warning} alt="icon_warning" />
        <div
          style={{
            fontSize: ' 14px',
            fontWeight: '500',
            textTransform: 'uppercase',
          }}
        >
          High risk data leakage
        </div>
      </div>

      <DiagramHigh />

      <div
        style={{
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '1.2',
          textAlign: 'left',
        }}
      >
        To reduce your risk, follow the safety guidelines below:
      </div>
      <Accordion />

      <Button
        title={`Let's begin!`}
        onClick={() => router.push('/quiz?q=19')}
        disabled={false}
      />
    </div>
  );
}

export default Step18;
