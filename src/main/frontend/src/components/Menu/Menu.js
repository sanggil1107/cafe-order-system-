import React from 'react';
import InfoSection from '../InfoSection/InfoSection';
import { DrinkMenu, FoodMenu } from '../InfoSection/Data';

const Menu = () => {
    return (
        <>
            <InfoSection {...FoodMenu}/>
            <InfoSection {...DrinkMenu}/>                
        </>
    );
}

export default Menu;