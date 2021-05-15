import React from 'react';
import {Link} from 'react-router-dom';
import "./LeftResult.css";
import catDetails from "../data";

const LeftResult = () => {
    let genres = catDetails.map((obj)=>{
        return obj.category;
    })
    genres = [...new Set(genres)];
    genres = genres.slice(0,genres.length%2+1);

    const items = () => {
        let arr = [];
        for(let i=0; i<genres.length; i++){
            let obj = (
                <div className="leftResult_header">
                <div className="leftCont">
                    <h1 className={`leftResult_title`}>{genres[i][0].toUpperCase()+genres[i].slice(1).toLowerCase()} . . .</h1>
                    <ul className={`leftResult_list`}>
                        {catDetails
                            .filter((category) => {
                                return category.category === genres[i];
                            })
                            .map((category) => {
                                return (
                                    <li className={`leftResult_listItem`}><Link to={`/result/${category.type}/${category.link}`}>{category.title}</Link></li>
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
            <div className={`leftResult`}>
                {/* <div className="leftResult_header">
                    <div className="leftCont">
                        <h1 className={`leftResult_title`}>Genres</h1>
                        <ul className={`leftResult_list`}>
                            {catDetails
                                .filter((category) => {
                                    return category.category === "genre"
                                })
                                .map((category) => {
                                    return (
                                        <li className={`leftResult_listItem`}>{category.title}</li>
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

export default LeftResult
