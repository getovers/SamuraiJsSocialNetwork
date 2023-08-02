import { Field } from "redux-form";

function LoginForm (props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/* <label htmlFor="">Login</label> */}
                <Field type="text" placeholder="login" name="login" component={"input"}/>
            </div>
            <div>
                {/* <label htmlFor="">Password</label> */}
                <Field type="password" name="password" placeholder="password" component={"input"}/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={"input"}/>
                <label htmlFor="">remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;