export interface IConfig {
  name: string;
  mainScreen: {
    yesRedirectTo: string;
    noRedirectTo: string;
  };
  steps: IStepConfig[];
}

export interface IStepConfig {
  id: string;
  showProgressBar?: boolean;
  progressIndicator?: IProgressIndicator;
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

export interface IProgressIndicator {
  redirectTo: string;
}

export interface IRadioGroup {
  type: 'radio-group';
  options: IRadioOption[];
}

export interface IRadioOption {
  value: string;
  icon: string;
  redirectTo: string;
  score?: number;
}

export interface ICheckboxGroup {
  type: 'checkbox-group';

  options: IRadioOption[];
}

export interface ICheckboxOption {
  value: string;
  icon: string;
  score?: number;
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

export interface IAnalyzer {
  type: 'analyzer';
  redirectTo: string;
  header?: string;
  stepsContent: [string, string, string, string];
}

export interface IRisk {
  type: 'risk';
  video: string;
  subtitle: {
    colored: string;
    regular: string;
  };
  statInfo: {
    bold: string;
    regular: string;
  };
  accordion: {
    caption: string;
    items: { title: string; value: string }[];
  };
}

export interface IFactsImage {
  type: 'facts-image';
  caption: string;
  items: IFactImageItem[];
}

export interface IFactImageItem {
  text: string;
  image: string;
}

export interface ITopImage {
  type: 'top-image';
  header: string;
  paragraphs: string[];
}

export interface EnterEmail {
  type: 'enter-email';
}

type IStepContent =
  | ITopImage
  | IRadioGroup
  | ICheckboxGroup
  | IAgreementScale
  | IBigImage
  | IFeedback
  | IAnimatedMap
  | IAnalyzer
  | IRisk
  | IFactsImage
  | EnterEmail;

export interface INextButton {
  value: string;
  redirectTo?: string;
}
