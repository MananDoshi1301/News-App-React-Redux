import React from "react";
import Nav from "../Nav/Nav";
import SearchBar from "./SearchBar";
import SearchTiles from "./SearchTiles";

const SearchPage = () => {
  const catDetails = [
    {title: 'Business', icon:'far fa-chart-bar'},
    {title: 'Entertainment', icon:'far fa-play-circle'},
    {title: 'General', icon:'fas fa-bullhorn'},
    {title: 'Health', icon:'fas fa-hospital'},
    {title: 'Science', icon:'fas fa-flask'},
    {title: 'Sports', icon:'far fa-futbol'},
  ]
  return (
    <div>
      <Nav />
      <div style={{position:'absolute', top:'120px', marginLeft:'30px', width:'1475px'}}>
        <SearchBar />
        <SearchTiles category={catDetails}/>
      </div>
    </div>
  );
};

export default SearchPage;
