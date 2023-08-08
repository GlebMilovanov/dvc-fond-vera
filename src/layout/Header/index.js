import styles from './Header.module.css';
import logoDvc from '../../images/dvc-logo.svg';

import { useState, useEffect } from 'react';
import { useIsScrolled } from '../../hooks/useIsScrolled';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import { BurgerMenu } from './BurgerMenu';
import { BurgerButton } from './BurgerButton';

const links = [
  { name: 'Главная', href: 'https://dvc.fondvera.ru/' },
  { name: 'Вопросы-ответы', href: 'https://dvc.fondvera.ru/voprosi' },
  { name: 'Итоги прошлых лет', href: 'https://dvc.fondvera.ru/itogi' },
  { name: 'Регистрация', href: 'https://dvc.fondvera.ru/#reg' },
  { name: 'Сделать перевод', href: 'https://dvc.fondvera.ru/perevod' },
];

export const Header = () => {
  const isScrolled = useIsScrolled();
  const isBurger = useMediaQuery('(max-width: 1130px)');
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
          <a
            href="https://dvc.fondvera.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <img
              src={logoDvc}
              alt="логотип Дети вместо цветов"
              className={styles.dvcLogo}
            />
          </a>
          {!isBurger && (
            <nav className={styles.navigation}>
              <ul className={styles.links}>
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {isBurger && (
            <BurgerButton
              toggleButton={toggleBurgerMenu}
              isOpen={isBurgerMenuOpen}
            />
          )}
        </div>
      </header>
      <BurgerMenu links={links} isOpen={isBurgerMenuOpen} />
    </>
  );
};
