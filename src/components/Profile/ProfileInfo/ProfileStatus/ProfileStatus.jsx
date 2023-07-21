import { useState } from "react";
import styles from './ProfileStatus.module.css'
function ProfileStatus(props) {
    const [isEditMode, setIsEditMode] = useState(false)

    let toggleEditMode = () => {
        setIsEditMode(!isEditMode)
    }
    return (
        <>
        <div className={styles.bold}>My status: </div>
            {isEditMode ?
                <div>
                    <input type="text" value={props.status} onBlur={toggleEditMode} autoFocus/>
                </div>

                :
                <div>
                    <span onDoubleClick={toggleEditMode} >{props.status}</span>
                </div>
            }


        </>
    )
}

export default ProfileStatus;