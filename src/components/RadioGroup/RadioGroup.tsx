import { IRadioOption } from '../StepContent/types';
import RadioOption from '../RadioOption/RadioOption';
import getIcon from '../../assets/icons';

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
          key={props.value + index}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
