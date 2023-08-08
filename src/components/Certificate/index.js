import styles from './Certificate.module.css';
import gratitudeImage from '../../images/gratitude.png';

import React, { useState, useCallback } from 'react';
import ReactDOMServer from 'react-dom/server';
import html2pdf from 'html2pdf.js';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import { CertificatePDF } from './CertificatePDF';
import { CertificatePreview } from './CertificatePreview';
import { CertificateForm } from './CertificateForm';

export const Certificate = () => {
  const [years, setYears] = useState('');
  const [city, setCity] = useState('');
  const [grade, setGrade] = useState('');
  const [school, setSchool] = useState('');

  const isMobile = useMediaQuery('(max-width: 768px)');

  const resetValues = () => {
    setYears('');
    setCity('');
    setGrade('');
    setSchool('');
  };

  const formatFilename = school => `грамота_${school.split(' ').join('_')}.pdf`;

  const downloadPDF = useCallback(() => {
    const filename = formatFilename(school);

    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <CertificatePDF years={years} city={city} grade={grade} school={school} />
    );

    const opt = {
      margin: [0, 0, 0, 0],
      filename: filename,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2.5 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
    };

    const pdfElement = document.createElement('div');
    pdfElement.innerHTML = htmlString;

    html2pdf().set(opt).from(pdfElement).outputPdf().save();
    resetValues();
  }, [years, city, grade, school]);

  return (
    <section className={styles.certificate}>
      {isMobile ? (
        <img
          src={gratitudeImage}
          alt="грамота"
          className={styles.gratitudeImage}
        />
      ) : (
        <CertificatePreview
          years={years}
          city={city}
          grade={grade}
          school={school}
        />
      )}
      <CertificateForm
        years={years}
        city={city}
        grade={grade}
        school={school}
        onYearChange={setYears}
        onCityChange={setCity}
        onGradeChange={setGrade}
        onSchoolChange={setSchool}
        downloadPDF={downloadPDF}
      />
    </section>
  );
};
