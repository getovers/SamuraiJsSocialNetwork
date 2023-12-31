import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <HashRouter>  {/* used hashRouter for gh-pages */}
      {/* <React.StrictMode> */}
        <Provider store={store}>
          <App />
        </Provider>
      {/* </React.StrictMode> */}
    </HashRouter>
  );

// rerenderEntireTree(store.getState())
// store.subscribe(() => {
//   let state = store.getState();         //for Redux(previous code, where app needed state)
//   rerenderEntireTree(state)
// });


// rerenderEntireTree(store.getState())
// store.subscribe(rerenderEntireTree) // for simple store
// rerenderEntireTree(store.getState())


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



