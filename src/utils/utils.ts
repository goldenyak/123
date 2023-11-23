import { StaticImageData } from 'next/image';

const getIcon = (iconName: string): StaticImageData =>
  require(`@/assets/icons/${iconName}.svg`);

const getImage = (imageName: string): StaticImageData =>
  require(`@/assets/images/${imageName}.png`);

export { getIcon, getImage };
