'use client';
import { useRouter } from 'next/navigation';
import icon_yes from '../../../assets/icons/icon_yes.png';
import icon_no from '../../../assets/icons/icon_no.png';
import StepHeader from '@/components/StepHeader/StepHeader';
import RadioOption from '@/components/RadioOption/RadioOption';

function Step7() {
  const router = useRouter();
  return (
    <>
      <StepHeader>
        Do you need to use Messengers which are not available in your country?
      </StepHeader>

      <RadioOption
        redirectTo={() => router.push('/quiz?q=8')}
        icon={icon_yes}
        value='Yes'
      />

      <RadioOption
        redirectTo={() => router.push('/quiz?q=9')}
        icon={icon_no}
        value='No'
      />
    </>
  );
}

export default Step7;
