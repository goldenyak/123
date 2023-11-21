import { IStepConfig } from './types';
import styles from './StepContent.module.scss';
import RadioGroup from '../RadioGroup/RadioGroup';
import CheckBoxGroup from '../CheckBoxGroup/CheckBoxGroup';
import StepHeader from '../StepHeader/StepHeader';
import { NextButton } from '../NextButton/NextButton';
import AgreementScale from '../AgreementScale/AgreementScale';
import Step4 from '../Steps/Step-4/Step4';
import Step10 from '../Steps/Step-10/Step10';
import Step11 from '../Steps/Step-11/Step11';
import Step17 from '../Steps/Step-17/Step17';
import Step18 from '../Steps/Step-18/Step18';
import Step19 from '../Steps/Step-19/Step19';
import Step20 from '../Steps/Step-20/Step20';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { StaticImageData } from 'next/image';

interface StepContentProps {
  config: IStepConfig;
}

const StepContent = ({ config }: StepContentProps) => {
  const component = (() => {
    switch (config.content.type) {
      case 'radio-group':
        return <RadioGroup options={config.content.options} />;
      case 'checkbox-group':
        return <CheckBoxGroup options={config.content.options} />;
      case 'agreement-scale':
        return <AgreementScale {...config.content} />;
      case 'step4':
        return <Step4 />;
      case 'step10':
        return <Step10 />;
      case 'step11':
        return <Step11 />;
      case 'step17':
        return <Step17 />;
      case 'step18':
        return <Step18 />;
      case 'step19':
        return <Step19 />;
      case 'step20':
        return <Step20 />;
      default:
        return null;
    }
  })();

  return (
    <>
      {config?.showMultiStepBar && <ProgressBar />}
      <div
        className={styles.step_content_wrapper}
        style={{ paddingTop: `${config?.showMultiStepBar ? '50px' : '0'}` }}
      >
        {config.header && <StepHeader value={config.header} />}
        {component}
        {config.nextButton && <NextButton {...config.nextButton} />}
      </div>
    </>
  );
};

export default StepContent;
