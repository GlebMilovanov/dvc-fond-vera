import styles from './WhatNext.module.css';
import boyAndGirl from '../../images/children1.svg';
import girls from '../../images/children2.svg';

export const WhatNext = () => {
  return (
    <section className={styles.whatNext}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Что дальше?</h2>
        <div className={styles.buttonContainer}>
          <p className={styles.buttonText}>
            Осталось собрать деньги и сделать благотворительный перевод
          </p>
          <a
            href="https://dvc.fondvera.ru/perevod"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonPay}
          >
            сделать&nbsp;перевод
          </a>
        </div>
        <p className={styles.text}>
          А ещё расскажите об акции «Дети вместо цветов» в своих соцсетях. Чем
          больше людей присоединится — тем больше средств мы сможем собрать в
          помощь неизлечимо больным детям.
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
