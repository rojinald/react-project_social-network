import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Login.module.css'
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Login = (props) => {

   if (props.isAuth) {
      return <Redirect to={'/profile'} />
   }

   return <div>
      <h1>Login</h1>
      <LoginForm login={props.login} captchaUrl={props.captchaUrl} />
   </div>
}



const LoginForm = (props) => {
   debugger;
   const submit = (values, { setSubmitting, setStatus }) => {
      props.login(values.email, values.password, values.rememberMe, values.captcha, setStatus)
      setSubmitting(false)
   }

   return <Formik
      initialValues={{ email: '', password: '', captcha: '' }}
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
      {({ isSubmitting, touched, errors, status }) => (
         <Form>
            <div>{status
               ? <div className={s.errorApi} >{status}</div>
               : null
            }
               {props.captchaUrl &&
                  <div> <div><img src={props.captchaUrl} /></div>
                     <div>
                        <Field className={s.input} id={touched.captcha && errors.captcha ? s.inputEffect : null} type="captcha" name="captcha" placeholder='Symbols from image' />
                        <ErrorMessage name="captcha" component="span" />
                     </div>
                  </div>}
               <Field className={s.input} id={touched.email && errors.email ? s.inputEffect : null} type="email" name="email" placeholder='email' />
               <ErrorMessage name="email" component="div" />
            </div>
            <Field className={s.input} id={touched.password && errors.password ? s.inputEffect : null} type="password" name="password" placeholder='password' />
            <ErrorMessage name="password" component="div" />
            <Field type="checkbox" name="rememberMe" />
            <button type="submit" disabled={isSubmitting}>
               Submit
            </button>
         </Form>

      )}
   </Formik>
}

const mapStateToProps = (state) => ({
   captchaUrl: state.auth.captchaUrl,
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)

