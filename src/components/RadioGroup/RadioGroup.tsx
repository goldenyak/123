import { IRadioOption } from '../StepContent/types';
import RadioOption from '../RadioOption/RadioOption';
import getIcon from '../../assets/icons';

interface RadioGroupProps {
  options: IRadioOption[];
}

const RadioGroup = ({ options }: RadioGroupProps) => {
  return (
    <>
      {options.map((props) => (
        <RadioOption {...props} icon={getIcon(props.icon)} key={props.value} />
      ))}
    </>
  );
};

export default RadioGroup;
