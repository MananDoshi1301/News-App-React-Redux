import React from "react";
import Nav from "../Nav/Nav";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <div>
      <Nav />
      <div style={{position:'absolute', top:'120px'}}>
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchPage;
