import { StaticImageData } from 'next/image';
import currentConfig from '@/../quiz-config/quiz-config.json';
import { IConfig } from '@/components/StepContent/types';

const getIcon = (iconName: string): StaticImageData =>
  require(`@/assets/icons/${iconName}.svg`);

const getImage = (imageName: string): StaticImageData =>
  require(`@/assets/images/${imageName}.png`);

const config = currentConfig.variants[0] as IConfig;

export { getIcon, getImage, config };
