import styles from './ThankYou.module.css';
import flowerLeft from './images/flower1.svg';
import flowerRight from './images/flower2.svg';

import { useLocation } from 'react-router-dom';

export const ThankYou = () => {
  const location = useLocation();

  let subtitleText;
  if (location.pathname === '/dvc-blagodarnost') {
    subtitleText =
      'Спасибо за регистрацию в благотворительной акции «Дети вместо цветов»! С вашей помощью сотни тяжелобольных детей по всей России получат поддержку.';
  } else if (location.pathname === '/dvc-gramota') {
    subtitleText =
      'Спасибо за пожертвование. Каждый ваш рубль превратится в професисональную помощь сотням неизлечимо больных детей и их семьям';
  }

  return (
    <section className={styles.thankYou}>
      <div className={styles.hashtag}>
        <img className={styles.flowerLeft} src={flowerLeft} alt="цветок" />
        <p className={styles.link}>#вашапомощьнезавянет</p>
        <img className={styles.flowerRight} src={flowerRight} alt="цветок" />
      </div>
      <p className={styles.subtitle}>{subtitleText}</p>
    </section>
  );
};
