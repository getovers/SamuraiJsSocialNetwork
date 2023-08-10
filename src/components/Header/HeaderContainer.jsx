import Header from "./Header";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";

function HeaderContainer(props){
    
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
export default connect(mapStateToProps, { logout })(HeaderContainer);