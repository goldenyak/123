interface PaymentOfferProps {
    timeLeft: string;
  }
  
  const PaymentOffer = ({ timeLeft }: PaymentOfferProps) => {
    return (
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
          Time remaining {timeLeft}
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
    );
  };
  
  export default PaymentOffer;