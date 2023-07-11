import styles from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../photos/userPhoto.png'
import React from 'react'

class Users extends React.Component {

    constructor(props){
        super(props);
        axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
    }

    render() {
        return <div className={styles.wrapper}>
            {
                this.props.users.map(u => <div key={u.id} className={styles.userBlock}>
                    <div className={styles.avatarContainer}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </div>
                    <div className={styles.userDescription}>
                        <div className={styles.mainInfoBlock}>
                            <div className={styles.fullName}>{u.name}</div>
                            {/* <div>{u.status}</div> */}
                        </div>
                        <div className={styles.locationInfoBlock}>
                            {/* <div>{u.location.country},</div>
                        <div>{u.location.city}</div> */}
                        </div>
                    </div>
                    <div>
                        {u.followed
                            ? <button className={styles.followBtn} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button className={styles.followBtn} onClick={() => { this.props.follow(u.id) }}>Follow</button>
                        }
                    </div>
                </div>)
            }
        </div>
    }

}
export default Users;