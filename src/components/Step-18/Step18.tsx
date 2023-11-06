'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import { useState } from 'react';

function Step18() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const inputChangeHandler = () => {
    setIsChecked(true);
  };

  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.multi_step_bar}></div>

        <header className={styles.header}>
          <h1 className={styles.header_title}>
            Your risk profile
          </h1>

        </header>

        <div className={styles.diagram_wrapper}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div >
              high
            </div>
            <div className={styles.diagram_dashed_line} />
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

            <div >
              medium
            </div>
            <div className={styles.diagram_dashed_line} />
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

            <div >
              low
            </div>
            <div className={styles.diagram_dashed_line} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Step18;
