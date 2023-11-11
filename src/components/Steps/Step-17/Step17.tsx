'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';
import ProgressBar from '../../ProgressBar/ProgressBar';
import review_stars from '../../../assets/images/review_stars.png';

function Step17() {
  return (
    <div style={{ position: 'relative', boxSizing: 'border-box' }}>
      <div className={styles.main_wrapper}>
        <h1 className={styles.header}>
          VPN Lumos is an incredibly effective way to shield all your data
        </h1>
        <div className={styles.review_wrapper}>
          <div className={styles.review_content}>
            <h3 className={styles.review_title}>Love this app</h3>
            <Image
              src={review_stars}
              alt='review_stars'
              className={styles.image}
              width={90}
              height={15}
            />
            <p className={styles.review_text}>
              Easy to use, reliable & affordable
            </p>
            <div className={styles.review_description}>
              <span>figrx</span>
              <span>Oct 13, 2023</span>
            </div>
          </div>
        </div>

        <div className={styles.review_wrapper}>
          <div className={styles.review_content}>
            <h3 className={styles.review_title}>Stunning</h3>
            <Image
              src={review_stars}
              alt='review_stars'
              className={styles.image}
              width={90}
              height={15}
            />
            <p className={styles.review_text}>
              Great service at a great price. Very happy with this very neat
              tool that helps keep me secured and protected. Love it!
            </p>
            <div className={styles.review_description}>
              <span>Dinar-ka</span>
              <span>Oct 13, 2023</span>
            </div>
          </div>
        </div>

        <div className={styles.review_wrapper}>
          <div className={styles.review_content}>
            <h3 className={styles.review_title}>Stunning</h3>
            <Image
              src={review_stars}
              alt='review_stars'
              className={styles.image}
              width={90}
              height={15}
            />
            <p className={styles.review_text}>
              Great service at a great price. Very happy with this very neat
              tool that helps keep me secured and protected. Love it!
            </p>
            <div className={styles.review_description}>
              <span>Dinar-ka</span>
              <span>Oct 13, 2023</span>
            </div>
          </div>
        </div>

        <div className={styles.review_wrapper}>
          <div className={styles.review_content}>
            <h3 className={styles.review_title}>Stunning</h3>
            <Image
              src={review_stars}
              alt='review_stars'
              className={styles.image}
              width={90}
              height={15}
            />
            <p className={styles.review_text}>
              Great service at a great price. Very happy with this very neat
              tool that helps keep me secured and protected. Love it!
            </p>
            <div className={styles.review_description}>
              <span>Dinar-ka</span>
              <span>Oct 13, 2023</span>
            </div>
          </div>
        </div>

        <div className={styles.review_wrapper}>
          <div className={styles.review_content}>
            <h3 className={styles.review_title}>Stunning</h3>
            <Image
              src={review_stars}
              alt='review_stars'
              className={styles.image}
              width={90}
              height={15}
            />
            <p className={styles.review_text}>
              Great service at a great price. Very happy with this very neat
              tool that helps keep me secured and protected. Love it!
            </p>
            <div className={styles.review_description}>
              <span>Dinar-ka</span>
              <span>Oct 13, 2023</span>
            </div>
          </div>
        </div>

        <div className={styles.review_wrapper}>
          <div className={styles.review_content}>
            <h3 className={styles.review_title}>Stunning</h3>
            <Image
              src={review_stars}
              alt='review_stars'
              className={styles.image}
              width={90}
              height={15}
            />
            <p className={styles.review_text}>
              Great service at a great price. Very happy with this very neat
              tool that helps keep me secured and protected. Love it!
            </p>
            <div className={styles.review_description}>
              <span>Dinar-ka</span>
              <span>Oct 13, 2023</span>
            </div>
          </div>
        </div>

        <div
          className={styles.review_wrapper}
          style={{
            marginBottom: '150px',
          }}
        >
          <div className={styles.review_content}>
            <h3 className={styles.review_title}>Stunning</h3>
            <Image
              src={review_stars}
              alt='review_stars'
              className={styles.image}
              width={90}
              height={15}
            />
            <p className={styles.review_text}>
              Great service at a great price. Very happy with this very neat
              tool that helps keep me secured and protected. Love it!
            </p>
            <div className={styles.review_description}>
              <span>Dinar-ka</span>
              <span>Oct 13, 2023</span>
            </div>
          </div>
        </div>
        <p className={styles.checking_answers}>Checking your answers...</p>
        <ProgressBar path='/quiz?q=18' />
      </div>
    </div>
  );
}

export default Step17;