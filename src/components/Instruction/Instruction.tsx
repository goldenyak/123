import styles from './Instruction.module.scss';
import StepHeader from '../StepHeader/StepHeader';
import InstructionRow from './InstructionRow';
import instructions from '../../assets/images/instructions.png';
import clipboard from '../../assets/icons/icon_clipboard.svg';
import Image from 'next/image';
import { Button } from '../NextButton/NextButton';

interface InstructionProps {
  email: string;
  password: string;
}

const Instruction = ({ email, password }: InstructionProps) => {
  return (
    <>
      <StepHeader>
        To access your Premium account in VPN Lumos, follow these simple steps:
      </StepHeader>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <InstructionRow order={1} text='Download VPN Lumos app.' />
        <InstructionRow
          order={2}
          text="Launch the app and get to the paywall screen. You don't need to make a  second subscription."
        />
        <InstructionRow
          order={3}
          text={
            <>
              <div
                style={{
                  marginBottom: '5px',
                }}
              >
                In the upper right corner, select Sign In.
              </div>
              <Image
                src={instructions}
                alt=''
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
              />
            </>
          }
        />
        <InstructionRow
          order={4}
          text={
            <div>
              <div
                style={{
                  marginBottom: '14px',
                }}
              >
                Sign in using the details below:
              </div>
              <div
                style={{
                  color: '#1A1A1A',
                  fontSize: '16px',
                  fontWeight: '700',
                  marginBottom: '5px',
                }}
              >
                Email:
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                }}
              >
                {email}
                <Image
                  src={clipboard}
                  alt=''
                  className={styles.clipboard}
                  style={{
                    marginBottom: '8px',
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(email);
                  }}
                />
              </div>
              <div
                style={{
                  color: '#1A1A1A',
                  fontSize: '16px',
                  fontWeight: '700',
                  marginBottom: '5px',
                }}
              >
                Password:
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                }}
              >
                {password}
                <Image
                  src={clipboard}
                  alt=''
                  className={styles.clipboard}
                  onClick={() => {
                    navigator.clipboard.writeText(password);
                  }}
                />
              </div>
            </div>
          }
        />
        <InstructionRow
          order={5}
          text='Once this is done, you have full access to VPN Lumos, which you can use on up to 6 devices.'
        />
        <Button title='Download the app' onClick={() => {}} />
      </div>
    </>
  );
};

export default Instruction;
