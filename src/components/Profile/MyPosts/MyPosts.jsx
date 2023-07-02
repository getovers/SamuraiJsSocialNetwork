import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostCreator, updatePostTextCreator } from '../../../redux/profile-reducer';

function MyPosts(props) {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let addPost = () => {
        props.dispatch(addPostCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostTextCreator(text));
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange} value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;