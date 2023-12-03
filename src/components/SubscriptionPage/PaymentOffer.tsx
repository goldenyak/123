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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          color: '#1A1A1A',
          fontSize: '16px',
          fontWeight: '700',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        Personalized plan reserved
      </div>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '16px',
        }}
      >
        Your personalized plan has been saved for the next 3 minutes!
      </div>
      <div
        style={{
          color: '#1A1A1A',
          fontSize: '16px',
          fontWeight: '700',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        Time remaining
      </div>
      <div
        style={{
          color: '#1A1A1A',
          fontSize: '20px',
          fontWeight: '700',
          textTransform: 'uppercase',
        }}
      >
        {timeLeft}
      </div>
    </div>
  );
};

export default PaymentOffer;
