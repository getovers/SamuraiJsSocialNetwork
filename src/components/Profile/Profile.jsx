import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props){
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;