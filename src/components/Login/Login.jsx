import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Login.module.css'

const Login = (props) => {
   return <div>
      <h1>Login</h1>
      <LoginForm />
   </div>
}



const LoginForm = () => {
   const submit = (values, { setSubmitting }) => {
      setTimeout(() => {
         console.log(JSON.stringify(values, null, 2));
         setSubmitting(false);
      }, 400);
   }
   return <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={submit}
      validate={values => {
         const errors = {};
         if (!values.password) {
            errors.password = 'Required';
         }
         if (!values.email) {
            errors.email = 'Required';
         } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
            errors.email = 'Invalid email address';
         }
         return errors;
      }}
   >
      {({ isSubmitting, touched, errors }) => (
         <Form>
            <div>
               <Field className={s.input} id={touched.email && errors.email ? s.inputEffect : null} type="email" name="email" />
               <ErrorMessage name="email" component="div" />
            </div>
            <Field className={s.input} id={touched.password && errors.password ? s.inputEffect : null} type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Field type="checkbox" name="rememberMe" />
            <button type="submit" disabled={isSubmitting}>
               Submit
            </button>
         </Form>
      )}
   </Formik>
}


export default Login;