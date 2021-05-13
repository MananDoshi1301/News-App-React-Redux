import React, { useState } from 'react';
import "./CenterResult.css"
import {motion} from 'framer-motion';

const CenterResult = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`centerResult`}>
            <motion.div className="resultCard">
                <div className="resultCard_img">
                    <img src="https://c.ndtvimg.com/2021-03/3sml2068_tesla-ceo-elon-musk_625x300_13_March_21.jpg" alt="" />
                </div>
                <div className="resultCard_content" onClick={() => { setOpen(!open) }}>
                    <div className="resultCard_title">
                        <h1>
                            Elon Musk Decries 'Insane' Bitcoin Energy Use After Tesla Payment U-Turn - NDTV
                    </h1>
                    </div>                    
                    <div className={`resultCard_description ${open ? '' : 'resultCard_hide'}`}>
                        "Tesla Inc boss Elon Musk on Thursday denounced the "insane" amount of energy used to produce bitcoin, doubling down on his sudden rejection of the cryptocurrency as a means of payment over environmental concerns."
                    </div>
                    <div className="resultCard_sourceRow">
                    <small className="resultCard_source">
                        NDTV News
                    </small>
                    <span>                                      
                    {open?<i class="fas fa-chevron-circle-up"></i>:<i class="fas fa-chevron-circle-down"></i>}   
                    </span>                 
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default CenterResult
