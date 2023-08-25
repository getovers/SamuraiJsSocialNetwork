import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST'

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
const SET_IS_PROFILE_SAVED_AFTER_CHANGES = 'SET-IS-PROFILE-SAVED-AFTER-CHANGES';


let initialState = {
    posts: [
        { id: 1, message: "Hello world", likesCount: 6 },
        { id: 2, message: "it's my first react project", likesCount: 15 },
        { id: 3, message: "i am so interested in this", likesCount: 8 }
    ],
    profile: null,
    userStatus: '',
    isProfileSaved: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SET_IS_PROFILE_SAVED_AFTER_CHANGES:
            return {
                ...state,
                isProfileSaved: action.isProfileSaved
            }
        default:
            return state;
    }
}
export const addPostCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setUserStatus = (userStatus) => ({ type: SET_USER_STATUS, userStatus });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const saveProfileSuccess = (isProfileSaved) => ({ type: SET_IS_PROFILE_SAVED_AFTER_CHANGES, isProfileSaved });


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile);

    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId))
        dispatch(saveProfileSuccess(true))
    }
    else if(response.resultCode === 1) {
        dispatch(saveProfileSuccess(false))
        let message = response.messages.length ? response.messages[0] : "Some error"
        dispatch(stopSubmit("edit-profile", { _error: message }))
    }
}

export default profileReducer;