import React from 'react';
import { sendMessageCreator, updateMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


function DialogsContainer(props) {
    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateMessageTextCreator(text))
    }

    return <Dialogs sendMessage={sendMessage} updateMessageText={onMessageChange} newMessageText={state.newMessageText} dialogsPage={state}/>
}

export default DialogsContainer;