'use client';
import styles from './AgreementScale.module.scss';
import AgreementScaleBar from './AgreementScaleBar/AgreementScaleBar';
import { IAgreementScale } from '../../StepContent/types';

interface AgreementScaleProps {
  value: IAgreementScale['value'];
  redirectTo: IAgreementScale['redirectTo'];
  header?: string;
  scores: IAgreementScale['scores'];
}

function AgreementScale({ value, redirectTo, scores }: AgreementScaleProps) {
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

      <AgreementScaleBar redirectTo={redirectTo} scores={scores} />
    </div>
  );
}

export default AgreementScale;
