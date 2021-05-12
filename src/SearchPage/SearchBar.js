import React from 'react'
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="searchBar">
            <input className="searchBar_input" type="text"/>
            <button className="searchBar_button"><i class="fas fa-search"></i></button>
        </div>
    )
}

export default SearchBar
