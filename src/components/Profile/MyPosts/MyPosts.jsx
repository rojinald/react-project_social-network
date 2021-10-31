
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {
  return <div className={s.postsBlock}>
    <div> My posts </div>
    <div>
      <textarea></textarea>
    </div>
    <div>
      <button> Add posts </button>
    </div>
    <div className={s.posts}>
      <Post message="Hi, how are you?" likeCount=" 15" />
      <Post message="It is my first post!" likeCount=" 17" />
    </div >
  </div >
};
export default MyPosts;