import styles from './Header.module.css';
import logoVera from '../../images/logo-vera.svg';
import logoX from '../../images/x.svg';
import logoDom from '../../images/logo-dom.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a
          href="https://fondvera.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoLink}
        >
          <img
            src={logoVera}
            alt="логотип фонд Вера"
            className={styles.veraLogo}
          />
        </a>
        <img src={logoX} alt="х" className={styles.xLogo} />
        <a
          href="https://mayak.help/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoLink}
        >
          <img
            src={logoDom}
            alt="логотип Дом с Маяком"
            className={styles.domLogo}
          />
        </a>
      </div>
      <button className={styles.burger}></button>
    </header>
  );
};
