
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {
  let posts = [
    { id: 1, message: 'Давай дружить!', likesCount: 50 },
    { id: 2, message: 'Это мой первый пост :)', likesCount: 10 },
  ]

  let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount} />)

  return <div className={s.postsBlock}>
    <div> My posts </div>
    <div>
      <textarea></textarea>
    </div>
    <div>
      <button> Add posts </button>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div >
  </div >
};
export default MyPosts;