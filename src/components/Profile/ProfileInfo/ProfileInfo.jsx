import s from "./ProfileInfo.module.css"
const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://oboi.ws/wallpapers/28_6867_oboi_travjanoj_zakat_2560x1024.jpg'></img>
        </div>
        <div className={s.profileAvatar}>
            <img src='https://i.pinimg.com/originals/61/52/40/6152408126fe3d5445c60af2f8474812.jpg'></img>
        </div>
    </div>
};
export default ProfileInfo;