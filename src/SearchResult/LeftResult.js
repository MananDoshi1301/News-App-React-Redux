import React from 'react';
import "./LeftResult.css";
import catDetails from "../data";

const LeftResult = () => {
    console.log(catDetails);
    return (
        <>
            <div className={`leftResult`}>
                <div className="leftResult_header">
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
                </div>

                
                
            </div>



        </>
    )
}

export default LeftResult
