import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Dropdown from '../Dropdown';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [ menudropdown, setMenudropdown ] = useState(false);
    const [ coffeedropdown, setCoffeedropdown ] = useState(false);
    const [ newsdropdown, setNewsdropdown ] = useState(false);
    const [ scrollNav, setScrollNav ] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    }
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    
    const onMouseEnter = (dropdown) => {
        if(dropdown === 'menudropdown') {
            if(window.innerWidth < 960) {
                setMenudropdown(false);
            }
            else {
                setMenudropdown(true);
            }
        }
        if(dropdown === 'coffeedropdown') {
            if(window.innerWidth < 960) {
                setCoffeedropdown(false);
            }
            else {
                setCoffeedropdown(true);
            }
        }
        if(dropdown === 'newsdropdown') {
            if(window.innerWidth < 960) {
                setNewsdropdown(false);
            }
            else {
                setNewsdropdown(true);
            }
        }
    }

    const onMouseLeave = (dropdown) => {
        if(dropdown === 'menudropdown') {
            if(window.innerWidth < 960) {
                setMenudropdown(false);
            }
            else {
                setMenudropdown(false);
            }
        }
        if(dropdown === 'coffeedropdown') {
            if(window.innerWidth < 960) {
                setCoffeedropdown(false);
            }
            else {
                setCoffeedropdown(false);
            }
        }
        if(dropdown === 'newsdropdown') {
            if(window.innerWidth < 960) {
                setNewsdropdown(false);
            }
            else {
                setNewsdropdown(false);
            }
        }
        
    }

    const onClickdropdown = (dropdown) => {
        if(dropdown === 'menudropdown') {

            if(window.innerWidth < 960) {
                setMenudropdown(false);
            }
            else {
                setMenudropdown(false);
            }
        }
        if(dropdown === 'coffeedropdown') {
            if(window.innerWidth < 960) {
                setCoffeedropdown(false);
            }
            else {
                setCoffeedropdown(false);
            }
        }
        if(dropdown === 'newsdropdown') {
            if(window.innerWidth < 960) {
                setNewsdropdown(false);
            }
            else {
                setNewsdropdown(false);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>CafeOrder</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem onMouseEnter={() => {onMouseEnter('menudropdown')}} onMouseLeave={() => {onMouseLeave('menudropdown')}}>
                                {/* <NavLinks to='menu' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    Menu
                                </NavLinks> */}
                                <NavLinks to='/menu' onClick={() => {onClickdropdown('menudropdown')}}>
                                    Menu <i className='fas fa-caret-down'></i>
                                </NavLinks>
                                {menudropdown && <Dropdown />}
                            </NavItem>
                            <NavItem onMouseEnter={() => {onMouseEnter('coffeedropdown')}} onMouseLeave={() => {onMouseLeave('coffeedropdown')}}>
                                <NavLinks to='/coffee' onClick={() => {onClickdropdown('coffeedropdown')}}>
                                    Coffee <i className='fas fa-caret-down'></i>
                                </NavLinks> 
                                {coffeedropdown && <Dropdown />}
                            </NavItem>
                            <NavItem >
                                <NavLinks to='/store'>
                                    Store
                                </NavLinks>
                            </NavItem>
                            <NavItem onMouseEnter={() => {onMouseEnter('newsdropdown')}} onMouseLeave={() => {onMouseLeave('newsdropdown')}}>
                                <NavLinks to='/news' onClick={() => {onClickdropdown('newsdropdown')}}>
                                    News <i className='fas fa-caret-down'></i>
                                </NavLinks>
                                {newsdropdown && <Dropdown />}
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;