import { IStepConfig } from './types';
import RadioGroup from '../RadioGroup/RadioGroup';
import CheckBoxGroup from '../CheckBoxGroup/CheckBoxGroup';
import StepHeader from '../StepHeader/StepHeader';
import { NextButton } from '../Button/NextButton';

interface StepContentProps {
  config: IStepConfig;
}

const StepContent = ({ config }: StepContentProps) => {
  const component = (() => {
    switch (config.content.type) {
      case 'radioGroup':
        return <RadioGroup options={config.content.options} />;
      case 'checkboxGroup':
        return <CheckBoxGroup options={config.content.options} />;
      default:
        return null;
    }
  })();

  return (
    <>
      {config.header && <StepHeader value={config.header} />}
      {component}
      {config.nextButton && <NextButton {...config.nextButton} />}
    </>
  );
};

export default StepContent;
