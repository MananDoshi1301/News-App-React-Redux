import React from 'react'
import Banner from './Nav/Banner'
import Nav from './Nav/Nav'
import TopNewsRow from './Row/TopNewsRow'
import requests from "./Requests";
import VerticalRunner from './VerticalRunner/VerticalRunner';

const HomeScreen = () => {
    return (
        <>
            <Nav />
            <Banner />
            {/* <TopNewsRow
                title={'Top Headlines: India'}
                fetchUrl={requests.fetchTopHeadlinesIndia}
            /> */}
            {/* <VerticalRunner title={'News'}
            fetchUrl={requests.fetchTopHeadlinesIndia} /> */}
            {/* <TopNewsRow
                title={'Top Headlines: United States'}
                fetchUrl={requests.fetchTopHeadlinesUS}
            /> */}
        </>
    )
}

export default HomeScreen
