import Image, { StaticImageData } from 'next/image';

interface PaymentRowProps {
  icon: StaticImageData;
  value: string;
}

const PaymentRow = ({ icon, value }: PaymentRowProps) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#FFF',
          borderRadius: '50%',
        }}
      >
        <Image src={icon} alt='' />
      </div>
      <div>{value}</div>
    </div>
  );
};

export default PaymentRow;
