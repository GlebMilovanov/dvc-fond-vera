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

/* <header class="header">
      <div class="header__logo-container">
        <a href="https://fondvera.ru/" class="header__logo-link" target="_blank"
          ><img
            src="<%=require('./images/logo-vera.svg')%>"
            alt="логотип вера"
            class="header__vera-logo"
        /></a>
        <img
          src="<%=require('./images/x.svg')%>"
          alt="х"
          class="header__x-logo"
        />
        <a href="https://mayak.help/" class="header__logo-link" target="_blank"
          ><img
            src="<%=require('./images/logo-dom.svg')%>"
            alt="логотип дом"
            class="header__dom-logo"
        /></a>
      </div>
      <button class="header__burger-menu"></button>
    </header> */
