import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  }
}


export default store;