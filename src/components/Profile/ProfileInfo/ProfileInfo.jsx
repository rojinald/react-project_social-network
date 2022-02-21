import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return <div>
        <div className={s.profileItem}>

            <div className={s.profileAvatar}>
                <img src={profile.photos.large}></img>
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