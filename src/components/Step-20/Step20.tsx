'use client';
import { useRouter } from 'next/navigation';
import styles from './Step.module.scss';
import Image from 'next/image';

function Step20() {
  return (
    <div className={styles.main_wrapper}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>
          Your Personal Plan for a free and secure internet is ready!
        </h1>
        <h2 className={styles.header_description}>
          Enter your email to get started
        </h2>
      </header>

      <div className={styles.input_body}>
        <div className={styles.con_input}>
          <input placeholder="Email" type="text" />
          <div className={styles.icons}>
            <i className="bx bxs-check-circle check"></i>
            <i className="bx bxs-x-circle x"></i>
          </div>
        </div>
      </div>

      {/* <form>
        <div className={styles.form_wrapper}>
          <div
            data-valid="true"
            data-validation-text=""
            className={styles.input_wrapper}
          >
            <input type="text" className={styles.input} value="" />
            <span className={styles.input_placeholder}>Your email</span>
          </div>
          <div className={styles.kruWow}></div>
        </div>
        <div className={styles.submit_button_wrapper}>
          <div className={styles.toast}>
            <p className={styles.toast_content}></p>
          </div>
          <button type="submit" className={styles.button} disabled={false}>
            Get My Plan
          </button>
        </div>
      </form> */}
    </div>
  );
}

export default Step20;
