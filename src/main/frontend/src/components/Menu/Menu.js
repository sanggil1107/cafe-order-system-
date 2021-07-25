import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contents from '../Contents/Contents';
import { DrinkMenu, FoodMenu, ProductMenu } from '../Contents/ContentsData';
import ScrollToTop from '../ScrollToTop';

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
        <>
            <ScrollToTop />
            <Contents {...DrinkMenu}/>
            <Contents {...FoodMenu}/>
            <Contents {...ProductMenu}/>                
        </>
    );
}

export default Menu;