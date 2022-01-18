import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus";







const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        {/*     <div >
            <img className={s.profileCover} src='https://oboi.ws/wallpapers/28_6867_oboi_travjanoj_zakat_2560x1024.jpg'></img>
        </div> */}

        <div className={s.profileItem}>

            <div className={s.profileAvatar}>
                <img src={props.profile.photos.large}></img>
            </div>
            <div className={s.profileInfo}>
                <ProfileStatus updateStatus={props.updateStatus} status={props.status} />
                <div className={s.profileName}>
                    {props.profile.fullName}
                </div>
                <div className={s.profileStatus}>
                    {props.profile.aboutMe}
                </div>
                <div className={s.profileJob}>
                    {props.profile.lookingForAJobDescription}
                </div>
                <div className={s.profileSocialNetwork}>
                    {props.profile.contacts.vk}
                </div>
            </div>
        </div>
    </div >
};
export default ProfileInfo;