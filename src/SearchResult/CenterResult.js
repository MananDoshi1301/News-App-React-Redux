import React, { useEffect, useState } from 'react';
import axios from "../axios";
import "./CenterResult.css"
import {motion} from 'framer-motion';

const CenterResult = ({fetchUrl}) => {
    // const [open, setOpen] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            setNews(request.data.articles);
        }

        fetchData();
    },[fetchUrl]);

    return (
        <div className={`centerResult`}>
            {news.map((singNews)=>{
                return <motion.div className="resultCard">
                <div className="resultCard_img">
                    <img src={`${singNews.urlToImage}`} alt="" />
                </div>
                <div className="resultCard_content" >
                    <a href={singNews.url} target="_blank">
                    <div className="resultCard_title">
                        <h1>
                            {singNews.title}
                        </h1>
                    </div>                    
                    <div className={`resultCard_description`}>
                        {singNews.description}
                    </div>
                    <div className="resultCard_sourceRow">
                    <small className="resultCard_source">
                        {singNews.source.name}
                    </small>                    
                    </div>
                    </a>
                </div>
            </motion.div>
            })}
            
        </div>
    )
}

export default CenterResult
