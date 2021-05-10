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

  const truncate = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  }

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
                <div>{truncate(news.title, 160)}</div>
                <div className="topNewsRow_authorDetails">
                  <div className="topNewsRow_authorDetails_source">
                    {news.source.name ? "- " + news.source.name : ""}
                  </div>
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
