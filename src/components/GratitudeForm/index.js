import styles from './GratitudeForm.module.css';
import saveActive from '../../images/save-active.svg';

export const GratitudeForm = ({ onNameChange }) => {
  const handleChange = event => {
    setTimeout(() => {
      onNameChange(event.target.value);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>в благодарность учителю</h2>
      <p className={styles.subtitle}>
        Пожалуйста, заполните эти поля, чтобы скачать именную благодарность для
        вашего учителя.
      </p>
      <form className={styles.form}>
        <label className={styles.inputName} for="name">
          Имя и отчество
        </label>
        <input
          className={styles.input}
          id="name"
          name="name"
          type="text"
          placeholder="Введите имя и отчество"
          required
          minLength={3}
          maxLength={40}
          onChange={handleChange}
        ></input>
        <button className={`${styles.submitButton}`}>
          <img src={saveActive} alt="стрелка" className={styles.arrow} />
          <span>Сохранить в pdf</span>
        </button>
      </form>
    </div>
  );
};
