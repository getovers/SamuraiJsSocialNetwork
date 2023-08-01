import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    posts: [
        { id: 1, message: "Hello world", likesCount: 6 },
        { id: 2, message: "it's my first react project", likesCount: 15 },
        { id: 3, message: "i am so interested in this", likesCount: 8 }
    ],
    newPostText: '',
    profile: null,
    userStatus: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                let newPost = {
                    id: 4,
                    message: state.newPostText,
                    likesCount: 0
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            }
        default:
            return state;
    }
}
export const addPostCreator = () => ({ type: ADD_POST });
export const updatePostTextCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setUserStatus = (userStatus) => ({ type: SET_USER_STATUS, userStatus });


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}

export default profileReducer;