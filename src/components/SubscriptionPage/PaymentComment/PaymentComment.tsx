import { StaticImageData } from 'next/image';
import Image from 'next/image';
import icon_yellow_stars from '../../../assets/icons/icon_yellow_stars.svg';

interface PaymentCommentProps {
  name: string;
  comment: string;
  date: string;
  userPic: StaticImageData;
}

const PaymentComment = ({
  name,
  comment,
  date,
  userPic,
}: PaymentCommentProps) => {
  return (
    <div
      style={{
        borderRadius: '16px',
        background: '#F4F6FC',
        padding: '12px 16px',
      }}
    >
      <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
        <Image
          src={userPic}
          alt=''
          style={{
            width: '40px',
            height: '40px',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Image src={icon_yellow_stars} alt='' width={75} />
          <div
            style={{
              color: '#454446',
              fontSize: '16px',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}
          >
            {name}
          </div>
        </div>
      </div>
      <div
        style={{
          color: '#454446',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '1.3',
          marginBottom: '16px',
        }}
      >
        {comment}
      </div>
      <div
        style={{
          color: '#79797D',
          fontSize: '12px',
          fontWeight: '500',
        }}
      >
        {date}
      </div>
    </div>
  );
};

export default PaymentComment;
