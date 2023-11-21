'use client';
import styles from './AgreementScaleComponent.module.scss';
import AgreementScale from './AgreementScale/AgreementScale';
import { IAgreementScale } from '../StepContent/types';

interface AgreementScaleComponentProps {
  value: IAgreementScale['value'];
  redirectTo: IAgreementScale['redirectTo'];
}

function AgreementScaleComponent({
  value,
  redirectTo,
}: AgreementScaleComponentProps) {
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          padding: '0 15px',
        }}
      ></div>
      <h2 className={styles.header_description}>{value}</h2>
      <AgreementScale redirectTo={redirectTo} />
    </div>
  );
}

export default AgreementScaleComponent;
