'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import { DiagramHigh } from './DiagramHigh';
import icon_warning from '../../assets/icons/icon_warning.svg'
import Image from 'next/image';
import { Accordion } from './Accordion/Accordion';

function Step18() {
  const router = useRouter();

  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.multi_step_bar}></div>

        <header className={styles.header}>
          <h1 className={styles.header_title}>
            Your risk profile
          </h1>
        </header>

        <div style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image src={icon_warning} alt='' />
          <div style={{
            fontSize: ' 14px',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            High risk data leakage
          </div>
        </div>


        <DiagramHigh />

        <div style={{
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '1.2',
          textAlign: 'left'
        }}>
          To reduce your risk, follow the safety guidelines below:
        </div>
        <Accordion />

        <div className={styles.button_wrapper}>
          <button onClick={() => router.push('/step-19')}>{`Let's begin!`}</button>
        </div>

      </div>
    </div>
  );
}

export default Step18;
