import React, { useState, useEffect } from 'react'; // imr
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';
import CategoryService from '../service_backend/CategoryService';

const Dropdown = ({id}) => {

    const [ click, setClick ] = useState(false);
    const [ category, setCategory ] = useState([]);
    const categorylist = [
        '/menu/food_menu', '/menu/drink_menu', '/menu/product_menu', 
        '/coffee/coffee_menu', '/coffee/coffee_finder', '/coffee/coffee_story',
        '/news/notice', '/news/event', '/news/board' 
    ]

    useEffect(() => {
        CategoryService.getSubList(id).then(res => {
            setCategory(res.data);
            console.log(res.data);
        }).catch(err => console.log(err));
    }, [id]);

    const handleClick = () => {
        setClick(!click);
    }
    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                { category.map((ca, index) => {
                    return (
                        <li key={index}>
                            <Link className='dropdown-link' to={categorylist[ca.subId - 1]} onClick={() => setClick(false)}>
                                {ca.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Dropdown;