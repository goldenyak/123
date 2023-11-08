import styles from './Step.module.scss';

export const DiagramHigh = () => {
  return (
    <div className={styles.diagram_wrapper}>
      <div className={styles.levels_wrapper}>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            transform: 'translateY(-50%)',
            zIndex: '100',
            position: 'relative',
          }}
        >
          <div className={styles.lvl_name}>High</div>
          <div className={styles.diagram_dashed_line} />
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div className={styles.lvl_name}>Medium</div>
          <div className={styles.diagram_dashed_line} />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            transform: 'translateY(50%)',
          }}
        >
          <div className={styles.lvl_name}>Low</div>
          <div
            style={{
              opacity: 0.5,
              flexBasis: '100%',
              borderTop: '1px solid #5072F1',
              height: '1px',
            }}
          />
        </div>
      </div>

      <div
        style={{
          background: 'rgba(217, 88, 76, 0.10)',
          height: '100%',
          width: '85%',
          position: 'absolute',
          top: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-end',
          zIndex: '0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '0',
            height: '110%',
            width: '1px',
            opacity: 0.5,
            borderLeft: '1px solid #5072F1',
          }}
        />

        <div
          style={{
            width: '50px',
            height: '38px',
            borderRadius: '8px 8px 0px 0px',
            background: '#29CC7A',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div className={styles.risk_caption}>Goal level</div>
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            width: '50px',
            height: '100%',
            borderRadius: '8px 8px 0px 0px',
            background:
              'linear-gradient(180deg, #CC3629 0%, #CCCC29 49.84%, #29CC7A 100%)',
          }}
        >
          <div className={styles.risk_caption}>Current level</div>
        </div>
      </div>
    </div>
  );
};
