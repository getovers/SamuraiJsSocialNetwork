import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props){
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;