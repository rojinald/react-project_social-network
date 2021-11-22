
import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/state";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {

  let newPostElement = React.createRef();
  




  let addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updatePostActionCreator(text)
    props.dispatch(action);
  }

  let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />)

  return <div className={s.postsBlock}>
    <div> My posts </div>
    <div>
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
    </div>
    <div>
      <button onClick={addPost}> Add posts </button>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div >
  </div >
};
export default MyPosts;