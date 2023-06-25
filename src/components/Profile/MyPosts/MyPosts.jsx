import styles from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {

    let postData = [
        {id: 1, message: "Hello world", likesCount: 6},
        {id: 2, message: "it's my first react project", likesCount: 15},
        {id: 3, message: "i am so interested in thisproject", likesCount: 8}
    ]

    let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;