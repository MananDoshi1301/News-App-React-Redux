import React from "react";
import Nav from "../Nav/Nav";
import SearchBar from "./SearchBar";
import SearchTiles from "./SearchTiles";

const SearchPage = () => {
  return (
    <div>
      <Nav />
      <div style={{position:'absolute', top:'120px', marginLeft:'35px'}}>
        <SearchBar />
        <SearchTiles />
      </div>
    </div>
  );
};

export default SearchPage;
