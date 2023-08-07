import styles from './CertificatePreview.module.css';
import logoVera from '../../../images/previews/logo-vera-green.svg';
import logoDom from '../../../images/previews/logo-dom-gratitude.svg';
import federmesser from '../../../images/previews/federmesser.svg';
import moniava from '../../../images/previews/moniava.svg';

export const CertificatePreview = ({ years, city, grade, school }) => {
  const getHelpText = years => {
    if (years <= 1)
      return (
        <>
          <span className={styles.helpNumber}>1</span>сентября!
        </>
      );
    if (years < 5)
      return (
        <>
          Помогаем <span className={styles.helpNumber}>{years}</span> года!
        </>
      );
    return (
      <>
        Помогаем <span className={styles.helpNumber}>{years}</span> лет!
      </>
    );
  };

  return (
    <div className={styles.container}>
      <p className={`${styles.help} ${years < 2 ? styles.helpShort : ''}`}>{getHelpText(years)}</p>
      <div className={styles.textContainer}>
        <p className={styles.participants}>
          Участникам благотворительной акции
        </p>
        <h2 className={styles.title}>«Дети вместо цветов – 2023»</h2>
        <p className={styles.school}>{`${grade ? grade : '1б'} класс, ${
          school ? school : 'гимназия №1'
        }, ${city ? city : 'Кострома'}`}</p>
        <p className={styles.textBold}>
          Спасибо, что вместе с фондом «Вера» и Детским хосписом «Дом с маяком»
          вы помогаете неизлечимо больным детям и молодым взрослым жить,
          развиваться, мечтать и быть счастливыми.
        </p>
        <p className={styles.text}>
          В 2023 году мы поддерживаем более 1050 детей и молодых взрослых. Все
          они проживают очень разную жизнь. Одним нужно специальное питание,
          чтобы расти; другим – аппараты для дыхания, чтобы дышать; а&nbsp;третьим –
          электроколяски, чтобы было легче передвигаться. Но абсолютно всем
          детям и их родителям важно знать, что они не одни. Благодаря вам они
          могут быть в этом уверены.
        </p>
        <p className={styles.text}>Спасибо, что вы рядом с нами — и с ними.</p>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.signaturesContainer}>
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
        <div className={styles.logoContainer}>
          <img src={logoVera} alt="логотип" className={styles.veraLogo} />
          <img src={logoDom} alt="логотип" className={styles.domLogo} />
        </div>
      </div>
    </div>
  );
};
