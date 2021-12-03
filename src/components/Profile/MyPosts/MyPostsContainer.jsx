import { connect } from "react-redux";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

const mapDisaptchToProps = (dispatch) => {
  return {

    updateNewPostText: (text) => {
      dispatch(updatePostActionCreator(text))
    },

    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDisaptchToProps)(MyPosts);


export default MyPostsContainer;