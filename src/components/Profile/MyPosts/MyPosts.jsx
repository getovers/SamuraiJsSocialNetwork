import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updatePostText(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange} value={props.newPostText}/></div>
                <div>
                    <button onClick={onAddPost}>Send</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;