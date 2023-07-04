import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<Profile/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/dialogs/*' element={<DialogsContainer/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;