import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: "Hello world", likesCount: 6},
  {id: 2, message: "it's my first react project", likesCount: 15},
  {id: 3, message: "i am so interested in thisproject", likesCount: 8}
]

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
