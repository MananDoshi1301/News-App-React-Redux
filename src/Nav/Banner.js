import React from 'react';
import './Banner.css';
import starterImg from '../starterImg4.jpg';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${starterImg})`,
            backgroundPosition: 'center center',
        }}>

            <Typed
                strings={['Find all Your<br> Stories', 'Find all Your<br> Articles', 'Find Your<br> News...!']}
                typeSpeed={60}
                backSpeed={50}
                backDelay={1200}
                // loop
                className="banner_TypeWriter"
                smartBackspace
            />
        </header>
    )
}

export default Banner
