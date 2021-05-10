import React from 'react';
import './Banner.css';
import starterImg from '../starterImg3.jpg';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${starterImg})`,
            backgroundPosition: 'center center',
        }}>

            <Typed
                strings={['Find All<br> Stories...', 'Find All<br> Articles...', 'Find All<br> Reviews...', 'Find Your<br> News...!']}
                typeSpeed={60}
                backSpeed={60}
                backDelay={1200}
                loop
                className="banner_TypeWriter"
                smartBackspace
            />
        </header>
    )
}

export default Banner
