import icon_yes from '../assets/icons/icon_yes.png';
import icon_no from '../assets/icons/icon_no.png';
import icon_was_not_working from '../assets/icons/icon_was_not_working.png';
import icon_expensive from '../assets/icons/icon_expensive.png';
import icon_low_connection from '../assets/icons/icon_low_connection.png';
import icon_was_not_safe from '../assets/icons/icon_was_not_safe.png';
import icon_other from '../assets/icons/icon_other.png';
import { StaticImageData } from 'next/image';

const icons: { [key: string]: StaticImageData } = {
  yes: icon_yes,
  no: icon_no,
  wrench: icon_was_not_working,
  moneyBag: icon_expensive,
  snail: icon_low_connection,
  warning: icon_was_not_safe,
  bubbleCloud: icon_other,
};

export default icons;
