import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

function MyPosts(props) {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />)

    let onAddPost = (formData) => {
        props.addPost(formData.newPostText);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
AddNewPostForm = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;