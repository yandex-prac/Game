import React from 'react';
import { Input } from '../Input';
import { BlueButton } from '../Button/Button';
import { FormikValues, useFormik } from 'formik';

const validate = (values: FormikValues) => {
  const errors: Record<string, string> = {};

  if(!values.name) {
    errors.name = 'Required';
  }

  return errors;
};

export function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return <form onSubmit={ formik.handleSubmit }>
    <Input name="name" label="Имя" onBlur={ formik.handleBlur } onChange={ formik.handleChange } error={ formik.touched.name ? formik.errors.name : undefined }/>
    <div></div>
    <BlueButton>Тест</BlueButton>
    <div></div>

  </form>
}
