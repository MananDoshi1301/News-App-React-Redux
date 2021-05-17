import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import LeftResult from "./LeftResult";
import RightResult from "./RightResult";
import CenterResult from "./CenterResult";
import ScrollBackBtn from "../ScrollBackBtn";
import "./SearchResult.css";
import API_KEY from "../API_KEY";

const SearchResult = () => {
  const { type, link } = useParams();
  const getLink = () => {
    let linkStr;
    linkStr = type + "?" + link + "&apiKey=" + API_KEY;
    console.log(linkStr);
    return linkStr;
  };

  window.scrollTo(0, 0);

  return (
    <div>
      <Nav />
      <section className={`searchResult`} style={{ width: "95%" }}>
        <LeftResult />
        <CenterResult fetchUrl={getLink()} type={type} />
        <RightResult />
        <ScrollBackBtn />
      </section>
    </div>
  );
};

export default SearchResult;
