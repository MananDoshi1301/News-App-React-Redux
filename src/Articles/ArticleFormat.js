import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nytKey } from "../API_KEY";
import { nyt } from "../axios";
import "./ArticleFormat.css";
import appLogo from "../appLogo.png";

const ArticleFormat = ({ fetchUrl }) => {
  const [userArticles, setUserArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await nyt.mostPopular.get(fetchUrl + "?api-key=" + nytKey);
        setUserArticles(req.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [fetchUrl]);

  // userArticles && console.log(obj);

  return (
    <>
      {console.log(userArticles)}

      <div className="articles">
        {userArticles &&
          userArticles.map((obj) => {
            let img;
            if (obj.media.length !== 0) {
              img = [...obj.media];
              if (img[0]["media-metadata"].length != 0) {
                img = img[0]["media-metadata"];
                try {
                  img = img[2].url;
                } catch (err) {
                  try {
                    img = img[1].url;
                  } catch (err) {
                    img = img[0].url;
                  }
                }
              } else {
                img = appLogo;
              }
            } else {
              img = appLogo;
            }

            const ref = obj["adx_keywords"].split(";");

            return (
              <a href={obj["url"]} className="article" target="_blank">
                <div className="article_content">
                  <div className="article_title">
                    <h1>{obj["title"]}</h1>
                  </div>
                  <div className="article_section">
                    {obj["section"]}
                    {obj["subsection"] !== "" ? ", " + obj["subsection"] : ""}
                  </div>
                  <div className="article_abstract">{obj["abstract"]}</div>
                  <div className="article_byline">-{obj["byline"]}</div>
                  <div className="article_reference">
                    <span className="article_reference_title"></span>
                  </div>
                </div>
                <div className="article_image">
                  {obj["media"] && <img src={img} alt="" srcset="" />}
                </div>
              </a>
            );
          })}
      </div>
    </>
  );
};

export default ArticleFormat;
