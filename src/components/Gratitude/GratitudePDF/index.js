import styles from './GratitudePDF.module.css';
import gratitudeHeading from './images/PDF-gratitude-heading.svg'
import logoVera from './images/PDF-logo-vera-green.svg';
import logoDom from './images/PDF-logo-dom-gratitude.svg';
import federmesser from './images/PDF-federmesser.svg';
import moniava from './images/PDF-moniava.svg';

import { forwardRef } from 'react';

export const GratitudePDF = forwardRef(({ name }, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <img src={gratitudeHeading} alt="заголовок" className={styles.heading} />
      <div className={styles.logoContainer}>
        <img src={logoVera} alt="логотип" className={styles.veraLogo} />
        <img src={logoDom} alt="логотип" className={styles.domLogo} />
      </div>
      <p className={styles.teacherName}>{name ? `${name},` : 'Имя учителя,'}</p>
      <span className={styles.teacherNameSpan}>
        Спасибо, что выбрали вместо цветов &mdash; детей.
      </span>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Каждый день вы помогаете школьникам учиться и взрослеть, познавать
          этот мир и находить своё место в нём. Сегодня благодаря вашей
          отзывчивости такую поддержку смогут получить не только ваши ученики,
          но и тяжелобольные дети, живущие по всей стране. Спасибо вам за это.
        </p>
        <p className={styles.text}>
          Дети, которым помогают фонд «Вера» и Детский хоспис «Дом с маяком»,
          тяжело болеют, но они могут оставаться детьми несмотря на диагноз. И
          жить дома, а не в больнице — рядом с родителями, братьями и сёстрами,
          бабушками и дедушками. Благодаря вашей помощи кто-то из них впервые
          выйдет из дома на улицу, а кто-то сможет учиться за партой, а не в
          постели.
        </p>
        <p className={styles.text}>
          Спасибо, что вы, как и мы, хотите, чтобы дети оставались детьми
          вопреки болезни. И помогаете нам сделать так, чтобы их родители
          чувствовали, что они не одни, что помощь — рядом. Без вас ничего бы не
          было.
        </p>
      </div>
      <span className={styles.gratitudeNote}>ваша помощь не завянет</span>
      <div className={styles.signature}>
        <p className={styles.signatureText}>
          С благодарностью и надеждой на долгую дружбу,
        </p>
        <div className={styles.signatureContainer}>
          <div className={styles.signatureFedermesser}>
            <p className={styles.signatureName}>НЮТА ФЕДЕРМЕССЕР</p>
            <p className={styles.signatureJobTitle}>
              Учредитель и член Управляющего совета&nbsp;Фонда помощи «Вера»
            </p>
            <img
              src={federmesser}
              alt="подпись"
              className={styles.signatureFedermesserImage}
            />
          </div>
          <div className={styles.signatureMoniava}>
            <p className={styles.signatureName}>ЛИДА МОНИАВА</p>
            <p className={styles.signatureJobTitle}>
              Учредитель Фонда «Дом&nbsp;с&nbsp;маяком»
            </p>
            <img
              src={moniava}
              alt="подпись"
              className={styles.signatureMoniavaImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
