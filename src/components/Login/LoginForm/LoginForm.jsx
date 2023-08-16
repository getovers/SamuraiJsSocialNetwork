import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Input, createField } from "../../common/FormsControls/FormsControls";
import style from './../../common/FormsControls/FormsControls.module.css'

const maxLength15 = maxLengthCreator(15);

function LoginForm({ handleSubmit, error, ...props }) {
    return (
        <form onSubmit={handleSubmit}>
            {createField("email", "email", [required], Input)}
            {createField("password", "password", [required, maxLength15], Input, { type: "password" })}
            {createField(null, "rememberMe", null, Input, { type: "checkbox" }, "remember me")}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)
export default LoginForm;