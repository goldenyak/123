export interface IStepConfig {
  id: number;
  showMultiStepBar?: boolean;
  nextButton?: INextButton;
  prevStep?: string;
  fillGradient?: boolean;
  header?: string;
  content: IStepContent;
}

export interface IRadioGroup {
  type: 'radioGroup';
  options: IRadioOption[];
}

export interface IRadioOption {
  value: string;
  icon: string;
  redirectTo: string;
}

export interface ICheckboxGroup {
  type: 'checkboxGroup';
  options: IRadioOption[];
}

export interface ICheckboxOption {
  value: string;
  icon: string;
}

type IStepContent = IRadioGroup | ICheckboxGroup | Step4 | Step10 | Step11;

export interface INextButton {
  value: string;
  redirectTo: string;
}

//Workaround - remove

interface Step4 {
  type: 'step4';
}

interface Step10 {
  type: 'step10';
}

interface Step11 {
  type: 'step11';
}
