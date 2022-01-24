import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
   >
      {({ isSubmitting }) => (
         <Form>
            <div>
               <Field type="email" name="email" />
            </div>
            <Field type="password" name="password" />
            <Field type="checkbox" name="rememberMe" />
            <button type="submit" disabled={isSubmitting}>
               Submit
            </button>
         </Form>
      )}
   </Formik>
}


export default Login;