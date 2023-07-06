const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "Hello world", likesCount: 6 },
        { id: 2, message: "it's my first react project", likesCount: 15 },
        { id: 3, message: "i am so interested in this", likesCount: 8 }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText) {
                let newPost = {
                    id: 4,
                    message: state.newPostText,
                    likesCount: 0
                };
                let stateCopy = { ...state }
                stateCopy.posts = [...state.posts]
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;
            }
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const addPostCreator = () => ({ type: ADD_POST });
export const updatePostTextCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text });

export default profileReducer;