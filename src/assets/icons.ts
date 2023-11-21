import { StaticImageData } from 'next/image';

const getIcon = (iconName: string): StaticImageData =>
  require(`../assets/newIcons/${iconName}.svg`);

export default getIcon;
