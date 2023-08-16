import { NavLink } from 'react-router-dom';
import userPhoto from '../../photos/userPhoto.png'
import styles from './Users.module.css'

function User({ user, followingInProgress, unfollow, follow, ...props }) {
    return (
        <div key={user.id} className={styles.userBlock}>
            <div className={styles.avatarContainer}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                </NavLink>
            </div>
            <div className={styles.userDescription}>
                <div className={styles.mainInfoBlock}>
                    <div className={styles.fullName}>{user.name}</div>
                </div>
                <div className={styles.locationInfoBlock}>
                </div>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} className={styles.followBtn} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} className={styles.followBtn} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>
                }
            </div>
        </div>
    )
}

export default User;