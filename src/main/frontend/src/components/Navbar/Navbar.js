import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {

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
                            <NavItem>
                                {/* <NavLinks to='menu' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    Menu
                                </NavLinks> */}
                                <NavLinks to='/menu'>
                                    Menu
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/coffee'>
                                    Coffee
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/store'>
                                    Store
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/news'>
                                    News
                                </NavLinks>
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