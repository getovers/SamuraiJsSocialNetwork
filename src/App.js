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
            <Route path='/' element={<Profile posts={props.posts}/>} />
            <Route path='/profile' element={<Profile posts={props.posts}/>} />
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;