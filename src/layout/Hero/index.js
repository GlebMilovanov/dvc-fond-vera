import styles from './Hero.module.css';
import logoDeti from './images/logo-deti.svg';
import girl from './images/girl.svg';
import boy from './images/boy.svg';
import logoDom from './images/logo-dom.png';
import logoVera from './images/logo-vera.svg';

import { useLocation } from 'react-router-dom';

export const Hero = () => {
  const location = useLocation();

  let subtitleText;
  if (location.pathname === '/dvc-blagodarnost') {
    subtitleText = 'конструктор благодарности для\u00A0учителя';
  } else if (location.pathname === '/dvc-gramota') {
    subtitleText = 'конструктор грамоты для\u00A0класса';
  }

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        ВСЕРОСCИЙСКАЯ Благотворительная акция к 1 сентября
      </h1>
      <div className={styles.logoContainer}>
        <img src={girl} alt="Девочка" className={styles.girlImage} />
        <a
          href="https://dvc.fondvera.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img
            src={logoDeti}
            alt="логотип Дети вместо цветов"
            className={styles.detiLogo}
          />
        </a>
        <img src={boy} alt="Мальчик" className={styles.boyImage} />
      </div>
      <div className={styles.subtitleContainer}>
        <img
          src={logoDom}
          alt="логотип Дом с маяком"
          className={styles.domLogo}
        />
        <h2 className={styles.subtitle}>
          {subtitleText}
        </h2>
        <img
          src={logoVera}
          alt="логотип Фонд Вера"
          className={styles.veraLogo}
        />
      </div>
    </section>
  );
};
