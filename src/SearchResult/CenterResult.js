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
        fetchData();
    }, [fetchUrl]);

    return (
        <div className={`centerResult`}>
            <div className="centreResult_header">
                
            </div>
            {news && news.map((myNews) => {
                const image = myNews.urlToImage?myNews.urlToImage:"";
                const title = myNews.title;  //title 
                const description = myNews.description //description
                const sourceName = myNews.source.name; //source
                const author = myNews.author?", "+myNews.author:""; //author
                //date
                const time = new Date(myNews.publishedAt);
                const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(time);
                const timeline = month+' '+time.getDate()+', '+time.getFullYear()+' '+time.getHours()+':'+time.getMinutes() // timeline

                return <div className="resultCard">
                    <div className="resultCard_img">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="resultCard_content" >
                        <a href={myNews.url} target="_blank">
                            <div className="resultCard_title">
                                <h1>
                                    {title}
                                </h1>
                            </div>
                            <div className={`resultCard_description`} dangerouslySetInnerHTML={{ __html: myNews.description}}></div>
                            <div className="resultCard_sourceRow">
                                <small className="resultCard_source">
                                    {sourceName}{author}
                                </small>
                                <small className="resultCard_source">
                                    {timeline}
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
