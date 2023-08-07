import styles from './Input.module.css';

export const Input = ({ label, id, className, ...props }) => {
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      <label className={styles.inputName} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} id={id} {...props}></input>
    </div>
  );
};
