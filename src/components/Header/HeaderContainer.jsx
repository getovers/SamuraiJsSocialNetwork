import { useEffect } from "react";
import Header from "./Header";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";

function HeaderContainer(props){
    useEffect(() => {
        props.getAuthUserData()
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
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);