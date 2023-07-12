import userPhoto from '../../photos/userPhoto.png'
import styles from './Users.module.css'

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

        let currentPage = props.currentPage;
        let currentPageFirst = ((currentPage - 5) < 0) ?  0  : currentPage - 5 ;
        let currentPageLast = currentPage + 5;
        let slicedPages = pages.slice(currentPageFirst, currentPageLast);
        
    return (
        <div className={styles.wrapper}>
            <div className={styles.panel}>
                {slicedPages.map((p) => {
                    return <div key={p} className={props.currentPage === p ? styles.selectedPage : undefined} onClick={() => { props.onPageChange(p) }}>{p}</div>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id} className={styles.userBlock}>
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
                            ? <button className={styles.followBtn} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button className={styles.followBtn} onClick={() => { props.follow(u.id) }}>Follow</button>
                        }
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;