import React from 'react'
import "./Nav.css"
import appLogo from '../appLogo.png'


const Nav = () => {
    return (
        <div className="nav">
            <img className="nav_logo"
            src={appLogo} alt="" />            
        </div>
    )
}

export default Nav
