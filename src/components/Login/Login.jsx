import LoginForm from "./LoginForm/LoginForm";
import { connect } from 'react-redux'
import { login, logout} from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "./Login.module.css"

function Login(props) {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }

    if(props.isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <div className={style.wrapper}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login);