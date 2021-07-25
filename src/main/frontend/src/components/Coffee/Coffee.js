import React from 'react';
import Contents from '../Contents/Contents';
import { CoffeeMenu, CoffeeFinder, CoffeeStory } from '../Contents/ContentsData';
import ScrollToTop from '../ScrollToTop';

const Coffee = () => {
    return (
        <>
            <ScrollToTop />
            <Contents {...CoffeeMenu}/>    
            <Contents {...CoffeeFinder}/>
            <Contents {...CoffeeStory}/>
        </>
    );
}

export default Coffee;
