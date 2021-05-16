import React, { useEffect, useState } from 'react';
import ScrollBackBtn from '../ScrollBackBtn';

import Nav from '../Nav/Nav';
import ArticleFormat from './ArticleFormat';

const Articles = ({ fetchUrl = 'viewed/30.json' }) => {
  
  return (
    <>
      <Nav />
      <div>
        <ArticleFormat fetchUrl={'/viewed/7.json'} />
        <ScrollBackBtn />
      </div>
    </>
  )
}

export default Articles
