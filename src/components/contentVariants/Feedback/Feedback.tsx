'use client';
import styles from './Feedback.module.scss';
import Image from 'next/image';
import review_stars from '../../../assets/images/review_stars.png';
import superman_image from '../../../assets/images/superman.png';
import { IFeedbackItem } from '../../StepContent/types';

interface FeedbackProps {
  firstFeedback: IFeedbackItem;
  secondFeedback: IFeedbackItem;
}

function Feedback({ firstFeedback, secondFeedback }: FeedbackProps) {
  return (
    <div
      style={{
        position: 'relative',
        boxSizing: 'border-box',
        padding: '30px 15px 0 15px',
        overflow: 'hidden',
      }}
    >
      <Image
        src={superman_image}
        alt=''
        style={{
          width: '100%',
          height: 'auto',
          padding: '0 35px',
        }}
      />

      <div
        style={{
          position: 'relative',
          height: '250px',
        }}
      >
        <div
          className={[styles.review_wrapper, styles.delayed_slide_left].join(
            ' ',
          )}
        >
          <div className={styles.review_content}>
            <h3 className={styles.review_title}>{firstFeedback.title}</h3>
            <Image
              src={review_stars}
              alt='review_stars'
              className={styles.image}
              width={90}
              height={15}
            />
            <p className={styles.review_text}>{firstFeedback.value}</p>
            <div className={styles.review_description}>
              <span>{firstFeedback.author}</span>
              <span>{firstFeedback.date}</span>
            </div>
          </div>
        </div>

        <div
          className={[styles.review_wrapper, styles.slide_in].join(' ')}
          style={{
            right: '-600px',
            opacity: '0',
          }}
        >
          <div className={styles.review_content}>
            <h3 className={styles.review_title}>{secondFeedback.title}</h3>
            <Image
              src={review_stars}
              alt='review_stars'
              className={styles.image}
              width={90}
              height={15}
            />
            <p className={styles.review_text}>{secondFeedback.value}</p>
            <div className={styles.review_description}>
              <span>{secondFeedback.author}</span>
              <span>{secondFeedback.date}</span>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.checking_answers}>Checking your answers...</p>
    </div>
  );
}

export default Feedback;
