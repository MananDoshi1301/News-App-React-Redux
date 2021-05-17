import React, { useState } from "react";
import Banner from "./Nav/Banner";
import Nav from "./Nav/Nav";
import TopNewsRow from "./Row/TopNewsRow";
import requests from "./Requests";
import VerticalRunner from "./VerticalRunner/VerticalRunner";
import ScrollBackBtn from "./ScrollBackBtn";

const HomeScreen = () => {
  const [customHeadliness, setCustomHeadlines] = useState(null);
  return (
    <>
      <Nav />
      <Banner />
      {/* <TopNewsRow
        title={"Top Headlines: India"}
        fetchUrl={requests.fetchTopHeadlinesIndia}
      /> */}
      <div>
        <VerticalRunner
          title={"News"}
          fetchUrl={requests.fetchTopHeadlinesIndia}
          title={"Headlines"}
        />
      </div>
      {/* <TopNewsRow
                title={'Top Headlines: United States'}
                fetchUrl={requests.fetchTopHeadlinesUS}
            /> */}

      <ScrollBackBtn />
    </>
  );
};

export default HomeScreen;
