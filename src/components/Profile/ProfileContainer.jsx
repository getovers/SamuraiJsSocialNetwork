import Profile from "./Profile";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";

function ProfileContainer(props) {

    let { userId } = useParams(); //деструктиризація об'єкта

    useEffect(() => {
        if (userId) {
            props.getUserProfile(userId)
            props.getUserStatus(userId)
        }
    }, [userId]);

    if (!userId) {
        userId = props.authorizedUserId
        if (!userId) {
            return <Navigate to='/login' />         //need to improve...
        }
    }

    return ( 
     <Profile isProfileSaved={props.isProfileSaved} isOwner={userId == props.authorizedUserId} profile={props.profile} userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
    );
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        isProfileSaved: state.profilePage.isProfileSaved
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile })
)(ProfileContainer)