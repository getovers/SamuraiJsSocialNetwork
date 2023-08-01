import { useEffect, useState } from "react";
import styles from './ProfileStatus.module.css'
import { updateUserStatus } from "../../../../redux/profile-reducer";
function ProfileStatus(props) {
    const [isEditMode, setEditMode] = useState(false)
    const [userStatus, setUserStatus] = useState(props.status)
    
    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(userStatus)
    }
    let onStatusChange = (e) => {
        setUserStatus(e.currentTarget.value)
    }
    
    useEffect(() => {
        setUserStatus(props.status)
    }, [props.status]);

    return (
        <>
        <div className={styles.bold}>My status: </div>
            {isEditMode ?
                <div>
                    <input onChange={onStatusChange} type="text" value={userStatus} onBlur={deactivateEditMode} autoFocus/>
                </div>

                :
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status ? props.status : '---'}</span>
                </div>
            }


        </>
    )
}

export default ProfileStatus;