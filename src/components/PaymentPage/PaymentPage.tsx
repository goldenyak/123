import StepHeader from '../StepHeader/StepHeader';
import PaymentRow from './PaymentRow';
import icon_payment_user from '../../assets/icons/icon_payment_user.svg';
import icon_payment_youtube from '../../assets/icons/icon_payment_youtube.svg';
import icon_payment_facebook from '../../assets/icons/icon_payment_facebook.svg';
import icon_payment_whatsapp from '../../assets/icons/icon_payment_whatsapp.svg';
import icon_payment_speed from '../../assets/icons/icon_payment_speed.svg';
import PaymentOption from './PaymentOption/PaymentOption';
import { useEffect, useRef, useState } from 'react';

type Plan = '1month' | '3month' | '6month';

const PaymentPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('3month');
  // const [timeLeft, setTimeLeft] = useState(() => {
  //   const storedTimer = localStorage.getItem('timer');
  //   return storedTimer ? Number.parseInt(storedTimer, 10) : 60 * 10;
  // });

  const [timeLeft, setTimeLeft] = useState(10);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    if (timeLeft < 1) {
      clearInterval(timerRef.current);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('timer', timeLeft.toString());
    if (timeLeft < 1) {
      clearInterval(timerRef.current);
    }
  }, [timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handlePlanChange = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <StepHeader align='center'>
        You Personal Plan for a free and secure internet
      </StepHeader>

      <div
        style={{
          borderRadius: '16px',
          border: '2px solid #FECD09',
          background: '#FFFDF3',
          padding: '15px',
          marginTop: '-16px',
        }}
      >
        <div
          style={{
            color: '#1A1A1A',
            fontSize: '14px',
            lineHeight: '1.3',
            marginBottom: '10px',
          }}
        >
          Reserved price for your personal plan expires in 10 minutes.
        </div>
        <div
          style={{
            fontSize: '14px',
            fontWeight: '700',
            marginBottom: '13px',
          }}
        >
          Time remaining {formatTime()}
        </div>
        <div
          style={{
            color: '#A3A29C',
            fontSize: '12px',
          }}
        >
          Scroll down to get started!
        </div>
      </div>

      <div
        style={{
          fontSize: '17px',
          fontWeight: '700',
          lineHeight: '1.3',
          margin: '16px 0 12px 0',
        }}
      >
        Based on your answers, personal needs, and risk level, your plan
        includes:
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: '32px',
        }}
      >
        <PaymentRow value={'Enhanced security'} icon={icon_payment_user} />
        <PaymentRow
          value={'VPN for access Streaming services'}
          icon={icon_payment_youtube}
        />
        <PaymentRow
          value={'VPN for access Social media'}
          icon={icon_payment_facebook}
        />
        <PaymentRow
          value={'VPN for access Messengers'}
          icon={icon_payment_whatsapp}
        />
        <PaymentRow value={'Speed boosting'} icon={icon_payment_speed} />
      </div>

      <div
        style={{
          color: '#1A1A1A',
          fontSize: '26px',
          fontWeight: '700',
        }}
      >
        Choose your plan
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <PaymentOption
          title='1-month plan'
          weeklyPrice={{ before: '$14.00', after: '$6.99' }}
          monthlyPrice={{ before: '$59.99', after: '$29.99' }}
          checked={selectedPlan === '1month'}
          onChanged={() => handlePlanChange('1month')}
        />
        <PaymentOption
          title='3-month plan'
          weeklyPrice={{ before: '$6.12', after: '$2.99' }}
          monthlyPrice={{ before: '79.99', after: '$39.99' }}
          mostPopular
          checked={selectedPlan === '3month'}
          onChanged={() => handlePlanChange('3month')}
        />
        <PaymentOption
          title='6-month plan'
          weeklyPrice={{ before: '$3.89', after: '$1.99' }}
          monthlyPrice={{ before: '$99.99', after: '$49.99' }}
          checked={selectedPlan === '6month'}
          onChanged={() => handlePlanChange('6month')}
        />
      </div>
    </div>
  );
};

export default PaymentPage;
