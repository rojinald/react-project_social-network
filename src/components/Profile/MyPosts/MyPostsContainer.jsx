import { connect } from "react-redux";
import { addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
};

const mapDisaptchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDisaptchToProps)(MyPosts);


export default MyPostsContainer;