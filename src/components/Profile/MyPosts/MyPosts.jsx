
import clasess from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {
    return <div className ={clasess.column}>
      <div>  My posts </div>
      <div> New posts </div>
      <Post message ="Hi, how are you?" likeCount = " 15"/>
      <Post message ="It is my first post!" likeCount = " 17"/>

    </div>
};
export default MyPosts;