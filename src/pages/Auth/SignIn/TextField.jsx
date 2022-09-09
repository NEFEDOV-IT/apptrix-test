import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="sign-in__input">
      <label className={'sign-in__label'} htmlFor={field.name}>{label}</label><br/>
      <input
        className={`sign-in__input-body ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}