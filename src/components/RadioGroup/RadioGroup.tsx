import { IRadioOption } from '../StepContent/types';
import RadioOption from '../RadioOption/RadioOption';
import icons from '../../assets/icons';

interface RadioGroupProps {
  options: IRadioOption[];
}

const RadioGroup = ({ options }: RadioGroupProps) => {
  return (
    <>
      {options.map((props, index) => (
        <RadioOption {...props} icon={icons[props.icon]} key={index} />
      ))}
    </>
  );
};

export default RadioGroup;
