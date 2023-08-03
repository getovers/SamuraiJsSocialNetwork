import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import styles from './AddMessageForm.module.css'
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

function AddMessageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.sendBox}>
                <Field placeholder="Enter your message" name="newMessageText" component={Textarea} validate={[required, maxLength50]}/>
                {/* <textarea placeholder="Enter your message" onChange={onMessageChange} value={state.newMessageText}></textarea> */}
                <div className={styles.buttonArea}>
                    <button>Send</button>
                </div>
            </div>
        </form>

    )
}

AddMessageForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default AddMessageForm;