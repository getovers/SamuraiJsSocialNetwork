import Contact from '../Contact/Contact'
import ProfileStatus from '../ProfileStatus/ProfileStatus'
import styles from './ProfileData.module.css'

function ProfileData({profile, isOwner, activateEditMode, userStatus, updateUserStatus, onMainPhotoSelected}) {
    return <div>
        <div>
            <h3>{profile.fullName}</h3>
        </div>
        {isOwner && <div><button onClick={activateEditMode}>Edit profile</button></div>}
        <div>
            <ProfileStatus status={userStatus} updateUserStatus={updateUserStatus} />
            {isOwner && <div><span className={styles.bold}>Змінити аватарку </span><input type='file' onChange={onMainPhotoSelected} /></div>}
            <div className={styles.bold}>About me:</div>
            <span>{profile.aboutMe}</span>
            <div><span className={styles.bold}>Looking for a job: </span>{profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div>
                {profile.lookingForAJob ? `My professional skills: ${profile.lookingForAJobDescription}` : null}
            </div>
        </div>
        <div>
            <span className={styles.bold}>My contacts: </span>
            {Object.keys(profile.contacts).map(key => { return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> })}
        </div>
    </div>
}

export default ProfileData