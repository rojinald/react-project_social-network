
import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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