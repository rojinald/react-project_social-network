
import clasess from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {
    return <div className ="MyPost">
      <div>  My posts </div>
      <div> New posts </div>
      <Post message ="Hi, how are you?"/>
      <Post message ="It is my first post!"/>

    </div>
};
export default MyPosts;