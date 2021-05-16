import React, { useEffect, useState } from 'react'
// import { nytKey } from '../API_KEY';
// import { nyt } from '../axios';

import Nav from '../Nav/Nav';
import ArticleFormat from './ArticleFormat';

const Articles = ({ fetchUrl = 'viewed/30.json' }) => {
  // const [userArticles, setUserArticles] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const req = await nyt.mostPopular.get(fetchUrl + '?api-key=' + nytKey);
  //       setUserArticles(req.data.results);
  //       console.log(req);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   fetchData();
  // }, [fetchUrl])
  return (
    <>
      <Nav />
      <div>
        <ArticleFormat fetchUrl={'/viewed/7.json'} />
      </div>
    </>
  )
}

export default Articles
