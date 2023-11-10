'use client';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_security from '../../assets/icons/icon_security.svg';
import Link from 'next/link';
import { Button } from '../Button/Button';

function Step20() {
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <h1 className={styles.header_title}>
          Your Personal Plan for a free and secure internet is ready!
        </h1>
        <h2 className={styles.header_description}>
          Enter your email to gets started
        </h2>
        <form>
          <input
            placeholder='Enter your email'
            type='email'
            style={{
              borderRadius: '10px',
              border: '1px solid #D8D8D8',
              background: '#F8F8F8',
              padding: '16px',
              fontSize: '17px',
              width: '100%',
              opacity: '0.5',
            }}
          />
        </form>

        <div style={{ display: 'flex', gap: '6px' }}>
          <Image src={icon_security} alt='' />
          <div
            style={{
              color: '#1A1A1A',
              fontSize: '13px',
              fontWeight: '500',
              opacity: '0.5',
            }}
          >{`Your information is 100% secure. We don’t share your personal information.`}</div>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '13px',
          lineHeight: '1.4',
        }}
      >
        By submitting your email address, you acknowledge that you have read and
        agreed to our{' '}
        <Link href={''} style={{ color: '#5072F1', fontWeight: '700' }}>
          Terms of Use
        </Link>{' '}
        and{' '}
        <Link href={''} style={{ color: '#5072F1', fontWeight: '700' }}>
          Privacy Policy
        </Link>
      </div>
      <Button title={`Register`} onClick={() => {}} disabled={false} />
    </div>
  );
}

export default Step20;
