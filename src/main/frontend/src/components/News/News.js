import React from 'react';
import Contents from '../Contents/Contents';
import { Event, Notice, Board } from '../Contents/ContentsData';
import ScrollToTop from '../ScrollToTop';

export const News = () => {
    return (
        <>
            <ScrollToTop />
            <Contents {...Event}/>    
            <Contents {...Notice}/>
            <Contents {...Board}/>
        </>
    );
}


export default News;