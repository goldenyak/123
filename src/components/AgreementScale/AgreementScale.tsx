'use client';
import styles from './AgreementScale.module.scss';
import AgreementScaleBar from './AgreementScaleBar/AgreementScaleBar';
import { IAgreementScale } from '../StepContent/types';
import StepHeader from '../StepHeader/StepHeader';

interface AgreementScaleProps {
  value: IAgreementScale['value'];
  redirectTo: IAgreementScale['redirectTo'];
  header?: string;
}

function AgreementScale({ value, redirectTo, header }: AgreementScaleProps) {
  return (
    <div className={styles.wrapper}>
      {header && <StepHeader value={header} />}
      <h2 className={styles.header_description}>{value}</h2>
      <AgreementScaleBar redirectTo={redirectTo} />
    </div>
  );
}

export default AgreementScale;
