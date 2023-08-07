import styles from './WhatElse.module.css';
import boyAndGirl from '../../images/children1.svg';
import girls from '../../images/children2.svg';

export const WhatElse = () => {
  return (
    <section className={styles.whatElse}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Что можно сделать еще</h2>
        <p className={styles.text}>
          Расскажите об акции «Дети вместо цветов» в своих соцсетях. Чем больше
          людей присоединится — тем больше средств мы сможем собрать в помощь
          неизлечимо больным детям.
        </p>
        <p className={styles.hashtags}>
          Хештеги акции: #вашапомощьнезавянет #детивместоцветов #фондвера
          #домсмаяком
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={boyAndGirl} alt="дети" className={styles.boyAndGirl} />
        <img src={girls} alt="дети" className={styles.girls} />
      </div>
    </section>
  );
};
