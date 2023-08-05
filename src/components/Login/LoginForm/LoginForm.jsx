import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";
import style from './../../common/FormsControls/FormsControls.module.css'

const maxLength15 = maxLengthCreator(15);

function LoginForm (props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/* <label htmlFor="">Login</label> */}
                <Field type="text" placeholder="email" name="email" component={Input} validate={[required]}/>
            </div>
            <div>
                {/* <label htmlFor="">Password</label> */}
                <Field type="password" name="password" placeholder="password" component={Input} validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={Input} />
                <label htmlFor="">remember me</label>
            </div>
            { props.error && <div className={style.formSummaryError}>
               {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)
export default LoginForm;