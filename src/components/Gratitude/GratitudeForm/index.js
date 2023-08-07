import styles from './GratitudeForm.module.css';
import teacher from './images/teacher.svg';

import { useForm } from '../../../hooks/useForm';

import { Input } from '../../../shared/Input';
import { Form } from '../../../shared/Form';

export const GratitudeForm = ({ name, onNameChange, downloadPDF }) => {
  const initialValues = { name };

  const { values, isValid, formRef, handleChange, handleSubmit } = useForm(
    initialValues,
    downloadPDF
  );

  return (
    <div className={styles.container}>
      <Form
        title="в благодарность учителю"
        subtitle="Пожалуйста, заполните это поле, чтобы скачать именную благодарность для
      вашего учителя."
        isValid={isValid}
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <Input
          label="Имя и отчество"
          id="name"
          name="name"
          type="text"
          placeholder="Введите имя и отчество"
          required
          minLength={3}
          maxLength={40}
          onChange={e => handleChange(e, onNameChange)}
          value={values.name}
        />
      </Form>
      <img src={teacher} alt="учительница" className={styles.teacher} />
    </div>
  );
};
