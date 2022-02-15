import { ErrorMessage } from 'formik'
import React from 'react'
import s from './CustomTextArea.module.css'



const CustomTextArea = ({ field, form, ...props }) => {
   const name = field.name

   return <>
      <ErrorMessage name={name} component='div' />
      <textarea {...props} {...field}
         className={s.textArea}
         id={form.isValid ? null : s.errorMessage}
      > </textarea >
   </>
}



export default CustomTextArea