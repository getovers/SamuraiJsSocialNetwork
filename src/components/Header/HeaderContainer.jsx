import { useEffect } from "react";
import Header from "./Header";
import styles from "./Header.module.css";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";

function HeaderContainer(props){
    useEffect(() => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if(response.data.resultCode == 0){
                    let {id, email, login} = response.data.data;
                    props.setAuthUserData(id, email, login);
                }
            })
    }) 
        
    return (
        <Header {...props} />
    );
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);