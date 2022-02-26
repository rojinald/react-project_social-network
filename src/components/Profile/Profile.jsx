import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";


const Profile = (props) => {
    return <div>
        <div>
            <ProfileInfo isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <div>
            </div>
            <MyPostsContainer store={props.store} />
        </div >
    </div >
};
export default Profile;