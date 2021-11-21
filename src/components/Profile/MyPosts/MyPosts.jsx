
import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
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