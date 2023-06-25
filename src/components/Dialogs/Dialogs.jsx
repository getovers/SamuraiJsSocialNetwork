import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs() {

    let dialogs =[
        {id:1, name: "Sasha"},
        {id:2, name: "Dima"},
        {id:3, name: "Olena"},
        {id:4, name: "Igor"},
        {id:5, name: "Misha"},
        {id:6, name: "Katya"}
    ]

    let messages = [
        {id:1, message: "Hello"},
        {id:2, message: "How are you?"},
        {id:3, message: "I'm fine thanks"},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
               { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;