import React, { useEffect, useState } from "react";
import { nytKey } from "../API_KEY";
import { nyt } from "../axios";
import "./ArticleFormat.css";
import appLogo from "../appLogo.png";

const ArticleFormat = ({ fetchUrl, setArticle }) => {
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
    window.scrollTo(0,0);
  }, [fetchUrl]);

  let art = fetchUrl.split("/")[1];
  // console.log(art);

  const artOPtions = ['Emailed', 'Shared', 'Viewed']

  return (
    <>
      {/* {console.log(userArticles)} */}

      <div className="articles">
        <div className="centreResult_header">
          <span className='articleDetails'>Most :
            {/* {art.toUpperCase()} */}
            <ul className='articleDetails_optionList'>
              {artOPtions.map((obj, key)=>{
                return (
                  <li key={key} onClick={()=>{
                    setArticle(`/${obj.toLowerCase()}/7.json`)
                  }} className={`articleDetails_listItem ${obj.toLowerCase() === art.toLowerCase()?'activeArt':''}`}>{obj}</li>
                )
              })}              
            </ul>
          </span>
          <span>TOTAL RESULTS: {userArticles.length}</span>
        </div>
        {userArticles &&
          userArticles.map((obj, key) => {
            let img;
            if (obj.media.length !== 0) {
              img = [...obj.media];
              if (img[0]["media-metadata"].length !== 0) {
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

            const ref = obj["adx_keywords"].split(";").join(", ");

            const time = new Date(obj.updated);
            const month = new Intl.DateTimeFormat("en-US", {
              month: "long",
            }).format(time);
            const timeline =
              month +
              " " +
              time.getDate() +
              ", " +
              time.getFullYear() +
              " " +
              time.getHours() +
              ":" +
              time.getMinutes(); // timeline

            return (
              <a key={key} href={obj["url"]} className="article" target="_blank" rel="noreferrer">
                <div className="article_content">
                  <div className="article_title">
                    <h1>{obj["title"]}</h1>
                  </div>
                  <div className="article_section">
                    {obj["section"]}
                    {obj["subsection"] !== "" ? ", " + obj["subsection"] : ""}
                  </div>
                  <div className="article_abstract">{obj["abstract"]}</div>
                  <div className="article_reference">
                    <span className="article_reference_title">Reference: </span>
                    {ref}
                  </div>
                  <div className="article_byline">
                    <span className={"article_byline_article"}>
                      -{obj["byline"]}
                    </span>
                    <span className="article_byline_timeline">{timeline}</span>
                  </div>
                </div>
                <div className="article_image">
                  {obj["media"] && <img src={img} alt="" />}
                </div>
              </a>
            );
          })}
      </div>
    </>
  );
};

export default ArticleFormat;
