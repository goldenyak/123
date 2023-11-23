import StepHeader from '../StepHeader/StepHeader';
import PaymentRow from './PaymentRow';
import icon_payment_user from '../../assets/icons/icon_payment_user.svg';
import icon_payment_youtube from '../../assets/icons/icon_payment_youtube.svg';
import icon_payment_facebook from '../../assets/icons/icon_payment_facebook.svg';
import icon_payment_whatsapp from '../../assets/icons/icon_payment_whatsapp.svg';
import payment_userpic1 from '../../assets/images/payment_userpic1.png';
import payment_userpic2 from '../../assets/images/payment_userpic2.png';
import payment_userpic3 from '../../assets/images/payment_userpic3.png';
import icon_payment_speed from '../../assets/icons/icon_payment_speed.svg';
import PaymentOption from './PaymentOption/PaymentOption';
import { useEffect, useRef, useState } from 'react';
import ButtonPayment from './ButtonPayment/ButtonPayment';
import PaymentComment from './PaymentComment/PaymentComment';
import PaymentApps from './PaymentApps';
import PaymentTimerBar from './PaymentTimerBar/PaymentTimerBar';
import PaymentOffer from './PaymentOffer';

type Plan = '1month' | '3month' | '6month';

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('3month');
  const [showBar, setShowBar] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTimer = localStorage.getItem('timer');
    return storedTimer ? Number.parseInt(storedTimer, 10) : 60 * 10;
  });

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
    const handleScroll = () => {
      setShowBar(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`.padStart(5, '0');
  };

  const handlePlanChange = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <PaymentTimerBar timeLeft={formatTime()} show={showBar && timeLeft > 0} />
      <StepHeader value={'You Personal Plan for a free and secure internet'} type={'center'}/>
      <PaymentOffer timeLeft={formatTime()} />
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
          marginBottom: '14px',
        }}
      >
        Choose your plan
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
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

      <ButtonPayment>Get started</ButtonPayment>
      <div
        style={{
          color: '#BAC0C7',
          fontSize: '12px',
          fontWeight: '400',
          marginBottom: '32px',
        }}
      >
        To avoid any disruption, you agree that the subscription you selected
        will be automatically charged on a monthly basis until you cancel. You
        can cancel your subscription anytime. To learn more visit out terms of
        use.
      </div>

      <div
        style={{
          color: '#1A1A1A',
          fontSize: '26px',
          fontWeight: '700',
          marginBottom: '14px',
        }}
      >
        Customer Reviews
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        <PaymentComment
          userPic={payment_userpic1}
          name='Jmmalveda'
          comment='Great service at a great price. Very happy with this very neat tool that helps keep me secured and protected. Love it!'
          date='May 11, 2023'
        />
        <PaymentComment
          userPic={payment_userpic2}
          name='LouaFrançois'
          comment='Connects quick and disconnects quickly as well. Would not recommend another VPN, after having tried many.'
          date='June 11, 2023'
        />
        <PaymentComment
          userPic={payment_userpic3}
          name='Maaaaaaateeeeeuuuuuus'
          comment='This is the best VPN I have ever used. It works at school or other places when there are blockers on the wifi or data. Also you can put yourself anywhere in the world or use the fastest location.'
          date='Aug 18, 2022'
        />
      </div>
      <PaymentApps />
      <div
        style={{
          color: '#1A1A1A',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '1.3',
          margin: '24px 0 32px 0',
        }}
      >
        You will need an iPhone or Android smartphone to use VPN Lumos.
      </div>
      <ButtonPayment>Continue purchase</ButtonPayment>
      <div
        style={{
          color: '#454446',
          fontWeight: '600',
          marginBottom: '4px',
          marginTop: '16px',
        }}
      >
        Continue purchase
      </div>
      <div style={{ lineHeight: '1.2', marginBottom: '12px' }}>
        All information is encrypted and transmitted without risk using a Secure
        Sockets Layer protocol.
      </div>
      <div style={{ color: '#454446', fontWeight: '600', marginBottom: '4px' }}>
        Your information is safe
      </div>
      <div style={{ lineHeight: '1.2', marginBottom: '12px' }}>
        We won’t sell your personal contant information for any marketing
        purpose.
      </div>
      <div style={{ color: '#454446', fontWeight: '600', marginBottom: '4px' }}>
        Need help?
      </div>
      <div style={{ lineHeight: '1.2', marginBottom: '50px' }}>
        Send us an email: support@lumos.mobi
      </div>
    </div>
  );
};

export default SubscriptionPage;
