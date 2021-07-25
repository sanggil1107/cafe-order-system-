import React from 'react';
import Contents from '../Contents/Contents';
import { Event, Notice, Board } from '../Contents/ContentsData';
import ScrollToTop from '../ScrollToTop';

const News = () => {
    return (
        <>
            <ScrollToTop />
            <Contents {...Notice}/>
            <Contents {...Event}/>    
            <Contents {...Board}/>
        </>
    );
}


export default News;