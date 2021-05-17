import React, { useState, useEffect } from 'react'
import axios from "../axios";
import Slider from 'react-slick';
import './VerticalRunner.css';

import { dummyData } from '../data';

const VerticalRunner = ({ fetchUrl, width = '600px', title }) => {

  let [topNews, setTopNews] = useState(dummyData.articles);
  useEffect(() => {
    async function fetchData() {
      // const request = await axios.get(fetchUrl);
      // setTopNews(request.data.articles);
      // return request;
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
    <div className='verticalRunners' style={{ width: width }}>
      <h1>{title}</h1>
      <Slider {...settings}>
        {topNews.map((obj) => {
          return (

            <div className="verticalRunner">
              <div className="verticalRunner_image">
                <img src={obj.urlToImage} alt="" />
              </div>
              <div className="verticalRunner_content">
                <div className="verticalRunner_title">
                  <h2>{obj.title}</h2>
                </div>
                <div className="verticalRunner_description">
                  {truncate(obj.description, 200)}
                </div>
                <div className="verticalRunner_sourceName">
                  - {obj.source.name} -
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default VerticalRunner
