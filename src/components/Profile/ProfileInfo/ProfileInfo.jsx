import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from '../../../assets/images/users.png'
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    const [editMode, setEditMode] = useState(false)
    const submit = (formData, setStatus) => {
        saveProfile(formData, setStatus)
        setEditMode(false)
    }

    if (!profile) {
        return <Preloader />
    }
    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }


    }

    return <div>
        <div className={s.profileItem}>

            <div className={s.profileAvatar}>
                <img src={profile.photos.small || userPhoto}></img>
                <div className={s.profileStatus}>
                    <b>Status</b> :  <ProfileStatus updateStatus={updateStatus} status={status} isOwner={isOwner} />
                </div>
                <div className={s.addFotoForm}>{isOwner && <input type='file' onChange={onPhotoSelected} />}</div>
            </div>
            <div className={s.profileInfo}>

                {editMode
                    ? <ProfileDataForm profile={profile} submit={submit} saveProfile={saveProfile} />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />
                }

            </div>

        </div>
    </div >
};

const Contact = ({ contactTitle, contactValue }) => {
    return <div >
        <b>{contactTitle}</b> : {contactValue}
    </div>
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <>
        {isOwner && <div><button onClick={() => goToEditMode()}>Edit</button></div>}
        <div >
            <b>Full name</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b> :    {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            {profile.lookingForAJob ? <div> <b>My professional skills</b> : {profile.lookingForAJobDescription}</div> : null}
        </div>
        <div>
            <b>About me</b> : {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                return <Contact className={s.profileInfoContacts} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </>
}


export default ProfileInfo;