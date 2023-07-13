import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props){
    return (
        <div>
            <ProfileInfo className={styles.profile} profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;