import React from 'react';
import './Home.css';

import NavBar from '../../components/NavBar';
import Categories from '../../components/Categories';
import PopularProduct from '../../components/PopularProduct';
import Recommend from '../../components/Recommend'

import banner from '../../assets/images/5323800.jpg';

function Home() {
    return (
        <div className='Home'>
            <NavBar />
            <img src={banner} className='home-banner' alt=''/>
            <Categories />
            <PopularProduct />
            <Recommend />
        </div>
    )
}

export default Home;