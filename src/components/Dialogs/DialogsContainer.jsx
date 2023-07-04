import React from 'react';
import { sendMessageCreator, updateMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


function DialogsContainer(props) {


    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsPage;

                let sendMessage = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onMessageChange = (text) => {
                    store.dispatch(updateMessageTextCreator(text))
                }
                return <Dialogs sendMessage={sendMessage} updateMessageText={onMessageChange} newMessageText={state.newMessageText} dialogsPage={state} />
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;