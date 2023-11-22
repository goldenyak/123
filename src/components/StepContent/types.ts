export interface IStepConfig {
  id: number;
  showProgressBar?: boolean;
  nextButton?: INextButton;
  prevStep?: string;
  gradientFill?: boolean;
  header?: IStepHeader;
  content: IStepContent;
}

export interface IStepHeader {
  value: string;
  type?: 'center';
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

export interface IBigImage {
  type: 'big-image';

  image: string;
}

export interface IFeedback {
  type: 'feedback';

  firstFeedback: IFeedbackItem;
  secondFeedback: IFeedbackItem;
}

export interface IFeedbackItem {
  title: string;
  date: string;
  author: string;
  value: string;
}

export interface IAnimatedMap {
  type: 'animated-map';
}

type IStepContent =
  | IRadioGroup
  | ICheckboxGroup
  | IAgreementScale
  | IBigImage
  | IFeedback
  | IAnimatedMap
  | Step4
  | Step10
  | Step11
  | Step17
  | Step18
  | Step19
  | Step20;

export interface INextButton {
  value: string;
  redirectTo?: string;
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
interface Step17 {
  type: 'step17';
}
interface Step18 {
  type: 'step18';
}
interface Step19 {
  type: 'step19';
}
interface Step20 {
  type: 'step20';
}
