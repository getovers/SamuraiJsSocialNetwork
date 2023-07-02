const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                let newPost = {
                    id: 4,
                    message: state.newPostText,
                    likesCount: 0
                };
                state.posts.push(newPost);
                state.newPostText = '';
            }
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostCreator = () => ({ type: ADD_POST });
export const updatePostTextCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text });

export default profileReducer;