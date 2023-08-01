import styles from './Hero.module.css';
import logoDeti from '../../images/logo-deti.svg';
import girl from '../../images/girl.svg';
import boy from '../../images/boy.svg'

export const Hero = () => {
  return (
    <section className={styles.hero}>
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
        <img src={boy} alt='Мальчик' className={styles.boyImage}/>
      </div>
      <h1 className={styles.title}>Благотворительная акция к 1 сентября</h1>
    </section>
  );
};
