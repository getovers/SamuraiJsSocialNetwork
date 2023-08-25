import { useEffect, useState } from "react";
import styles from './ProfileStatus.module.css'

function ProfileStatus(props) {
    const [isEditMode, setEditMode] = useState(false)
    const [userStatus, setUserStatus] = useState(props.status)
    
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        if(userStatus !== props.status) {
            props.updateUserStatus(userStatus)
        }
    }
    const onStatusChange = (e) => {
        setUserStatus(e.currentTarget.value)
    }
    
    useEffect(() => {
        setUserStatus(props.status)
    }, [props.status]);

    return (
        <>
        {/* <div className={styles.bold}>My status: </div> */}
            {isEditMode ?
                <div>
                    <span className={styles.bold}>Status: </span>
                    <input onChange={onStatusChange} type="text" value={userStatus} onBlur={deactivateEditMode} autoFocus/>
                </div>
                :
                <div>
                    <span className={styles.bold}>Status: </span>
                    <span onDoubleClick={activateEditMode} >{props.status ? props.status : '---'}</span>
                </div>
            }
        </>
    )
}

export default ProfileStatus;