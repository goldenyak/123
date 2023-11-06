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

          <div className={styles.levels_wrapper} >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', transform: 'translateY(-50%)' }}>
              <div className={styles.lvl_name}>
                High
              </div>
              <div className={styles.diagram_dashed_line} />
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

              <div className={styles.lvl_name}>
                Medium
              </div>
              <div className={styles.diagram_dashed_line} />
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', transform: 'translateY(50%)' }}>

              <div className={styles.lvl_name}>
                Low
              </div>
              <div style={{
                opacity: 0.5,
                flexBasis: '100%',
                borderTop: '1px solid #5072F1',
                height: '1px'
              }} />
            </div>
          </div>

          <div style={{
            background: 'rgba(217, 88, 76, 0.10)', height: '100%',
            width: '70%', position: 'absolute', top: '0', right: '0',
            display: 'flex'
          }}>

            <div style={{
              width: '50px',
              height: '38px',
              borderRadius: '8px 8px 0px 0px',
              background: '#29CC7A'
            }}>
            </div>

            <div style={{
              width: '50px',
              height: '38px',
              borderRadius: '8px 8px 0px 0px',
              background: 'red'
            }}>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Step18;
