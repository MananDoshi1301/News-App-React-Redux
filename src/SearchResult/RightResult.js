import React from 'react';
import {Link} from 'react-router-dom';
import "./RightResult.css";
import catDetails from "../data";

const RightResult = () => {
    let genres = catDetails.map((obj)=>{
        return obj.category;
    })
    genres = [...new Set(genres)];
    genres = genres.slice(genres.length%2+1);

    const items = () => {
        let arr = [];
        for(let i=0; i<genres.length; i++){
            let obj = (
                <div className="rightResult_header">
                    <div className="rightCont">
                        <h1 className={`rightResult_title`}>{genres[i][0].toUpperCase()+genres[i].slice(1).toLowerCase()} . . .</h1>
                        <ul className={`rightResult_list`}>
                            {catDetails
                                .filter((category) => {
                                    return category.category === genres[i];
                                })
                                .map((category) => {
                                    return (
                                        <li className={`rightResult_listItem`}><Link to={`/result/${category.type}/${category.link}`}>{category.title}</Link></li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            )
            arr.push(obj);
        }
        return arr;
    }
    return (
        <>
            <div className={`rightResult`}>
                {/* <div className="rightResult_header">
                    <div className="rightCont">
                        <h1 className={`rightResult_title`}>From The 'GIANTS'</h1>
                        <ul className={`rightResult_list`}>
                            {catDetails
                                .filter((category) => {
                                    return category.category === "giants"
                                })
                                .map((category) => {
                                    return (
                                        <li className={`rightResult_listItem`}>{category.title}</li>
                                    )
                                })}
                        </ul>
                    </div>
                </div> */}

                {items().map(obj=>obj)}
                
            </div>



        </>
    )
}

export default RightResult
