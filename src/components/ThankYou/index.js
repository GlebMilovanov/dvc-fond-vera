import styles from './ThankYou.module.css';

export const ThankYou = () => {
  return (
    <section className={styles.thankYou}>
      <div className={styles.hashtag}>
        <a
          href="https://vk.com/feed?q=%23%D0%B2%D0%B0%D1%88%D0%B0%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D0%BD%D0%B5%D0%B7%D0%B0%D0%B2%D1%8F%D0%BD%D0%B5%D1%82&section=search"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          #вашапомощьнезавянет
        </a>
      </div>
      <p className={styles.subtitle}>
        Спасибо за регистрацию на благотворительную акцию “Дети вместо цветов”.
        Благодаря вам сотни тяжелобольных детей получат помощь.
      </p>
    </section>
  );
};
