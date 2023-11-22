import { IRadioOption } from '../../StepContent/types';
import RadioOption from './RadioOption/RadioOption';
import { getIcon } from '@/utils/utils';

interface RadioGroupProps {
  options: IRadioOption[];
}

const RadioGroup = ({ options }: RadioGroupProps) => {
  return (
    <div
      style={{
        padding: ' 0 15px',
      }}
    >
      {options.map((props, index) => (
        <RadioOption
          {...props}
          icon={getIcon(props.icon)}
          key={props.value + props.redirectTo}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
