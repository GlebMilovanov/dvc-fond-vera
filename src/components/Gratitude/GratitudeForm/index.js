import styles from './GratitudeForm.module.css';
import saveActive from './images/save-active.svg';
import saveDisabled from './images/save-disabled.svg';
import teacher from './images/teacher.svg';
import { useForm } from '../../../hooks/useForm';

export const GratitudeForm = ({ name, onNameChange, downloadPDF }) => {
  const initialValues = { name };

  const { values, isValid, formRef, handleChange, handleSubmit } = useForm(
    initialValues,
    downloadPDF
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>в благодарность учителю</h2>
      <p className={styles.subtitle}>
        Пожалуйста, заполните эти поля, чтобы скачать именную благодарность для
        вашего учителя.
      </p>
      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.inputName} htmlFor="name">
          Имя и отчество
        </label>
        <input
          value={values.name}
          className={styles.input}
          id="name"
          name="name"
          type="text"
          placeholder="Введите имя и отчество"
          required
          minLength={3}
          maxLength={40}
          onChange={(e) => handleChange(e, onNameChange)}
        ></input>
        <button
          className={`${styles.submitButton} ${isValid ? '' : styles.disabled}`}
          disabled={!isValid}
        >
          <img
            src={isValid ? saveActive : saveDisabled}
            alt="стрелка"
            className={styles.arrow}
          />
          <span>Сохранить в pdf</span>
        </button>
      </form>
      <img src={teacher} alt="учительница" className={styles.teacher} />
    </div>
  );
};
