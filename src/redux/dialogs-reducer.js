const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageText = action.newMessageText;
            if (newMessageText) {
                return {
                    ...state,
                    messages: [...state.messages, { id: 4, message: newMessageText }]
                };
            }
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default dialogsReducer;