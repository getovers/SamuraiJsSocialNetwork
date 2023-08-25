import { reduxForm } from "redux-form";
import { Input, Textarea, createField } from "../../../common/FormsControls/FormsControls";
import profInfoStyles from '../ProfileInfo.module.css'
import formStyles from '../../../common/FormsControls/FormsControls.module.css'

function ProfileDataForm({ handleSubmit, profile, error }) {
    return <form onSubmit={handleSubmit}>
        {error && <div className={formStyles.formSummaryError}>{error}</div>}
        <div>
            <button>save changes</button>
        </div>
        <div>
            <span>Full name: </span> {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <span>Looking for a job </span> {createField('', 'lookingForAJob', [], Input, { type: "checkbox" })}
        </div>
        <div>
            <span>My professional skills: </span> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <span>About me: </span> {createField('About me', 'aboutMe', [], Textarea)}
        </div>
        <div className={profInfoStyles.contacts}>
            <span className={profInfoStyles.bold}>My contacts: </span>
            {Object.keys(profile.contacts).map(key => {
                return <div key={key} >
                    <span>{key}:</span>
                    {createField(key, 'contacts.' + key, [], Input)}
                </div>
            })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm)
export default ProfileDataReduxForm;