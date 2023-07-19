import Profile from "./Profile";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProfileContainer(props) {
    let { userId } = useParams(); //деструктиризація об'єкта
    if (!userId) {
        userId = 10
    }

    useEffect(() => {
        props.getUserProfile(userId)
    }, [userId]);

    if(!props.isAuth) return <Navigate to={'/login'} />

    return (
        <Profile profile={props.profile}/>
    );
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);