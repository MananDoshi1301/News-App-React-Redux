import React, { useEffect, useState } from 'react';
import axios from "../axios";
import "./CenterResult.css"
import appLogo from "../appLogo.png";
import { motion } from 'framer-motion';

const CenterResult = ({ fetchUrl, type }) => {
    // const [open, setOpen] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            if (type === 'sources') setNews(request.data.sources);
            else setNews(request.data.articles);
            console.log(request);
        }
        console.log('In useEffect!')
        fetchData();
    }, [fetchUrl]);

    return (
        <div className={`centerResult`}>
            <div className="centreResult_header">
                
            </div>
            {news && news.map((singNews) => {
                const time = new Date(singNews.publishedAt);
                const options = { month: 'long' };
                const month = new Intl.DateTimeFormat('en-US', options).format(time);
                return <div className="resultCard">
                    <div className="resultCard_img">
                        <img src={`${singNews.urlToImage?singNews.urlToImage:""}`} alt="" />
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
                                <small>
                                    {month + ' ' + time.getDate() + ', ' + time.getFullYear()}
                                </small>
                            </div>
                        </a>
                    </div>
                </div>
            })}

        </div>
    )
}

export default CenterResult
