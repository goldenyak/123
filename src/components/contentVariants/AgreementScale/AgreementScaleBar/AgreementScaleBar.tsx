import { useNavigation } from '@/hooks/useNavigation';
import { IAgreementScale } from '../../../StepContent/types';
import styles from './AgreementScaleBar.module.scss';
import { useStore } from '@/store/useStore';

interface AgreementScaleProps {
  redirectTo: IAgreementScale['redirectTo'];
}

const AgreementScaleBar = ({ redirectTo }: AgreementScaleProps) => {
  console.log('AgreementScaleBar');
  const { goTo } = useNavigation();
  const addAnswer = useStore((state) => state.addAnswer);
  return (
    <div className={styles.wrapper_for_answers}>
      <div className={styles.answers_wrapper}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <label className={styles.label} key={index + redirectTo[index]}>
            <input
              onChange={() => {
                addAnswer(index + 1 + '');
                goTo(redirectTo[index]);
              }}
              className={styles.input}
              type='radio'
              name='input_name'
              value='one'
            />
            <div className={styles.label_text}>{index + 1}</div>
          </label>
        ))}
      </div>
      <div className={styles.answers_variant}>
        <span>Not at all</span>
        <span>Totally</span>
      </div>
    </div>
  );
};

export default AgreementScaleBar;
