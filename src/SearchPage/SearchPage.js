import React from "react";
import Nav from "../Nav/Nav";
import SearchBar from "./SearchBar";
import SearchTiles from "./SearchTiles";

const SearchPage = () => {
  const catDetails = [
    {title: 'Business', icon:'far fa-chart-bar', type:"sources", link:'category=business'},
    {title: 'Entertainment', icon:'far fa-play-circle', type:"sources", link:'category=entertainment'},
    {title: 'General', icon:'fas fa-bullhorn', type:"sources", link:'category=general'},
    {title: 'Health', icon:'fas fa-hospital', type:"sources", link:'category=health'},
    {title: 'Science', icon:'fas fa-flask', type:"sources", link:'category=science'},
    {title: 'Sports', icon:'far fa-futbol', type:"sources", link:'category=sports'},
    {title: 'Sports', icon:'fas fa-code', type:"sources", link:'category=technology'},
    {title: 'India', icon:'fas fa-rupee-sign', type:"sources", link:'country=in'},
    {title: 'States', icon:'fas fa-flag-usa', type:"sources", link:'country=us'},
    {title: 'BBC News', icon:'fas fa-newspaper', type:"top-headlines", link:'sources=bbc-news'},
    {title: 'CNN', icon:'fas fa-balance-scale', type:"top-headlines", link:'sources=cnn'},
    {title: 'TechCrunch', icon:'fas fa-microchip', type:"top-headlines", link:'sources=techcrunch'},
    {title: 'NextBigFuture', icon:'fas fa-atom', type:"top-headlines", link:'sources=the-next-big-future'},
    {title: 'Cyrpto Coins', icon:'fab fa-btc', type:"top-headlines", link:'sources=crypto-coins-news'},
    {title: 'Business Insider', icon:'fas fa-dollar-sign', type:"top-headlines", link:'sources=business-insider'},
    {title: 'Wall Street Journal', icon:'far fa-newspaper', type:"top-headlines", link:'sources=the-wall-street-journal'},
    {title: 'MTV', icon:'fas fa-compact-disc', type:"top-headlines", link:'sources=mtv-news'},
    {title: 'Fox Sports', icon:'fas fa-swimmer', type:"top-headlines", link:'sources=fox-sports'},
    {title: 'FourFourTwo', icon:'fas fa-futbol', type:"top-headlines", link:'sources=four-four-two'},
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
