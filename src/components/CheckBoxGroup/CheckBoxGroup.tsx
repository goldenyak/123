import { ICheckboxOption } from '../StepContent/types';
import CheckBoxOption from '../CheckBoxOption/CheckBoxOption';
import { ChangeEvent, useState } from 'react';
import { StaticImageData } from 'next/image';
import StepHeader from '../StepHeader/StepHeader';

interface CheckBoxGroupProps {
  options: ICheckboxOption[];
  header?: string;
}

const getIcon = (iconName: string): StaticImageData =>
  require(`../../assets/icons/${iconName}.svg`);

const CheckBoxGroup = ({ options, header }: CheckBoxGroupProps) => {
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
      {header && <StepHeader value={header} />}
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
