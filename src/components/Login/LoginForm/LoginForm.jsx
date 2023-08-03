import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";

const maxLength15 = maxLengthCreator(15);

function LoginForm (props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/* <label htmlFor="">Login</label> */}
                <Field type="text" placeholder="login" name="login" component={Input} validate={[required, maxLength15]}/>
            </div>
            <div>
                {/* <label htmlFor="">Password</label> */}
                <Field type="password" name="password" placeholder="password" component={Input} validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={Input} />
                <label htmlFor="">remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)
export default LoginForm;