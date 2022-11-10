import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/LoginRegister/Login'
import Register from './pages/LoginRegister/Register'
import Account from './pages/Account/Account'

function App() {
  return (
    <div className="App">
        <Account tabIndex={1} />
    </div>
  );
}

export default App;
