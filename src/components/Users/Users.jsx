import styles from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import User from './User';


function Users({ currentPage, onPageChange, totalUsersCount, pageSize, ...props }) {
    return (
        <div className={props.isFetching ? styles.hide : styles.wrapper}>
            <Paginator currentPage={currentPage} onPageChange={onPageChange} totalUsersCount={totalUsersCount}
                pageSize={pageSize} />
            {
                props.users.map(u => <User key={u.id} user={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow} follow={props.follow} />)
            }
        </div>
    );
}

export default Users;