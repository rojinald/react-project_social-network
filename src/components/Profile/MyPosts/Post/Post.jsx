
import clasess from "./Post.module.css"
const Post = (props) => {
  return <div className={clasess.item}>
    <img src="https://i.pinimg.com/originals/61/52/40/6152408126fe3d5445c60af2f8474812.jpg"></img>
    {props.message}
    <div>
      <span>Like </span>
      {props.likeCount}
    </div>
  </div>


};
export default Post;