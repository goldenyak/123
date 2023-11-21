'use client';
import { useRouter } from 'next/navigation';
import icon_smile_glasses from '../../../assets/icons/icon_smile_glasses.png';
import icon_smile from '../../../assets/icons/icon_smile.png';
import icon_thinking from '../../../assets/icons/icon_thinking.png';
import icon_grimacing from '../../../assets/icons/icon_grimacing.png';
import StepHeader from '@/components/StepHeader/StepHeader';
import RadioOption from '@/components/RadioOption/RadioOption';

function Step14() {
  const router = useRouter();
  const clickHandler = () => router.push('/quiz?q=15');
  return (
    <div>
      <StepHeader>How quickly do you update your devices and apps?</StepHeader>

      <RadioOption
        redirectTo={clickHandler}
        icon={icon_smile_glasses}
        value='I have auto-update enabled'
      />

      <RadioOption
        redirectTo={clickHandler}
        icon={icon_smile}
        value='Installing every version of the update'
      />

      <RadioOption
        redirectTo={clickHandler}
        icon={icon_thinking}
        value='Installing updates through multiple versions'
      />

      <RadioOption
        redirectTo={clickHandler}
        icon={icon_grimacing}
        value='Almost never'
      />
    </div>
  );
}

export default Step14;
