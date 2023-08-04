import styles from './BurgerButton.module.css'

export const BurgerButton = ({isOpen, toggleButton}) => {
  return (
    <button
      className={`${styles.burger} ${isOpen ? styles.open : ''}`}
      onClick={toggleButton}
    >
      <span className={styles.burgerSpan}></span>
      <span className={styles.burgerSpan}></span>
      <span className={styles.burgerSpan}></span>
    </button>
  );
};
