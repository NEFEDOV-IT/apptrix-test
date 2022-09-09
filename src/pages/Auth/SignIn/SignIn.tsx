import React, {FC} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {TextField} from "./TextField";
import './SignIn.scss'
import {useDispatch} from "react-redux";
import {fetchToken} from "../../../acynsActions";

export const SignIn: FC = () => {
  const dispatch: any = useDispatch()

  const validate = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters.')
      .max(15, 'Username must be 15 characters or less')
      .required('Required username'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  })

  return (
    <div className={'sign-in'}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={validate}
        onSubmit={values => {
          dispatch(fetchToken(values))
        }}
      >
        <>
          <h1 className="sign-in__title">Sign in</h1>
          <Form>
            <TextField label="Username" name="username" type="username"/>
            <TextField label="Password" name="password" type="password"/>
            <div className="sign-in__buttons">
              <button className={'sign-in__register'} type="submit">Login</button>
              <button className={'sign-in__reset'} type="reset">Reset</button>
            </div>
          </Form>
        </>
      </Formik>
    </div>
  )
}