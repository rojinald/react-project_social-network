import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

const Profile = (props) => {
    return <div>
        <div>
            <ProfileInfo />
            <div>
            </div>
            <MyPostsContainer store={props.store} />
        </div >
    </div >
};
export default Profile;