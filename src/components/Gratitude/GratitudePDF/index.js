import styles from './GratitudePDF.module.css'
import gratitudeHeading from './images/PDF-gratitude-heading.svg';
import logoVera from './images/PDF-logo-vera-green.svg'
import logoDom from './images/PDF-logo-dom-gratitude.svg'
import federmesser from './images/PDF-federmesser.svg';
import moniava from './images/PDF-moniava.svg';

import { forwardRef } from 'react';

export const GratitudePDF = forwardRef(({ name }, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <img src={gratitudeHeading} alt="заголовок" className={styles.heading} />
      <div className={styles.logoContainer}>
        <img src={logoVera} alt='логотип' className={styles.veraLogo} />
        <img src={logoDom} alt='логотип' className={styles.domLogo} />
      </div>
      <p className={styles.teacherName}>
        {name ? `${name},` : 'Имя учителя,'}
      </p>
      <span className={styles.teacherNameSpan}>
        Спасибо, что выбрали вместо цветов &mdash; детей.
      </span>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Мы верим, что личный пример милосердия, сострадания и гуманизма был и
          остаётся самым действенным. Что бы ни случилось в жизни, и какой бы
          диагноз ни поставили (особенно детям), люди вокруг всегда могут
          помочь. Не всегда вылечить, но сделать жизнь лучше и полнее.
        </p>
        <p className={styles.text}>
          В 2023 году Фонд «Вера» и Фонд «Дом с маяком» помогают более 1050
          неизлечимо больным детям. У каждого ребёнка своя история, за каждым
          ребёнком — целый мир. Спасибо, что помогаете им жить, взрослеть и
          развиваться.
        </p>
        <p className={styles.text}>
          Собранные благодаря вам деньги станут лечебным питанием, средствами
          гигиены, специальными трубками и аппаратами для дыхания, юридической и
          психологической помощью семьям. Так больше времени останется для
          любви, а не для болезни.
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
