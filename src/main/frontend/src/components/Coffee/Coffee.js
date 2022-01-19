import React from 'react';
import Contents from '../Contents/Contents';
import { CoffeeMenu, CoffeeFinder, CoffeeStory } from '../Contents/ContentsData';
import ScrollToTop from '../ScrollToTop';
import { Coffeediv } from './CoffeeElements';

const Coffee = () => {
    return (
        <Coffeediv>
            <ScrollToTop />
            <Contents {...CoffeeMenu}/>    
            <Contents {...CoffeeFinder}/>
            <Contents {...CoffeeStory}/>
        </Coffeediv>
    );
}

export default Coffee;
