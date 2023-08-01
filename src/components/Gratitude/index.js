import styles from './Gratitude.module.css';
import { GratitudeForm } from '../GratitudeForm';
import { GratitudePreview } from '../GratitudePreview/index';
import { useState } from 'react';

export const Gratitude = () => {
  const [teacherName, setTeacherName] = useState('')

  return (
    <section className={styles.gratitude}>
      <GratitudePreview name={teacherName}/>
      <GratitudeForm onNameChange={setTeacherName}/>
    </section>
  );
};
