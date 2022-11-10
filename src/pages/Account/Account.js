import React, { useState } from 'react'
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

    return (
        <div className='Account'>
            <NavBar />

            <div className='account-container content'>
                <div className='account-side-bar'>
                    <button className = {selectedTab !== 1 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                            onClick={() => setSelectedTab(1)}>
                        <ImProfile className='account-side-bar-icon' />
                        Hồ sơ
                    </button>
                    <button className = {selectedTab !== 2 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                            onClick={() => setSelectedTab(2)}>
                        <AiOutlineHome className='account-side-bar-icon' />
                        Cửa hàng
                    </button>
                    <button className = {selectedTab !== 3 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                            onClick={() => setSelectedTab(3)}>
                        <RiBillLine className='account-side-bar-icon' />
                        Đơn mua
                    </button>
                    <button className = {selectedTab !== 4 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                            onClick={() => setSelectedTab(4)}>
                        <MdOutlineSell className='account-side-bar-icon' />
                        Đơn bán
                    </button>
                    <button className = {selectedTab !== 5 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                            onClick={() => setSelectedTab(5)}>
                        <MdManageAccounts className='account-side-bar-icon' />
                        Tài khoản
                    </button>
                    <button className = {selectedTab !== 6 ? 'account-side-bar-button' : 'account-side-bar-button account-tab-active'}
                            onClick={() => setSelectedTab(6)}>
                        <MdLogout className='account-side-bar-icon' />
                        Đăng xuất
                    </button>
                </div>
                {selectedTab === 1 && <ProfileTab />}
                {selectedTab === 2 && <StoreTab />}
                {selectedTab === 3 && <BuyOrdersTab />}
                {selectedTab === 4 && <SellOrdersTab />}
                {selectedTab === 5 && <AccountManagement />}
            </div>

            <Footer />
        </div>
    )
}

export default Account