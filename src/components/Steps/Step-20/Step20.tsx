'use client';
import styles from './Step.module.scss';
import Image from 'next/image';
import icon_security from '../../../assets/icons/icon_security.svg';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import StepHeader from '@/components/StepHeader/StepHeader';

function Step20() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    setError('');

    if (isValidEmail(email)) {
      console.log('The email is valid');
    } else {
      setError('Email is invalid');
    }
  };

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
        <StepHeader>
          Your Personal Plan for a free and secure internet is ready!
        </StepHeader>
        <h2 className={styles.header_description}>
          Enter your email to gets started
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Enter your email'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleChange}
            className={!error ? styles.input : styles.input_error}
          />
          {error && (
            <h2
              style={{
                color: 'red',
                marginTop: '10px',
                fontSize: '12px',
                textAlign: 'left',
              }}
            >
              {error}
            </h2>
          )}
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
      <Button type='submit' title={`Register`} onClick={handleSubmit} />
    </div>
  );
}

export default Step20;