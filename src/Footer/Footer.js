import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <h1 className='footer_container_title'>
          News Ex<span className="footer_container_title_diffCol">press</span>
        </h1>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='footer_wavesvg'
      >
        <path
          fill='#a2d9ff'
          fill-opacity='1'
          d='M0,0L48,10.7C96,21,192,43,288,90.7C384,139,480,213,576,213.3C672,213,768,139,864,106.7C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};

export default Footer;
