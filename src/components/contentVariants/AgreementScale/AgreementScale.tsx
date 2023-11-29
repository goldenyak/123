'use client';
import styles from './AgreementScale.module.scss';
import AgreementScaleBar from './AgreementScaleBar/AgreementScaleBar';
import { IAgreementScale } from '../../StepContent/types';

interface AgreementScaleProps {
  value: IAgreementScale['value'];
  redirectTo: IAgreementScale['redirectTo'];
  header?: string;
}

function AgreementScale({ value, redirectTo }: AgreementScaleProps) {
  console.log('AgreementScale');
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          flexGrow: '1',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h2 className={styles.header_description}>{value}</h2>
      </div>

      <AgreementScaleBar redirectTo={redirectTo} />
    </div>
  );
}

export default AgreementScale;
