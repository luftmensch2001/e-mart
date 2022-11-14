import './App.css'
import {React, useState} from 'react'
import Home from './pages/Home/Home'
import Login from './pages/LoginRegister/Login'
import Register from './pages/LoginRegister/Register'
import Account from './pages/Account/Account'

function App() {
  const [window, setWindow] = useState(1);
  return (
    <div className="App">
      {window == 1 && <Login />}
      {window == 2 && <Register />}
      {window == 3 && <Home />}
      {window == 4 && <Account tabIndex={1} />}
            
      <button className='primary-button' onClick={() => setWindow(1)}>Login</button>
      <button className='primary-button' onClick={() => setWindow(2)}>Register</button>
      <button className='primary-button' onClick={() => setWindow(3)}>Home</button>
      <button className='primary-button' onClick={() => setWindow(4)}>Account</button>
    </div>
  );
}

export default App;
