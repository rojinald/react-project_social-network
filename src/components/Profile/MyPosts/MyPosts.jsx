import { Form, Formik, Field } from "formik";
import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />)
  return <div className={s.postsBlock}>
    <div> My posts </div>
    <AddPostForm />
    <div className={s.posts}>
      {postsElements}
    </div >
  </div >
};

const AddPostForm = () => {
  const submit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }
  return <Formik
    initialValues={{ addPostText: '' }}
    onSubmit={submit}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field component="textarea" name="addPostText" />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
}



export default MyPosts;


