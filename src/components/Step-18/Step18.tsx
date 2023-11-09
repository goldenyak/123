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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}
      >
        <h1 className={styles.header_title}>Your risk profile</h1>

        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={icon_warning} alt='icon_warning' />
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

        <div
          style={{
            textAlign: 'center',
            fontSize: '14px',

            lineHeight: '1.3',
          }}
        >
          <span style={{ fontWeight: '700' }}>1,025,648 users like you</span>{' '}
          have been able to mitigate the risk of data leakage by applying the
          recommendations and using our VPN
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
      </div>

      <Button
        title={`Let's begin!`}
        onClick={() => router.push('/quiz?q=19')}
        disabled={false}
      />
    </div>
  );
}

export default Step18;
