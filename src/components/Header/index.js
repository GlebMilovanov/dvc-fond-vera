import styles from './Header.module.css';
import logoVera from '../../images/logo-vera.svg';
import logoX from '../../images/x.svg';
import logoDom from '../../images/logo-dom.svg';

import { useState, useEffect } from 'react';
import { useIsScrolled } from '../../hooks/useIsScrolled';

import { BurgerMenu } from './BurgerMenu';
import { BurgerButton } from './BurgerButton';

export const Header = () => {
  const isScrolled = useIsScrolled();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  useEffect(() => {
    if (isBurgerMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isBurgerMenuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      >
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
          <BurgerButton toggleButton={toggleBurgerMenu} isOpen={isBurgerMenuOpen}/>
        </div>
      </header>
      <BurgerMenu isOpen={isBurgerMenuOpen} />
    </>
  );
};
