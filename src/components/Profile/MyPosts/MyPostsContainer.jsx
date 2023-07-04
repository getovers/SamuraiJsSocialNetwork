import React from 'react';
import { addPostCreator, updatePostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext';

function MyPostsContainer(props) {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostCreator())
                }

                let onPostChange = (text) => {
                    store.dispatch(updatePostTextCreator(text));
                }

                return <MyPosts addPost={addPost} updatePostText={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
            }
            }
        </StoreContext.Consumer>)
}
export default MyPostsContainer;