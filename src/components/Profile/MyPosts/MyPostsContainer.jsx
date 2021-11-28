
import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onAddPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  }

  let onPostChange = (text) => {
    let action = updatePostActionCreator(text)
    props.store.dispatch(action);
  }


  return (
    <MyPosts updateNewPostText={onPostChange}
      addPost={onAddPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText} />
  )
};
export default MyPostsContainer;