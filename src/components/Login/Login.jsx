import LoginForm from "./LoginForm/LoginForm";
import { connect } from 'react-redux'
import { login, logout} from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

function Login(props) {
    const onSubmit = (formData) => {
        console.log(formData)
        let {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }

    if(props.isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login);