import React, { useEffect, useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import './Account.css'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

import ProfileTab from './ProfileTab'
import StoreTab from './StoreTab'
import BuyOrdersTab from './BuyOrdersTab'
import SellOrdersTab from './SellOrdersTab'
import AccountManagement from './AccountManegement'

import { ImProfile } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineSell, MdManageAccounts, MdLogout } from "react-icons/md";

function Account(props) {
    const [selectedTab, setSelectedTab] = useState(props.tabIndex);
    const location = useLocation();
    
    useEffect(() => {
        if (location.pathname == '/account/profile') setSelectedTab(1); else
        if (location.pathname == '/account/store') setSelectedTab(2); else
        if (location.pathname == '/account/buy-orders') setSelectedTab(3); else
        if (location.pathname == '/account/sell-orders') setSelectedTab(4); else
        if (location.pathname == '/account/account-management') setSelectedTab(5);
    }

    );

    return (
        <div className='Account'>
            <div className='account-container content'>
                <div className='account-side-bar'>
                    <Link to='/account/profile'>
                        <button className = {selectedTab !== 1 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                                onClick={() => setSelectedTab(1)}>
                            <ImProfile className='account-side-bar-icon' />
                            Hồ sơ
                        </button>
                    </Link>
                    <Link to='/account/store'>
                        <button className = {selectedTab !== 2 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                                onClick={() => setSelectedTab(2)}>
                            <AiOutlineHome className='account-side-bar-icon' />
                            Cửa hàng
                        </button>                       
                    </Link>
                    <Link to='/account/buy-orders'>
                        <button className = {selectedTab !== 3 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                                onClick={() => setSelectedTab(3)}>
                            <RiBillLine className='account-side-bar-icon' />
                            Đơn mua
                        </button>
                    </Link>
                    <Link to='/account/sell-orders'>
                        <button className = {selectedTab !== 4 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                                onClick={() => setSelectedTab(4)}>
                            <MdOutlineSell className='account-side-bar-icon' />
                            Đơn bán
                        </button>
                    </Link>
                    <Link to='/account/account-management'>
                        <button className = {selectedTab !== 5 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                                onClick={() => setSelectedTab(5)}>
                            <MdManageAccounts className='account-side-bar-icon' />
                            Tài khoản
                        </button>
                    </Link>

                    <button className = {selectedTab !== 6 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                            onClick={() => setSelectedTab(6)}>
                        <MdLogout className='account-side-bar-icon' />
                        Đăng xuất
                    </button>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Account