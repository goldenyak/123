'use client';
import { useRouter } from 'next/navigation';
import icon_whatsapp from '../../../assets/icons/icon_whatsapp.png';
import icon_facebook from '../../../assets/icons/icon_facebook.png';
import icon_telegram from '../../../assets/icons/icon_telegram.png';
import icon_viber from '../../../assets/icons/icon_viber.png';
import { Button } from '../../Button/Button';
import { ChangeEvent, useState } from 'react';
import StepHeader from '@/components/StepHeader/StepHeader';
import StepOptionCheckbox from '@/components/StepOptionCheckbox/StepOptionCheckbox';

function Step8() {
  const [isChecked, setIsChecked] = useState(0);
  const router = useRouter();

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      setIsChecked((prev) => prev + 1);
    } else {
      setIsChecked((prev) => prev - 1);
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    inputChangeHandler(e);

  return (
    <div>
      <StepHeader>Where do you see this restriction most often?</StepHeader>

      <StepOptionCheckbox
        value='WhatsApp'
        icon={icon_whatsapp}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Facebook messenger'
        icon={icon_facebook}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Telegram'
        icon={icon_telegram}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Viber'
        icon={icon_viber}
        onChange={changeHandler}
      />

      <Button
        type='button'
        title='Continue'
        onClick={() => router.push('/quiz?q=9')}
        disabled={isChecked ? false : true}
      />
    </div>
  );
}

export default Step8;
