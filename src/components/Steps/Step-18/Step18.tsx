'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
// import { DiagramHigh } from './DiagramHigh';
// import icon_warning from '../../../assets/icons/icon_warning.svg';
// import Image from 'next/image';
import { Accordion } from './Accordion/Accordion';
import { Button } from '../../Button/Button';

function Step18() {
  const router = useRouter();

  return (
    <div
      style={{
        marginTop: '35px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
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
          <div
            style={{
              fontSize: ' 22px',
              fontWeight: '800',
              textTransform: 'uppercase',
              color: '#000',
            }}
          >
            <span style={{ color: '#E9262F' }}>High risk</span> data leakage
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

        <video
          id='vid'
          src='../videos/chart_high.mp4'
          autoPlay
          loop
          muted
          playsInline
        ></video>

        

        <div
          style={{
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '1.2',
            textAlign: 'left',
            marginBottom: '-6px',
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