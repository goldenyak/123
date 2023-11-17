'use client';
import { useRouter } from 'next/navigation';
import icon_rocket from '../../../assets/icons/icon_rocket.png';
import icon_locked from '../../../assets/icons/icon_locked.png';
import icon_world_map from '../../../assets/icons/icon_world_map.png';
import icon_ninja from '../../../assets/icons/icon_ninja.png';
import { Button } from '../../Button/Button';
import { ChangeEvent, useState } from 'react';
import StepHeader from '@/components/StepHeader/StepHeader';
import StepOptionCheckbox from '@/components/StepOptionCheckbox/StepOptionCheckbox';

function Step9() {
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
      <StepHeader>Choose additional benefits of VPN Lumos:</StepHeader>

      <StepOptionCheckbox
        value='Internet speed boost'
        icon={icon_rocket}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Secure Online browsing'
        icon={icon_locked}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Hide real location'
        icon={icon_world_map}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Hide browser history'
        icon={icon_ninja}
        onChange={changeHandler}
      />

      <Button
        title='Continue'
        onClick={() => router.push('/quiz?q=10')}
        disabled={!isChecked}
      />
    </div>
  );
}

export default Step9;
