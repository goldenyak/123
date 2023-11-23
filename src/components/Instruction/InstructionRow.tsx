import { ReactNode } from 'react';

interface InstructionRowProps {
  order: number;
  text: ReactNode;
}

const InstructionRow = ({ order, text }: InstructionRowProps) => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'row' }}>
      <div
        style={{
          display: 'flex',
          width: '22px',
          height: '22px',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#5072F1',
          borderRadius: '50%',
          flexShrink: '0',
        }}
      >
        <div
          style={{
            color: '#FFF',
            fontSize: '10px',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          {order}
        </div>
      </div>
      <div>{text}</div>
    </div>
  );
};

export default InstructionRow;
