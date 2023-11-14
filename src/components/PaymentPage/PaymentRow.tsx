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
      }}
    >
      <div
        style={{
          width: '16px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image src={icon} alt='' />
      </div>
      <div>{value}</div>
    </div>
  );
};

export default PaymentRow;
