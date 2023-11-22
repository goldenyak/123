'use client';
import { useRouter } from 'next/navigation';
import { Accordion } from './Accordion/Accordion';
import StepHeader from '@/components/StepHeader/StepHeader';
import { IRisk } from '@/components/StepContent/types';

type RiskProps = Omit<IRisk, 'type'>;

function Risk({ video, subtitle, statInfo, accordion }: RiskProps) {
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
            <span style={{ color: '#E9262F' }}>{subtitle.colored}</span>{' '}
            {subtitle.regular}
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            fontSize: '14px',
            lineHeight: '1.3',
          }}
        >
          <span style={{ fontWeight: '700' }}>{statInfo.bold}</span>{' '}
          {statInfo.regular}
        </div>

        <video
          id='vid'
          src={`../videos/${video}.mp4`}
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
          {accordion.caption}
        </div>
        <Accordion items={accordion.items} />
      </div>
    </div>
  );
}

export default Risk;
