'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
// import { DiagramHigh } from './DiagramHigh';
// import icon_warning from '../../../assets/icons/icon_warning.svg';
// import Image from 'next/image';
import { Accordion } from './Accordion/Accordion';
import { NextButton } from '@/components/NextButton/NextButton';
import StepHeader from '@/components/StepHeader/StepHeader';

function Step18() {
  const router = useRouter();

  return (
    <div
      style={{
        padding: '0 15px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <StepHeader type='center' value={'Your risk profile'} />

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

      <NextButton value={`Let's begin!`} redirectTo={'19'} />
    </div>
  );
}

export default Step18;
