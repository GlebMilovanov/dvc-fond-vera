import styles from './Header.module.css';
import logoVera from '../../images/logo-vera.svg';
import logoX from '../../images/x.svg';
import logoDom from '../../images/logo-dom.svg';

import { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
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
      </div>
    </header>
  );
};
