import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/profile' element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} newMessageText={props.state.dialogsPage.newMessageText} dispatch={props.dispatch} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;