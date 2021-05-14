import React from 'react'
import {Link} from 'react-router-dom';
import API_KEY from '../API_KEY';
import "./Tile.css";
const Tile = ({title, icon, color, type, link}) => {
    let linkStr = type+link+'&apiKey='+API_KEY;
    return (
        <Link to={`/result/${type}/${link}`} className={`tile ${color}`}>            
            <div className='tile_title'>
                <i className={`${icon}`}></i>&nbsp;{title}
                <p className='tile_description'></p>
            </div>
        </Link>
    )
}

export default Tile
