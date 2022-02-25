import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from '../../../assets/images/users.png'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }
    const onPhotoSelected = (e) => {
        debugger;
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }

    }

    return <div>
        <div className={s.profileItem}>

            <div className={s.profileAvatar}>
                <img src={profile.photos.large || userPhoto}></img>
                <div>{isOwner && <input type='file' onChange={onPhotoSelected} />}</div>
            </div>
            <div className={s.profileInfo}>
                <ProfileStatus updateStatus={updateStatus} status={status} />
                <div className={s.profileName}>
                    {profile.fullName}
                </div>
                <div className={s.profileStatus}>
                    {profile.aboutMe}
                </div>
                <div className={s.profileJob}>
                    {profile.lookingForAJobDescription}
                </div>
                <div className={s.profileSocialNetwork}>
                    {profile.contacts.vk}
                </div>
            </div>

        </div>
    </div >
};
export default ProfileInfo;