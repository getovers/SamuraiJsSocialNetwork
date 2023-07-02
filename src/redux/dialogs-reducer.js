const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Olena" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Misha" },
        { id: 6, name: "Katya" }
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "I'm fine thanks" },
      ],
      newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
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