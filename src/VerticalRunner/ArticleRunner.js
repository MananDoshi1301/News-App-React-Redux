import React, { useState, useEffect } from 'react'
import { nyt } from "../axios";
import Slider from 'react-slick';
import './VerticalRunner.css';
import appLogo from '../appLogo.png'
import { nytKey } from '../API_KEY';

const ArticleRunner = ({ fetchUrl = 'world', width = '600px', title }) => {

  let [topNews, setTopNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await nyt.topstories.get(fetchUrl + '.json?api-key=' + nytKey);
      console.log(fetchUrl + '.json?api-key=' + nytKey)
      setTopNews(request.data.results.slice(0, 15));
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 8000,
    nextArrow: null,
    prevArrow: null,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  const truncate = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <>
      <div className='verticalRunners' style={{ width: width }}>
        <h1>Top {title}</h1>
        <Slider {...settings}>
          {topNews.map((obj) => {
            let image;
            if (obj.multimedia === null) {
              image = appLogo;
            } else {
              image = obj.multimedia[obj.multimedia.length - 1]["url"];

            }
            return (

              <a href={obj.url} target="_blank" className="verticalRunner">
                <div className="verticalRunner_image">
                  <img src={image} alt="" height='240px' />
                </div>
                <div className="verticalRunner_content">
                  <div className="verticalRunner_title">
                    <h2>{truncate(obj.title, 80)}</h2>
                  </div>
                  <div className="verticalRunner_description">
                    {obj.abstract ? truncate(obj.abstract, 120) : ""}
                  </div>
                  <div className="verticalRunner_sourceName">
                    - {obj.byline}
                    <span className="arrow">
                      <i class="fas fa-arrow-circle-right"></i>
                    </span>
                  </div>
                </div>
              </a>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default ArticleRunner;
