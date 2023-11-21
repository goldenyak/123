import { IStepConfig } from './types';
import RadioGroup from '../RadioGroup/RadioGroup';
import CheckBoxGroup from '../CheckBoxGroup/CheckBoxGroup';
import StepHeader from '../StepHeader/StepHeader';
import { NextButton } from '../Button/NextButton';
import Step4 from '../Steps/Step-4/Step4';
import Step10 from '../Steps/Step-10/Step10';
import Step11 from '../Steps/Step-11/Step11';

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
      case 'step4':
        return <Step4 />;
      case 'step10':
        return <Step10 />;
      case 'step11':
        return <Step11 />;
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
