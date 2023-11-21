import Link from 'next/link';
import Image from 'next/image';
import icon_yellow_stars from '../../assets/icons/icon_yellow_stars.svg';
import icon_google_play from '../../assets/icons/icon_google_play.svg';
import icon_app_store from '../../assets/icons/icon_app_store.svg';

const PaymentApps = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 35px 1fr',
      }}
    >
      <Link
        href={''}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          alignItems: 'center',
          justifySelf: 'end',
        }}
      >
        <Image src={icon_google_play} alt='' />
        <div
          style={{
            color: '#757575',
            fontSize: '12px',
            fontWeight: '400',
          }}
        >
          Google play
        </div>
        <Image src={icon_yellow_stars} alt='' />
        <div
          style={{
            color: '#757575',
            fontSize: '12px',
          }}
        >
          <span style={{ fontWeight: '500', color: '#1A1A1A' }}>1M+</span>{' '}
          downloads
        </div>
      </Link>

      <div
        style={{
          width: '1px',
          height: '16px',
          backgroundColor: 'rgba(51, 51, 51, 0.11)',
          justifySelf: 'center',
          alignSelf: 'end',
        }}
      />

      <Link
        href={''}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          alignItems: 'center',
          justifySelf: 'start',
        }}
      >
        <Image src={icon_app_store} alt='' />
        <div
          style={{
            color: '#757575',
            fontSize: '12px',
            fontWeight: '400',
          }}
        >
          Apple Store
        </div>
        <Image src={icon_yellow_stars} alt='' />
        <div
          style={{
            color: '#757575',
            fontSize: '12px',
          }}
        >
          <span style={{ fontWeight: '500', color: '#1A1A1A' }}>44.3K</span>{' '}
          5-star ratings
        </div>
      </Link>
    </div>
  );
};

export default PaymentApps;