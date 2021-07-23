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
            window.scrollTo(0, 0);
        };
    }, [pathname]);

    return (
        <>
            <ScrollToTop />
            <Contents {...FoodMenu}/>
            <Contents {...DrinkMenu}/>
            <Contents {...ProductMenu}/>                
        </>
    );
}

export default Menu;