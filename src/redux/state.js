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
    messagesPage: {
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
  },
  _callSubscriber() {
    console.log("State changed")
  },

  get state(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  addPost() {
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
  },
  updatePostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  }
}

export default store;