import React from 'react';
import Nav from '../Nav/Nav';
import LeftResult from './LeftResult';
import CenterResult from './CenterResult';
import './SearchResult.css';

const SearchResult = () => {
    return (
        <div>
            <Nav/>
            <section className={`searchResult`}>
                <LeftResult />
                <CenterResult />
            </section>
        </div>
    )
}

export default SearchResult
