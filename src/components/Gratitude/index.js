import React, { useState, useCallback } from 'react';
import ReactDOMServer from 'react-dom/server';
import styles from './Gratitude.module.css';
import gratitudeImage from './images/gratitude.svg';
import { GratitudeForm } from './GratitudeForm';
import { GratitudePreview } from './GratitudePreview/index';
import html2pdf from 'html2pdf.js';
import { GratitudePDF } from './GratitudePDF';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const Gratitude = () => {
  const [teacherName, setTeacherName] = useState('');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const resetValues = () => {
    setTeacherName('');
  };

  const formatFilename = name =>
    `благодарность_${name.split(' ').join('_')}.pdf`;

  const downloadPDF = useCallback(() => {
    const filename = formatFilename(teacherName);

    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <GratitudePDF name={teacherName} />
    );

    const opt = {
      margin: [0, 0, 0, 0],
      filename: filename,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2.5, width: '794px' },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    const pdfElement = document.createElement('div');
    pdfElement.innerHTML = htmlString;

    html2pdf().set(opt).from(pdfElement).outputPdf().save();
    resetValues();
  }, [teacherName]);

  return (
    <section className={styles.gratitude}>
      {isMobile ? <img src={gratitudeImage} alt='грамота' className={styles.gratitudeImage}/> : <GratitudePreview name={teacherName} />}
      <GratitudeForm
        name={teacherName}
        onNameChange={setTeacherName}
        downloadPDF={downloadPDF}
      />
    </section>
  );
};
