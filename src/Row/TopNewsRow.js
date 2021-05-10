import React, { useEffect, useState } from "react";
import "./TopNewsRow.css";
import axios from "../axios";

const TopNewsRow = ({ title, fetchUrl }) => {
  const [topNews, setTopNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setTopNews(request.data.articles);
      return request;
    }

    fetchData();
  }, []);

  console.log(topNews);
  return (
    <div className="topNewsRow">
      <h1 className="topNewsRow_title">{title}</h1>
      <div className="topNewsRow_posters">
        {topNews.map((news) => {
          if (news.urlToImage) {
            return (<div className="topNewsRow_card">
              <img
                className={`topNewsRow_newsPoster`}
                src={news.urlToImage}
                alt={"    "}
              />
              <div className="topNewsRow_cardContent">
                <div>{news.title}</div>
                <div className="topNewsRow_authorDetails">
                  <span className="topNewsRow_authorDetails_source">
                    {news?.source.name}
                  </span>
                  <span className="topNewsRow_authorDetails_author">
                    {news.author ? ", " + news.author : ""}
                  </span>
                </div>
              </div>
            </div>);
          }
          else {

          }

        })}
      </div>
    </div>
  );
};

export default TopNewsRow;
