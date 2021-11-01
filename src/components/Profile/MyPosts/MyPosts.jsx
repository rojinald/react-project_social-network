
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {
  let postsData = [
    { id: 1, message: 'Давай дружить!', likesCount: 50 },
    { id: 2, message: 'Это мой первый пост :)', likesCount: 10 },
  ]

  return <div className={s.postsBlock}>
    <div> My posts </div>
    <div>
      <textarea></textarea>
    </div>
    <div>
      <button> Add posts </button>
    </div>
    <div className={s.posts}>
      <Post message={postsData[0].message} likeCount={postsData[0].likesCount} />
      <Post message={postsData[1].message} likeCount={postsData[1].likesCount} />
    </div >
  </div >
};
export default MyPosts;