import { IRadioOption } from '../StepContent/types';
import RadioOption from '../RadioOption/RadioOption';
import { StaticImageData } from 'next/image';
import StepHeader from '../StepHeader/StepHeader';

interface RadioGroupProps {
  options: IRadioOption[];
  header?: string;
}

const getIcon = (iconName: string): StaticImageData =>
  require(`../../assets/icons/${iconName}.svg`);

const RadioGroup = ({ options, header }: RadioGroupProps) => {
  return (
    <div
      style={{
        padding: ' 0 15px',
      }}
    >
      {header && <StepHeader value={header} />}
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
