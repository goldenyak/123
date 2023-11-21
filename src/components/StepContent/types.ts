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
  type: 'radio-group';
  options: IRadioOption[];
}

export interface IRadioOption {
  value: string;
  icon: string;
  redirectTo: string;
}

export interface ICheckboxGroup {
  type: 'checkbox-group';
  options: IRadioOption[];
}

export interface ICheckboxOption {
  value: string;
  icon: string;
}

export interface IAgreementScale {
  type: 'agreement-scale';
  value: string;
  redirectTo: string[];
}

type IStepContent =
  | IRadioGroup
  | ICheckboxGroup
  | IAgreementScale
  | Step4
  | Step10
  | Step11;

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
