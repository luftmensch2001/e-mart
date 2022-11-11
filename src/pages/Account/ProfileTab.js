import {React, useState} from 'react'
import { toast } from 'react-toastify';
import './ProfileTab.css'

import cover from '../../assets/images/cover.jpg'
import avatar from '../../assets/images/avatar.jpg'

import { AiOutlineCamera } from 'react-icons/ai';


function notifyReadOnly() {
    toast.warn('Không thể sửa tên đăng nhập!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

function saveInfo() {
    toast.success('Lưu thông tin thành công!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

function ProfileTab() {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div className='ProfileTab'>
            <img alt='' className='profile-cover-img' src={cover}/>
            <div className='profile-container'>
                <img alt='' className='profile-avatar-img' src={avatar} />
                <button className='profile-change-cover-button'>
                    <AiOutlineCamera className='profile-change-cover-icon'/>
                </button>
                <span className='profile-name'>Trần Văn Mèo</span>
                <div className='profile-left'>
                    <p className='profile-left-label'>Tên đăng nhập</p>
                    <p className='profile-left-label'>Họ và tên</p>
                    <p className='profile-left-label'>Địa chỉ E-mail</p>
                    <p className='profile-left-label'>Số điện thoại</p>
                    <p className='profile-left-label'>Thay đổi ảnh đại diện</p>
                </div>
                <div className='profile-right'>
                    <input className='profile-input profile-username-input' type='text' value='tranvanmeo' readOnly='readOnly' onClick={notifyReadOnly}/>
                    <input className='profile-input' type='text' value='Trần Văn Mèo'/>
                    <input className='profile-input' type='email' value='meotran@gmail.com'/>
                    <input className='profile-input' type='number' value='0905090782'/>
                    <div className='profile-change-avatar-container'>
                        {selectedImage && <img alt="not fount" className='profile-change-avatar-img' src={URL.createObjectURL(selectedImage)} /> }
                        <input
                            className='profile-upload-button'
                            type="file"
                            name="myImage"
                            onChange={(event) => {
                                setSelectedImage(event.target.files[0]);
                            }}
                        />   
                    </div>
                    <button className='profile-save-button primary-button' onClick={saveInfo}>Lưu thông tin</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileTab