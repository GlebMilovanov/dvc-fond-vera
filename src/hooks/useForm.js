import { useState, useRef, useEffect } from 'react';

export const useForm = (initialValues, downloadPDF) => {
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleChange = (event, handler) => {
    const newValue = event.target.value;
    handler(newValue);
    setValues({
      ...values,
      [event.target.name]: newValue,
    });

    if (formRef.current) {
      setIsValid(formRef.current.checkValidity());
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (isValid) {
      downloadPDF();
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setValues(initialValues);
      setIsValid(false);
      setIsSubmitted(false);
    }
  }, [isSubmitted, initialValues]);

  return {
    values,
    isValid,
    formRef,
    handleChange,
    handleSubmit,
  };
};
