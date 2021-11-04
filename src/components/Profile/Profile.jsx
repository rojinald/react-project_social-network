import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return <div>
        <div>
            <ProfileInfo />
            <div>
            </div>
            <MyPosts posts={props.posts} />
        </div >
    </div >
};
export default Profile;