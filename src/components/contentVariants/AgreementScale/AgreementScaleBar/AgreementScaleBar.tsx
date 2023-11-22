import { IAgreementScale } from '@/components/StepContent/types';
import styles from './AgreementScaleBar.module.scss';
import { useRouter } from 'next/navigation';

interface AgreementScaleProps {
  redirectTo: IAgreementScale['redirectTo'];
}

const AgreementScale = ({ redirectTo }: AgreementScaleProps) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper_for_answers}>
      <div className={styles.answers_wrapper}>
        <label className={styles.label}>
          <input
            onChange={() => router.push(`/quiz?q=${redirectTo[0]}`)}
            className={styles.input}
            type='radio'
            name='input_name'
            value='one'
          />
          <div className={styles.label_text}>1</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={() => router.push(`/quiz?q=${redirectTo[1]}`)}
            className={styles.input}
            type='radio'
            name='input_name'
            value='two'
          />
          <div className={styles.label_text}>2</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={() => router.push(`/quiz?q=${redirectTo[2]}`)}
            className={styles.input}
            type='radio'
            name='input_name'
            value='three'
          />
          <div className={styles.label_text}>3</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={() => router.push(`/quiz?q=${redirectTo[3]}`)}
            className={styles.input}
            type='radio'
            name='input_name'
            value='four'
          />
          <div className={styles.label_text}>4</div>
        </label>

        <label className={styles.label}>
          <input
            onChange={() => router.push(`/quiz?q=${redirectTo[4]}`)}
            className={styles.input}
            type='radio'
            name='input_name'
            value='five'
          />
          <div className={styles.label_text}>5</div>
        </label>
      </div>

      <div className={styles.answers_variant}>
        <span>Not at all</span>
        <span>Totally</span>
      </div>
    </div>
  );
};

export default AgreementScale;
