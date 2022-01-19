import React from 'react';
import Contents from '../Contents/Contents';
import { Event, Notice, Board } from '../Contents/ContentsData';
import ScrollToTop from '../ScrollToTop';
import { Newsdiv } from './NewsElements';

const News = () => {
    return (
        <Newsdiv>
            <ScrollToTop />
            <Contents {...Notice}/>
            <Contents {...Event}/>    
            <Contents {...Board}/>
        </Newsdiv>
    );
}


export default News;