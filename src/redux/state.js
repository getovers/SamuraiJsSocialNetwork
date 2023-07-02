const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello world", likesCount: 6 },
        { id: 2, message: "it's my first react project", likesCount: 15 },
        { id: 3, message: "i am so interested in this", likesCount: 8 }
      ],
      newPostText: ''
    },
    dialogsPage: {
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
  },
  _callSubscriber() {
    console.log("State changed")
  },

  get state() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      if (this._state.profilePage.newPostText) {
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
      }
    }
    else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === SEND_MESSAGE) {
      let newMessageText = this._state.dialogsPage.newMessageText;
      if (newMessageText) {
        let newMessage = {
          id: 3,
          message: newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
      }
    }
    else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state)
    }
  }
}
export const addPostCreator = () => ({ type: ADD_POST });
export const updatePostTextCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text });
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageTextCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newText: text })


export default store;