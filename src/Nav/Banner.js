import React from 'react';
import './Banner.css';
import starterImg from '../starterImg4.jpg';

const Banner = () => {
    return (
        <header className="banner" style={{
            backgroundSize:'cover',
            backgroundImage:`url(${starterImg})`,
            backgroundPosition:'center center', 
            }}>
        </header>
    )
}

export default Banner
