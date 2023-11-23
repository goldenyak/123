'use client';

import styles from './InstructionPage.module.scss';
import Instruction from '../../components/Instruction/Instruction';

export default function instruction() {
  return (
    <div className={styles.main_wrapper}>
      <Instruction email='kaskaksa@gmaol.com' password='askfa@rjk12!' />
    </div>
  );
}
