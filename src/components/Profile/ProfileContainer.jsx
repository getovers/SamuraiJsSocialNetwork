import Profile from "./Profile";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function ProfileContainer(props) {
    let { userId } = useParams(); //деструктиризація об'єкта
    if (!userId) {
        userId = 10
    }

    useEffect(() => {
        props.getUserProfile(userId)
    }, [userId]);

    return (
        <Profile profile={props.profile}/>
    );
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect
)(ProfileContainer)