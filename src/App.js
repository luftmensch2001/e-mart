import './App.css'
import {React, useState} from 'react'
import Home from './pages/Home/Home'
import Login from './pages/LoginRegister/Login'
import Register from './pages/LoginRegister/Register'
import Account from './pages/Account/Account'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet, Routes , Route } from 'react-router-dom'
import BuyOrdersTab from './pages/Account/BuyOrdersTab'
import SellOrdersTab from './pages/Account/SellOrdersTab'
import StoreTab from './pages/Account/StoreTab'
import ProfileTab from './pages/Account/ProfileTab'
import AccountManagement from './pages/Account/AccountManegement'

function App() {
  const [window, setWindow] = useState(1);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/account' element={<Account tabIndex={1}/>}>
          <Route path='/account/buy-orders' element={<BuyOrdersTab />}/>
          <Route path='/account/sell-orders' element={<SellOrdersTab />}/>
          <Route path='/account/store' element={<StoreTab/>}/>
          <Route path='/account/profile' element={<ProfileTab/>}/>
          <Route path='/account/account-management' element={<AccountManagement/>}/>
        </Route>
      </Routes>
      <Footer />      
    </div>
  );
}

export default App;
