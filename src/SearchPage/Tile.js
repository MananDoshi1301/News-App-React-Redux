import React from 'react'
import "./Tile.css";
const Tile = ({title, icon, color}) => {
    return (
        <div className={`tile ${color}`}>            
            <div className='tile_title'>
                <i className={`${icon}`}></i>&nbsp;{title}
                <p className='tile_description'></p>
            </div>
        </div>
    )
}

export default Tile
