'use client';

import { useRouter } from 'next/navigation';
import StepHeader from '../StepHeader/StepHeader';
import StepOption from '../StepOption/StepOption';
import StepOptionCheckbox from '../StepOptionCheckbox/StepOptionCheckbox';
import icon_yes from '../../assets/icons/icon_yes.png';
import icon_no from '../../assets/icons/icon_no.png';
import { MultiStepBar } from '../MultiStepBar/MultiStepBar';
import { Button } from '../Button/Button';

export const NewStepComponent = (stepConfig: any) => {
  const router = useRouter();
  console.log(stepConfig);

  const { content, showMultistepBar, nextStep, header } = stepConfig;

  const stepContent = content.map((item: any) => {
    if (item.type === 'header') {
      return <StepHeader key={item.title}>{item.title}</StepHeader>;
    }
    if (item.type === 'description') {
      return <h5 key={item.title}>{item.title}</h5>;
    }
    if (item.type === 'input-radio-element') {
      return (
        <StepOption
          key={item.title}
          value={item.title}
          icon={icon_yes}
          onClick={() => router.push(`/quiz?q=${item['redirect-to']}`)}
        />
      );
    }
    if (item.type === 'input-checkbox-element') {
      return (
        <StepOptionCheckbox
          key={item.title}
          value={item.title}
          icon={icon_no}
          onChange={() => {}}
        />
      );
    }
    if (item.type === 'input-info-element') {
      return <p key={item.title}>{item.title}</p>;
    }
  });

  return (
    <div style={{ width: '400px', margin: '0 auto' }}>
      {showMultistepBar && <MultiStepBar />}
      {header && <StepHeader>{header.title}</StepHeader>}
      {header?.subTitle && <StepHeader>{header.subTitle}</StepHeader>}
      {stepContent}
      <Button title='Continue' onClick={() => router.push(`/quiz?q=${nextStep}`)} />
    </div>
  );
};
