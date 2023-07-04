import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';


function Dialogs(props) {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)
    
    let sendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateMessageText(text);
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div className={styles.sendBox}>
                    <textarea placeholder="Enter your message" onChange={onMessageChange} value={props.newMessageText}></textarea>
                    <div className={styles.buttonArea}>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Dialogs;