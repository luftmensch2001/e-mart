import React, {useState} from 'react';
import './NavBar.css';

import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

function NavBar() {
    const [wishlistCount, setWishlistCount] = useState(8);
    const [cartCount, setCartCount] = useState(1);

    return (
        <div className='NavBar'>
            <div className='content navbar-container'>
                <span className='navbar-logo'>E-<span className='navbar-logo-green'>Mart</span></span>
                <div className='navbar-search-container'>
                    <select className='navbar-category-select'>
                        <option>Tất cả danh mục</option>
                        <option>Quần áo nam</option>
                        <option>Quần áo nữ</option>
                        <option>Sức khoẻ</option>
                    </select>
                    <input className='navbar-search-input' placeholder='Tìm kiếm sản phẩm'/>
                    <AiOutlineSearch className='navbar-search-icon'/>
                </div>
                <div className='navbar-controller'>
                    <div className='navbar-controller-item'>
                        <AiOutlineHeart className='navbar-controller-icon'/>
                        { wishlistCount > 0 && <p className='navbar-controller-count'>{wishlistCount}</p>}
                    </div>
                    <div className='navbar-controller-item'>
                        <AiOutlineShoppingCart className='navbar-controller-icon' />
                        { cartCount > 0 && <p className='navbar-controller-count'>{cartCount}</p>}
                    </div>
                    <div className='navbar-controller-item'>
                        <AiOutlineUser className='navbar-controller-icon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;