
import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />)

  return <div className={s.postsBlock}>
    <div> My posts </div>
    <div>
      <textarea ref={newPostElement}></textarea>
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