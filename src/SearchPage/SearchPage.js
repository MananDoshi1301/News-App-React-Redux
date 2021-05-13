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
    {title: 'India', icon:'fas fa-rupee-sign'},
    {title: 'States', icon:'fas fa-flag-usa'},
    {title: 'BBC News', icon:'fas fa-newspaper'},
    {title: 'CNN', icon:'fas fa-balance-scale'},
    {title: 'TechCrunch', icon:'fas fa-microchip'},
    {title: 'NextBigFuture', icon:'fas fa-atom'},
    {title: 'Cyrpto Coins', icon:'fab fa-btc'},
    {title: 'Business Insider', icon:'fas fa-dollar-sign'},
    {title: 'Wall Street Journal', icon:'far fa-newspaper'},
    {title: 'MTV', icon:'fas fa-compact-disc'},
    {title: 'Fox Sports', icon:'fas fa-swimmer'},
    {title: 'FourFourTwo', icon:'fas fa-futbol'},
  ]
  return (
    <div>
      <Nav />
      <div style={{position:'absolute', top:'120px', marginLeft:'30px', width:'1475px'}}>
        <SearchBar />
        <div style={{marginBottom:'40px'}}>
          <SearchTiles category={catDetails}/>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
