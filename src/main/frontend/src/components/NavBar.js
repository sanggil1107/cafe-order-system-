import React, { useState } from 'react'; // imr
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Dropdown from './Dropdown';

const NavBar = () => {

    const [ click, setClick ] = useState(false);
    const [ dropdown, setDropdown ] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    }

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    CafeOrder <i class='fab fa-firstdraft'></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                            Menu
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down'></i>
                        </Link>
                        {dropdown && <Dropdown></Dropdown>}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            로그인
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    );
}

export default NavBar;