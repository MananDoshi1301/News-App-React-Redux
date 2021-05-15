import React, { useEffect, useState } from "react";
import { nytKey } from "../API_KEY";
import { nyt } from "../axios";
import "./ArticleFormat.css";

const ArticleFormat = ({ fetchUrl = "viewed/30.json" }) => {
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
  }, []);

  userArticles && console.log(userArticles[0]);

  return (
    <>
      {userArticles && (
        <div className="articles">
          <div className="article">
            <div className="article_content">
              <div className="article_title">
                <h1>{userArticles[0]["title"]}</h1>
              </div>
              <div className="article_abstract">
                {userArticles[0]["abstract"]}
              </div>
            </div>
            <div className="article_image">
              <img
                src={userArticles[0]["media"][0]["media-metadata"][2]["url"]}
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div className="article">
            <div className="article_content">{userArticles[0]["title"]}</div>
            <div className="article_image">
              <img
                src={userArticles[0]["media"][0]["media-metadata"][2]["url"]}
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div className="article">
            <div className="article_content">{userArticles[0]["title"]}</div>
            <div className="article_image">
              <img
                src={userArticles[0]["media"][0]["media-metadata"][2]["url"]}
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleFormat;
