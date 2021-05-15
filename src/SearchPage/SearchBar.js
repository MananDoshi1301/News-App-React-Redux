import React from 'react'
import './SearchBar.css';

const SearchBar = ({search, clickSearch}) => {
    return (
        <div className="searchBar">
            <input ref={search} className="searchBar_input" type="text"/>
            <button className="searchBar_button" onClick={clickSearch}><i class="fas fa-search"></i></button>
        </div>
    )
}

export default SearchBar
