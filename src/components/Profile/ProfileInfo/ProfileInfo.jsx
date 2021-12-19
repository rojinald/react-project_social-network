import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"






const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    debugger;
    return <div>
        <div >
            <img className={s.profileCover} src='https://oboi.ws/wallpapers/28_6867_oboi_travjanoj_zakat_2560x1024.jpg'></img>
        </div>
        <div className={s.profileAvatar}>
            <img src={props.profile.photos.large}></img>
        </div>
    </div >
};
export default ProfileInfo;