import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>© 2023 Фонд помощи хосписам «Вера»</p>
        <a
          href="https://dvc.fondvera.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          dvc.fonvera.ru
        </a>
        <div className={styles.email}>
          Если у вас остались вопросы, пишите нам{' '}
          <a
            href="mailto:dvc@fondvera.ru?subject=Дети%20вместо%20цветов:%20вопрос%20участника"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.emailLink}
          >
            dvc@fondvera.ru
          </a>
        </div>
      </div>
    </footer>
  );
};
