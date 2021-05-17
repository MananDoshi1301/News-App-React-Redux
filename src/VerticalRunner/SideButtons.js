import React from 'react'
import './SideButtons.css'
import { topDetails } from '../data';
import API_KEY from '../API_KEY';

const SideButtons = ({ headline, setHeadline }) => {
    return (
        <div className='sideButtons'>
            <span>
                {/* <div className="sideButtons_title">Select For Headline!</div> */}
                <div className="sideButtons_panel">
                    {topDetails.map((obj) => {
                        return (
                            <div className={`sideButttons_btn 
                        ${obj.title === headline[1] ? 'btnActive' : ''}
                        `} onClick={() => {
                                    setHeadline([`top-headlines?${obj.genre}=${obj.value}&apiKey=${API_KEY}`, obj.title])
                                }}><span className={'btn'}>{obj.title}</span></div>
                        )
                    })}
                </div> </span>
            <span></span>
        </div>
    )
}

export default SideButtons
