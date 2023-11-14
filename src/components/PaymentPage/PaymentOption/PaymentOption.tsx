import styles from './PaymentOption.module.scss';
import icon_check_blue from '../../../assets/icons/icon_check_blue.svg';
import icon_most_popular from '../../../assets/icons/icon_most_popular.svg';
import Image from 'next/image';

interface PaymentOptionPrice {
  before: string;
  after: string;
}

interface PaymentOptionProps {
  title: string;
  monthlyPrice: PaymentOptionPrice;
  weeklyPrice: PaymentOptionPrice;
  mostPopular?: boolean;
  checked: boolean;
  onChanged: () => void;
}

const PaymentOption = ({
  title,
  monthlyPrice,
  weeklyPrice,
  mostPopular = false,
  checked,
  onChanged,
}: PaymentOptionProps) => {
  return (
    <label className={styles.label}>
      <input type='checkbox' checked={checked} onChange={onChanged} />
      <div className={styles.label_wrapper}>
        <div className={styles.border} />
        <div className={styles.left_part}>
          <div className={styles.circle}>
            <Image
              src={icon_check_blue}
              alt=''
              className={styles.label_check}
            />
          </div>
          <div className={styles.title_wrapper}>
            {mostPopular && <Image src={icon_most_popular} alt={''} />}
            <div className={styles.title}>{title}</div>
            <div className={styles.monthlyPrice}>
              <span className={styles.monthlyPriceBefore}>
                {monthlyPrice.before}
              </span>{' '}
              {monthlyPrice.after} monthly
            </div>
          </div>
        </div>
        <div className={styles.right_part}>
          <div className={styles.weeklyPriceAfter}>{weeklyPrice.after}</div>
          <div>
            <span style={{ textDecoration: 'line-through' }}>
              {weeklyPrice.before}
            </span>
          </div>
          <div>per week</div>
        </div>
      </div>
    </label>
  );
};

export default PaymentOption;
