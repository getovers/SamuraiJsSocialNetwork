import axios from "axios";
import Profile from "./Profile";
import React, {useEffect} from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

function ProfileContainer (props){
    let {userId} = useParams(); //деструктиризація об'єкта

    if(!userId){
        userId = 10
    }

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                props.setUserProfile(response.data)
            })
    }, [userId]);

    return (
        <Profile profile={props.profile}/>
    );
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
}
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);