import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import background from '../../assets/images/background/1_auto_x2.jpg'

function Register() {
    return (
        <div className='Register'>
            <div className='register-card'>
                <span className='title-text register-logo'>E-<span className='green-text'>Mart</span></span>
                <p className='register-head-text'>Đăng ký và thoả sức mua sắm ngay</p>
                <input className='register-input' type='text' placeholder='Họ và tên' /> 
                <input className='register-input' type='email' placeholder='Địa chỉ E-mail'/> 
                <input className='register-input' type='number' placeholder='Số điện thoại'/> 
                <input className='register-input' type='text' placeholder='Tên đăng nhập' /> 
                <input className='register-input' type='password' placeholder='Mật khẩu' /> 
                <input className='register-input' type='password' placeholder='Nhập lại mật khẩu' /> 
                <Link to='/'>
                    <button className='register-button primary-button'>Đăng Ký</button>
                </Link>
                <span className='register-second-text'>Bạn đã có tài khoản ? 
                    <Link to='/login'>
                        <span className='register-bold-text'> Đăng nhập ngay</span>
                    </Link>
                </span> 
            </div>
        </div>
    )
}

export default Register