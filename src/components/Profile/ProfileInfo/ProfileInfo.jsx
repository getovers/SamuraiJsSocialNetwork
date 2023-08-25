import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css'
import userPhoto from '../../../photos/userPhoto.png'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { useEffect, useState } from 'react';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import ProfileData from './ProfileData/ProfileData';

function ProfileInfo({profile, isOwner, saveProfile, updateUserStatus, userStatus, ...props}) {
    const [isEditMode, setIsEditMode] = useState(false)

    useEffect(()=>{
        if(props.isProfileSaved) {setIsEditMode(false)}
    }, [props.isProfileSaved, profile])

    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.wallpaper}>
                <img src='https://t4.ftcdn.net/jpg/02/12/41/71/360_F_212417151_hyKX9yamqlBlOEYeS1eKWtD6WJSx0YGY.jpg' alt="" />
            </div>

            <div className={styles.descriptionBlock}>
                <div className={styles.avatar}>
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto} />
                </div>
                <div className={styles.infoBlock}>
                    {isEditMode ? <ProfileDataForm initialValues={profile}  profile={profile} onSubmit={onSubmit}/> : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() =>{ setIsEditMode(true) }} userStatus={userStatus} updateUserStatus={updateUserStatus} onMainPhotoSelected={onMainPhotoSelected}/>}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;