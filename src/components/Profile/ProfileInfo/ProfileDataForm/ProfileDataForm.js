import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import CustomTextArea from '../../../common/CustomTextArea/CustomTextArea'
import s from '../ProfileDataForm/ProfileDataForm.module.css'

const ProfileDataForm = ({ submit, profile }) => {


   return <>
      <Formik
         initialValues={{
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            aboutMe: profile.aboutMe,
            lookingForAJobDescription: profile.lookingForAJobDescription,
         }}
         onSubmit={submit}
         validate={values => {
            const errors = {};
            if (!values.fullName) {
               errors.fullName = 'Required';
            }
            if (!values.aboutMe) {
               errors.aboutMe = 'Required';
            }
            return errors;
         }}
      >
         {({ isSubmitting, touched, errors, status }) => (

            <Form>
               {status
                  ? <div className={s.errorApi} >{status}</div>
                  : null
               }
               <div> <button type="submit" disabled={isSubmitting}> save </button></div>
               <div><b>Full Name</b> <Field className={s.input} id={touched.fullName && errors.fullName ? s.inputEffect : null} type="fullName" name="fullName" placeholder='fullName' />
                  <ErrorMessage name="fullName" component="span" />
               </div>
               <div><b>About Me</b> <Field className={s.input} id={touched.aboutMe && errors.aboutMe ? s.inputEffect : null} type="aboutMe" name="aboutMe" placeholder='aboutMe' />
                  <ErrorMessage name="aboutMe" component="span" /></div>
               <div> <b>lookingForAJob</b> <Field type="checkbox" name="lookingForAJob" />
               </div>
               <div><b>Looking for a job description</b>
                  <Field
                     component={CustomTextArea}
                     name="lookingForAJobDescription"
                     placeholder='My professional skills'
                  />
               </div>

               <div>
                  <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                     return <div>{key} <Field name={'contacts.' + key} placeholder={key} />
                        <ErrorMessage name={'contacts.' + key} component="span" />   </div>
                  })}
               </div>



            </Form>

         )}
      </Formik>
   </>
}



export default ProfileDataForm