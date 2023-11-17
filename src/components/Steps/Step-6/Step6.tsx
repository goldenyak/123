'use client';
import { useRouter } from 'next/navigation';
import icon_adult_sites from '../../../assets/icons/icon_adult_sites.png';
import icon_film_projector from '../../../assets/icons/icon_film_projector.png';
import icon_social_networks from '../../../assets/icons/icon_social_networks.png';
import icon_sport_sites from '../../../assets/icons/icon_sport_sites.png';
import icon_other from '../../../assets/icons/icon_other.png';
import { ChangeEvent, useState } from 'react';
import { Button } from '../../Button/Button';
import StepHeader from '@/components/StepHeader/StepHeader';
import StepOptionCheckbox from '@/components/StepOptionCheckbox/StepOptionCheckbox';

function Step6() {
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
      <StepHeader>Where do you see this restriction most often?</StepHeader>

      <StepOptionCheckbox
        value='Netflix or other streaming'
        icon={icon_film_projector}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Adult sites'
        icon={icon_adult_sites}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Social Networks'
        icon={icon_social_networks}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Sport sites'
        icon={icon_sport_sites}
        onChange={changeHandler}
      />

      <StepOptionCheckbox
        value='Other'
        icon={icon_other}
        onChange={changeHandler}
      />

      <Button
        title='Continue'
        onClick={() => router.push('/quiz?q=7')}
        disabled={!isChecked}
      />
    </div>
  );
}

export default Step6;
