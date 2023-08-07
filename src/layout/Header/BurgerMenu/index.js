import styles from './BurgerMenu.module.css';
import email from './images/email.svg';
import vk from './images/vk.svg';
import youtube from './images/youtube.svg';

const links = [
  { name: 'Главная', href: 'https://dvc.fondvera.ru/' },
  { name: 'Вопросы-ответы', href: 'https://dvc.fondvera.ru/voprosi' },
  { name: 'Итоги прошлых лет', href: 'https://dvc.fondvera.ru/itogi' },
  { name: 'Регистрация', href: 'https://dvc.fondvera.ru/#reg' },
  { name: 'Сделать перевод', href: 'https://dvc.fondvera.ru/perevod' },
];

const socials = [
  {
    name: 'email',
    href: 'mailto:dvc@fondvera.ru?subject=Дети%20вместо%20цветов:%20вопрос%20участника',
    src: email,
  },
  { name: 'vk', href: 'https://vk.com/hospicefund', src: vk },
  {
    name: youtube,
    href: 'https://www.youtube.com/user/hospicefund',
    src: youtube,
  },
];

export const BurgerMenu = ({isOpen}) => {
  return (
    <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}>
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
        <p className={styles.subtitle}>Благотворительная акция к 1 сентября</p>
        <ul className={styles.socials}>
          {socials.map((social, idx) => (
            <li key={idx}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                <img
                  src={social.src}
                  alt={social.name}
                  className={styles.socialImage}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
