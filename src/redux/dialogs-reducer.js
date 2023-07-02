const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageText = state.newMessageText;
            if (newMessageText) {
                let newMessage = {
                    id: 4,
                    message: newMessageText
                }
                state.messages.push(newMessage)
                state.newMessageText = ''
            }
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageTextCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newText: text })

export default dialogsReducer;