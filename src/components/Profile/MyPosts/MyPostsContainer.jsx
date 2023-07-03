import React from 'react';
import { addPostCreator, updatePostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts'

function MyPostsContainer(props) {
    let state = props.store.getState();
    
    let addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updatePostTextCreator(text));
    }

    return (<MyPosts addPost={addPost} updatePostText={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>)
}
export default MyPostsContainer;