import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contents from '../Contents/Contents';
import { DrinkMenu, FoodMenu, ProductMenu } from '../Contents/ContentsData';
import ScrollToTop from '../ScrollToTop';
import { Menudiv } from './MenuElements';
 
const Menu = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        console.log('dd');
        window.onbeforeunload = () => {
            console.log('11');
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <Menudiv>
            <ScrollToTop />
            <Contents {...FoodMenu}/>
            <Contents {...DrinkMenu}/>
            <Contents {...ProductMenu}/>
        </Menudiv>
    );
}

export default Menu;