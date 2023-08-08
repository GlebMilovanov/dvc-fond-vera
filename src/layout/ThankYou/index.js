import styles from './ThankYou.module.css';
import flowerLeft from './images/flower1.svg';
import flowerRight from './images/flower2.svg';

export const ThankYou = () => {
  return (
    <section className={styles.thankYou}>
      <div className={styles.hashtag}>
        <img className={styles.flowerLeft} src={flowerLeft} alt="цветок" />
        <p className={styles.link}>#вашапомощьнезавянет</p>
        <img className={styles.flowerRight} src={flowerRight} alt="цветок" />
      </div>
      <p className={styles.subtitle}>
        Спасибо за регистрацию в благотворительной акции «Дети вместо цветов»! С
        вашей помощью сотни тяжелобольных детей по всей России получат
        поддержку.
      </p>
    </section>
  );
};
