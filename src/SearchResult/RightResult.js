import React from 'react';
import "./RightResult.css";
import catDetails from "../data";

const RightResult = () => {
    console.log(catDetails);
    return (
        <>
            <div className={`rightResult`}>
                <div className="rightResult_header">
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
                </div>

                
                
            </div>



        </>
    )
}

export default RightResult
