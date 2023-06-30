import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile state={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>} />
            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>} />
            <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;