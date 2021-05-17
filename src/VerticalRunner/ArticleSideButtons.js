import React from 'react'
import './SideButtons.css'
import { articleDetails } from '../data';
import API_KEY from '../API_KEY';

const ArticleSideButtons = ({ article, setArticle }) => {
    return (
        <div className='sideButtons'>
            <span>
                <div className="sideButtons_title">Select For Headline!</div>
                <div className="sideButtons_panel">
                    {articleDetails.map((obj) => {
                        return (
                            <div className={`sideButttons_btn 
                        ${obj[0].toUpperCase() + obj.slice(1) === article[1] ? 'btnActive' : ''}
                        `}
                                onClick={() => {
                                    console.log(obj,obj[0].toUpperCase() + obj.slice(1))
                                    setArticle([obj, obj[0].toUpperCase() + obj.slice(1)])
                                }}>
                                <span className={'btn'}>
                                    {obj[0].toUpperCase() + obj.slice(1)}
                                </span>
                            </div>
                        )
                    })}
                </div> </span>
            <span></span>
        </div>
    )
}

export default ArticleSideButtons
