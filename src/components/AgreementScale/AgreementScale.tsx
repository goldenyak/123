'use client';
import styles from './AgreementScale.module.scss';
import AgreementScaleBar from './AgreementScaleBar/AgreementScaleBar';
import { IAgreementScale } from '../StepContent/types';

interface AgreementScaleProps {
  value: IAgreementScale['value'];
  redirectTo: IAgreementScale['redirectTo'];
}

function AgreementScale({ value, redirectTo }: AgreementScaleProps) {
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          padding: '0 15px',
        }}
      ></div>
      <h2 className={styles.header_description}>{value}</h2>
      <AgreementScaleBar redirectTo={redirectTo} />
    </div>
  );
}

export default AgreementScale;
