import { ICheckboxOption } from '../StepContent/types';
import CheckBoxOption from '../CheckBoxOption/CheckBoxOption';
import getIcon from '@/assets/icons';
import { ChangeEvent, useState } from 'react';

interface CheckBoxGroupProps {
  options: ICheckboxOption[];
}

const CheckBoxGroup = ({ options }: CheckBoxGroupProps) => {
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

  return (
    <div style={{ padding: '0 15px' }}>
      {options.map(({ value, icon }, index) => (
        <CheckBoxOption
          value={value}
          icon={getIcon(icon)}
          onChange={changeHandler}
          key={value + index}
        />
      ))}
    </div>
  );
};

export default CheckBoxGroup;
