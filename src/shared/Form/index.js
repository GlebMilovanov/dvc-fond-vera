import styles from './Form.module.css';
import saveActive from './images/save-active.svg';
import saveDisabled from './images/save-disabled.svg';

import { forwardRef } from 'react';

export const Form = forwardRef(
  ({ title, subtitle, isValid, children, className, ...props }, ref) => {
    return (
      <>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <form ref={ref} className={styles.form} {...props}>
          <div className={`${styles.inputContainer} ${className}`}>{children}</div>
          <button
            className={`${styles.submitButton} ${
              isValid ? '' : styles.disabled
            }`}
            disabled={!isValid}
          >
            <img
              src={isValid ? saveActive : saveDisabled}
              alt="стрелка"
              className={styles.arrow}
            />
            <span>Сохранить в pdf</span>
          </button>
        </form>
      </>
    );
  }
);
