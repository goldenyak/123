'use client';
import { useRouter } from 'next/navigation';
import icon_almost_never from '../../../assets/icons/icon_almost_never.png';
import icon_rarely from '../../../assets/icons/icon_rarely.png';
import icon_every_week from '../../../assets/icons/icon_every_week.png';
import icon_often from '../../../assets/icons/icon_often.png';
import icon_several_times from '../../../assets/icons/icon_several_times.png';
import StepHeader from '@/components/StepHeader/StepHeader';
import RadioOption from '@/components/RadioOption/RadioOption';

function Step12() {
  const router = useRouter();

  const clickHandler = () => router.push('/quiz?q=13');

  return (
    <>
      <StepHeader>How often do you use Public Wi-Fi?</StepHeader>

      <RadioOption
        redirectTo={clickHandler}
        icon={icon_almost_never}
        value='Almost never'
      />

      <RadioOption
        redirectTo={clickHandler}
        icon={icon_rarely}
        value='Rarely'
      />

      <RadioOption
        redirectTo={clickHandler}
        icon={icon_every_week}
        value='Every week'
      />

      <RadioOption redirectTo={clickHandler} icon={icon_often} value='Often' />

      <RadioOption
        redirectTo={clickHandler}
        icon={icon_several_times}
        value='Several times a day'
      />
    </>
  );
}

export default Step12;
