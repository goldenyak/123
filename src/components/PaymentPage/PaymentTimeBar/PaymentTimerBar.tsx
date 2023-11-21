import styles from './PaymentTimeBar.module.scss';

interface PaymentTimerBarProps {
  timeLeft: string;
  show: boolean;
}

const PaymentTimerBar = ({ timeLeft, show }: PaymentTimerBarProps) => {
  return (
    <div
      className={`${show ? [styles.bar, styles.show].join(' ') : styles.bar}`}
    >
      <div className={styles.timer}>
        50% off offer expires in{' '}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              fontSize: '26px',
              letterSpacing: '2px',
            }}
          >
            {timeLeft}
          </div>
          <div
            style={{
              fontSize: '7px',
              fontWeight: '500',
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'row',
              marginRight: '2px',
            }}
          >
            <div style={{ marginRight: '10px' }}>Minutes</div>
            <div>Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTimerBar;
