import React from 'react'
import './AccountManagement.css'
import accountImg from '../../assets/images/illustrations/undraw_Access_account_re_8spm.png'
import avatar from '../../assets/images/avatar.jpg'

function AccountManagement() {
    return (
        <div className='AccountManagement'>
            <img className='account-img' src={accountImg}/>
            <div className='account-info'>
                <div className='account-head'>
                    <img className='account-avatar' src={avatar}/>  
                    <span className='account-name'>Trần Văn Mèo</span>
                </div>
                <div className='account-change-container'>
                    <div className='account-change-item'>
                        <label for='username'>Tên đăng nhập</label>
                        <input className='accout-input' type='text' value='tranvanmeo' disabled='disabled' id='username'/> 
                    </div>
                    <div className='account-change-item'>
                        <label for='password'>Mật khẩu hiện tại</label>
                        <input className='accout-input' type='password' id='password' placeholder='Nhập mật khẩu hiện tại'/> 
                    </div>
                    <div className='account-change-item'>
                        <label for='new-password'>Mật khẩu mới</label>
                        <input className='accout-input' type='password' id='new-password' placeholder='Nhập mật khẩu mới'/> 
                    </div>
                    <div className='account-change-item'>
                        <label for='re-new-password'>Nhập lại mật khẩu mới</label>
                        <input className='accout-input' type='password' id='re-new-password' placeholder='Nhập lại mật khẩu mới'/> 
                    </div>
                </div>
                <button className='change-password-button primary-button'>Đổi mật khẩu</button>
            </div>
        </div>
    )
}

export default AccountManagement