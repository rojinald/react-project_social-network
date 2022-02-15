import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import CustomTextArea from "../../common/CustomTextArea/CustomTextArea";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />)
  return <div className={s.postsBlock}>
    <div> My posts </div>
    <AddPostForm addPost={props.addPost} />
    <div className={s.posts}>
      {postsElements}
    </div >
  </div >
};

const AddPostForm = (props) => {
  const submit = (values, { setSubmitting }) => {
    props.addPost(values.addPostText)
    values.addPostText = ''
    setSubmitting(false);
  }
  const textAreaValidate = (values) => {
    const errors = {};
    if (!values.addPostText) {
      errors.addPostText = 'Required';
    } else if (
      values.addPostText.length > 10
    ) {
      errors.addPostText = 'Max symbols 10';

    }
    return errors;
  }
  return <Formik
    initialValues={{ addPostText: '' }}
    onSubmit={submit}
    validate={textAreaValidate}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field
          component={CustomTextArea}
          name="addPostText"
          placeholder='Create a new post' />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
}



export default MyPosts;


