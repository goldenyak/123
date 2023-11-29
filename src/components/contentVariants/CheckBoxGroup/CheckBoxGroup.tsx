import { ICheckboxOption } from '../../StepContent/types';
import CheckBoxOption from './CheckBoxOption/CheckBoxOption';
import { ChangeEvent, useState } from 'react';
import { getIcon } from '../../../utils/utils';

interface CheckBoxGroupProps {
  options: ICheckboxOption[];
}

const CheckBoxGroup = ({ options }: CheckBoxGroupProps) => {
  return (
    <div style={{ padding: '0 15px' }}>
      {options.map(({ value, icon }, index) => (
        <CheckBoxOption
          value={value}
          icon={getIcon(icon)}
          key={value + index}
        />
      ))}
    </div>
  );
};

export default CheckBoxGroup;
