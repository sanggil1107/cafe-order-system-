import React from 'react';
import Food_Menu from './Food_Menu';
import Drink_Menu from './Drink_Menu';
import './Menu.css';

const Menu = () => {
    return (
        <>
            <Food_Menu></Food_Menu>
            <Drink_Menu></Drink_Menu>                
        </>
    );
}

export default Menu;