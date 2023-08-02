import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import Login from '../Login/Login';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


function Dialogs(props) {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id}id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    
    let addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageText)
    }

    // if(!props.isAuth) return <Navigate to='/login' />

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


function AddMessageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.sendBox}>
                <Field placeholder="Enter your message" name="newMessageText" component="textarea"/>
                {/* <textarea placeholder="Enter your message" onChange={onMessageChange} value={state.newMessageText}></textarea> */}
                <div className={styles.buttonArea}>
                    <button>Send</button>
                </div>
            </div>
        </form>

    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;