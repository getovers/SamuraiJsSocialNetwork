import styles from './Post.module.css'

function Post(props){
    return (
        <div className={styles.item}>{props.message}
        <div>{props.likesCount} like</div>
        <br />
        </div>
    );
}
export default Post;