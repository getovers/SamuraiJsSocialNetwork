import Profile from "./Profile";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function ProfileContainer(props) {
    let { userId } = useParams(); //деструктиризація об'єкта
    if (!userId) {
        userId = 29552
    }

    useEffect(() => {
        props.getUserProfile(userId)
        props.getUserStatus(userId)
    }, [userId]);

    return (
        <Profile profile={props.profile} userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
    );
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withAuthRedirect
)(ProfileContainer)