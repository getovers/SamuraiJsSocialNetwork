import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css'
import facebookLogo from '../../../photos/facebookLogo.png'
import userPhoto from '../../../photos/userPhoto.png'
import ProfileStatus from './ProfileStatus/ProfileStatus';

function ProfileInfo(props){
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.wallpaper}>
                <img src='https://t4.ftcdn.net/jpg/02/12/41/71/360_F_212417151_hyKX9yamqlBlOEYeS1eKWtD6WJSx0YGY.jpg' alt=""/>
            </div>
            
            <div className={styles.descriptionBlock}>
                <div className={styles.avatar}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
                </div>
                <div className={styles.infoBlock}>
                    <div>
                        <h3>{props.profile.fullName}</h3>
                    </div>
                    <ProfileStatus status="hey"/>
                    <div>
                        <div className={styles.bold}>About me:</div>
                        <span>{props.profile.aboutMe}</span>
                        <div className={styles.bold}>Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
                        <div>
                            {props.profile.lookingForAJob ? `Description: ${props.profile.lookingForAJobDescription}` : null}
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <span className={styles.bold}>My contacts: </span>
                        <div className={styles.contactsItem}>
                            <a href={ props.profile.contacts.facebook ? 'https://www.' + props.profile.contacts.facebook : null} target='_blank'>
                                <img src={props.profile.contacts.facebook != null ? facebookLogo : null} alt="" className={styles.contactsPhoto}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;