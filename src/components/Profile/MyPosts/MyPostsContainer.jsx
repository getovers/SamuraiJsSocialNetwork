import { connect } from 'react-redux';
import { addPostCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts'

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost(newPostText) {
            dispatch(addPostCreator(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

//previous code
// function MyPostsContainer(props) {

//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostCreator())
//                 }

//                 let onPostChange = (text) => {
//                     store.dispatch(updatePostTextCreator(text));
//                 }

//                 return <MyPosts addPost={addPost} updatePostText={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
//             }
//             }
//         </StoreContext.Consumer>)
// }

export default MyPostsContainer;