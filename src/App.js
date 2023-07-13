import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<ProfileContainer/>} />
          <Route path='/profile/:userId?' element={<ProfileContainer/>} />
          <Route path='/dialogs/*' element={<DialogsContainer/>} />
          <Route path='/users' element={<UsersContainer/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;