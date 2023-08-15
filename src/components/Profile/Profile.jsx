import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props){
    return (
        <div>
            <ProfileInfo profile={props.profile} userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;