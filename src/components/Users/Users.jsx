import styles from './Users.module.css'

function Users(props) {
    if(props.users.length === 0){
        props.setUsers([
            {id: 1, photoUrl: 'https://img.freepik.com/free-icon/user_318-159711.jpg', followed: true, fullName: "Vlad K.", status: "i am ukrainian", location:{country: 'Ukraine', city: 'Lutsk'}},
            {id: 2, photoUrl: 'https://img.freepik.com/free-icon/user_318-159711.jpg', followed: false, fullName: "Den K.", status: "hey hey hey", location:{country: 'Ukraine', city: 'Lviv'}},
            {id: 3, photoUrl: 'https://img.freepik.com/free-icon/user_318-159711.jpg', followed: true, fullName: "Maks K.", status: "i am ukrainian too", location:{country: 'Ukraine', city: 'Kiev'}}
        ])
    }
    return <div className={styles.wrapper}>
        {
            props.users.map(u => <div key={u.id} className={styles.userBlock}>
                <div className={styles.avatarContainer}>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div className={styles.userDescription}>
                    <div className={styles.mainInfoBlock}>
                        <div className={styles.fullName}>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={styles.locationInfoBlock}>
                        <div>{u.location.country},</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
                <div>
                    {u.followed 
                    ? <button className={styles.followBtn} onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                    : <button className={styles.followBtn} onClick={()=>{props.follow(u.id)}}>Follow</button>
                    }
                </div>
            </div>)
        }
    </div>
}
export default Users;