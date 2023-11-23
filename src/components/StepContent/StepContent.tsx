import { IStepConfig } from './types';
import styles from './StepContent.module.scss';
import RadioGroup from '../contentVariants/RadioGroup/RadioGroup';
import CheckBoxGroup from '../contentVariants/CheckBoxGroup/CheckBoxGroup';
import { NextButton } from '../NextButton/NextButton';
import AgreementScale from '../contentVariants/AgreementScale/AgreementScale';
import FactImage from '../contentVariants/FactImage/FactImage';
import AnimatedMap from '../contentVariants/AnimatedMap/AnimatedMap';
import BigImage from '../contentVariants/BigImage/BigImage';
import Feedback from '../contentVariants/Feedback/Feedback';
import Risk from '../contentVariants/Risk/Risk';
import Analyzer from '../contentVariants/Analyzer/Analyzer';
import Step20 from '../Steps/Step-20/Step20';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import StepHeader from '../StepHeader/StepHeader';

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
      case 'big-image':
        return <BigImage image={config.content.image} />;
      case 'feedback':
        return (
          <Feedback
            firstFeedback={config.content.firstFeedback}
            secondFeedback={config.content.secondFeedback}
          />
        );
      case 'analyzer':
        return <Analyzer {...config.content} />;
      case 'animated-map':
        return <AnimatedMap />;
      case 'risk':
        return <Risk {...config.content} />;
      case 'facts-image':
        return <FactImage {...config.content} />;
      case 'step20':
        return <Step20 />;
      default:
        return null;
    }
  })();

  console.log(config);

  return (
    <>
      {config?.showProgressBar && <ProgressBar />}
      <div
        className={styles.step_content_wrapper}
        style={{ paddingTop: `${config?.showProgressBar ? '50px' : '0'}` }}
      >
        {config.header && <StepHeader {...config.header} />}
        {component}
        {config.nextButton && <NextButton {...config.nextButton} />}
      </div>
    </>
  );
};

export default StepContent;
