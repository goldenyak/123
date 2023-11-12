'use client';
import { useRouter } from 'next/navigation';
import icon_was_not_working from '../../../assets/icons/icon_was_not_working.png';
import icon_expensive from '../../../assets/icons/icon_expensive.png';
import icon_low_connection from '../../../assets/icons/icon_low_connection.png';
import icon_was_not_safe from '../../../assets/icons/icon_was_not_safe.png';
import icon_other from '../../../assets/icons/icon_other.png';
import { ChangeEvent, useState } from 'react';
import { Button } from '../../Button/Button';
import StepHeader from '@/components/StepHeader/StepHeader';
import StepOptionCheckbox from '@/components/StepOptionCheckbox/StepOptionCheckbox';

function Step3() {
  const [isChecked, setIsChecked] = useState(0);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      setIsChecked((prev) => prev + 1);
    } else {
      setIsChecked((prev) => prev - 1);
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    inputChangeHandler(e);

  const router = useRouter();
  return (
    <div>
      <StepHeader>
        What did not you like about other VPN services before?
      </StepHeader>

      <StepOptionCheckbox
        value='Was not working'
        icon={icon_was_not_working}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Too expensive'
        icon={icon_expensive}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Low connection speed'
        icon={icon_low_connection}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Wasn’t safe'
        icon={icon_was_not_safe}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Other'
        icon={icon_other}
        onChange={changeHandler}
      />

      <Button
        title='Continue'
        onClick={() => router.push('/quiz?q=4')}
        disabled={isChecked > 0 ? false : true}
      />
    </div>
  );
}

export default Step3;
