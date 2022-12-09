import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import background from '../../assets/images/background/1_auto_x2.jpg'

function Login() {
    return (
        <div className='Login'>
            <div className='login-card'>
                <span className='title-text login-logo'>E-<span className='green-text'>Mart</span></span>
                <p className='login-head-text'>Đăng nhập và thoả sức mua sắm</p>
                <input className='login-input' type='text' placeholder='Số điện thoại / E-mail / Tên đăng nhập' /> 
                <input className='login-input' type='password' placeholder='Mật khẩu' /> 
                <a className='login-forgot-pass-link' href='#'>Quên mật khẩu ?</a>
                <Link to='/'>
                    <button className='login-button primary-button'>Đăng Nhập</button>
                </Link>
                <span className='login-second-text'>Bạn chưa có tài khoản ? 
                    <Link to='/register'>
                        <span className='login-bold-text'> Đăng ký ngay</span>
                    </Link>
                </span> 
            </div>
        </div>
    )
}

export default Login