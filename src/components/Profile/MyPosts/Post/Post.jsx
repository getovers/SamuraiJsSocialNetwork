import styles from './Post.module.css'

function Post(props) {
    return (
        <div>
            <div className={styles.backgroundLogo}></div>
            <div className={styles.item}>{props.message}
                <div>{props.likesCount} like</div>
                <br />
            </div>
        </div>
    );
}
export default Post;