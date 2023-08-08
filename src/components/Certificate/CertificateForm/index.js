import styles from './CertificateForm.module.css';
import { useForm } from '../../../hooks/useForm';
import { Form } from '../../../shared/Form';
import { Input } from '../../../shared/Input';
import { DropDown } from '../../../shared/DropDown';

export const CertificateForm = ({
  years,
  city,
  school,
  grade,
  onYearChange,
  onCityChange,
  onGradeChange,
  onSchoolChange,
  downloadPDF,
}) => {
  const initialValues = { years, city, school, grade };

  const { values, isValid, formRef, handleChange, handleSubmit } = useForm(
    initialValues,
    downloadPDF
  );

  const createYearsOption = () => {
    let options = [...Array(10).keys()].map(year => {
      let label;
      if (year === 0) label = 'Не участвовали';
      else if (year === 1) label = `${year} год`;
      else if (year > 1 && year < 5) label = `${year} года`;
      else label = `${year} лет`;

      return { value: year, label };
    });

    return options;
  };

  return (
    <div className={styles.container}>
      <Form
        title="в благодарность классу"
        subtitle="Пожалуйста, заполните эти поля, чтобы скачать грамоту для вашего класса. В первом поле укажите сколько лет вы уже участвуете в акции."
        isValid={isValid}
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <DropDown
          label="Участвуем в акции"
          name="years"
          optionsGenerator={createYearsOption}
          onChange={e => handleChange(e, onYearChange)}
          value={values.years.value}
        />
        <Input
          label="Город"
          id="city"
          name="city"
          type="text"
          placeholder="Введите тип и название населенного пункта"
          required
          minLength={1}
          maxLength={40}
          onChange={e => handleChange(e, onCityChange)}
          value={values.city}
          className={styles.wideInput}
        />
        <Input
          label="Класс"
          id="grade"
          name="grade"
          type="text"
          placeholder="Введите номер"
          required
          minLength={1}
          maxLength={20}
          onChange={e => handleChange(e, onGradeChange)}
          value={values.grade}
          className={styles.narrowInput}
        />
        <Input
          label="Школа"
          id="school"
          name="school"
          type="text"
          placeholder="Введите номер или название"
          required
          minLength={1}
          maxLength={40}
          onChange={e => handleChange(e, onSchoolChange)}
          value={values.school}
          className={styles.wideInput}
        />
      </Form>
    </div>
  );
};
