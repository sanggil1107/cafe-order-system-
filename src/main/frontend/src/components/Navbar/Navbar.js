import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Dropdown from '../Navbar/Dropdown';
import CategoryService from '../../service_backend/CategoryService';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavI } from './NavbarElements';
import Sginin from '../Signin/Signin';


const Navbar = ({ toggle }) => {

    const [menudropdown, setMenudropdown] = useState(false);
    const [coffeedropdown, setCoffeedropdown] = useState(false);
    const [newsdropdown, setNewsdropdown] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [mcategory, setMcategory] = useState([]);
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);
    const [token, setToken] = useState(false);

    useEffect(() => {

        CategoryService.getMainList().then(res => {
            setMcategory(res.data);
            console.log(res.data);
        });
        window.addEventListener('scroll', changeNav);

    }, [token]);

    useEffect(() => {
        if (localStorage.getItem('token') != null) {
            setToken(true);
        }
        else {
            setToken(false);
        }
        if (signin) {
            document.body.style.cssText = `
              position: fixed; 
              top: -${window.scrollY}px;
              width: 100%;`;
            return () => {
                const scrollY = document.body.style.top;
                document.body.style.cssText = '';
                window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
            };
        }
    }, [signin]);

    const onSignin = () => {
        setSignin(true);
    }

    const onSignout = () => {
        localStorage.removeItem('token');
        setToken(false)
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
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
        if (dropdown === 'menudropdown') {
            if (window.innerWidth < 960) {
                setMenudropdown(false);
            }
            else {
                setMenudropdown(true);
            }
        }
        if (dropdown === 'coffeedropdown') {
            if (window.innerWidth < 960) {
                setCoffeedropdown(false);
            }
            else {
                setCoffeedropdown(true);
            }
        }
        if (dropdown === 'newsdropdown') {
            if (window.innerWidth < 960) {
                setNewsdropdown(false);
            }
            else {
                setNewsdropdown(true);
            }
        }
    }

    const onMouseLeave = (dropdown) => {
        if (dropdown === 'menudropdown') {
            if (window.innerWidth < 960) {
                setMenudropdown(false);
            }
            else {
                setMenudropdown(false);
            }
        }
        if (dropdown === 'coffeedropdown') {
            if (window.innerWidth < 960) {
                setCoffeedropdown(false);
            }
            else {
                setCoffeedropdown(false);
            }
        }
        if (dropdown === 'newsdropdown') {
            if (window.innerWidth < 960) {
                setNewsdropdown(false);
            }
            else {
                setNewsdropdown(false);
            }
        }

    }

    const onClickdropdown = (dropdown) => {
        if (dropdown === 'menudropdown') {

            if (window.innerWidth < 960) {
                setMenudropdown(false);
            }
            else {
                setMenudropdown(false);
            }
        }
        if (dropdown === 'coffeedropdown') {
            if (window.innerWidth < 960) {
                setCoffeedropdown(false);
            }
            else {
                setCoffeedropdown(false);
            }
        }
        if (dropdown === 'newsdropdown') {
            if (window.innerWidth < 960) {
                setNewsdropdown(false);
            }
            else {
                setNewsdropdown(false);
            }
        }
    }

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

                            {mcategory && mcategory.map((m, i) => {

                                if (m.mainId === 1) {
                                    return (
                                        <NavItem onMouseEnter={() => { onMouseEnter('menudropdown') }} onMouseLeave={() => { onMouseLeave('menudropdown') }}>
                                            {/* <NavLinks to='menu' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                            Menu
                                        </NavLinks> */}
                                            <NavLinks to='/menu' onClick={() => { onClickdropdown('menudropdown') }}>
                                                {m.name} <NavI icon={faCaretDown}></NavI>
                                            </NavLinks>
                                            {menudropdown && <Dropdown id={m.mainId} />}
                                        </NavItem>
                                    )
                                }
                                if (m.mainId === 2) {
                                    return (

                                        <NavItem onMouseEnter={() => { onMouseEnter('coffeedropdown') }} onMouseLeave={() => { onMouseLeave('coffeedropdown') }}>
                                            <NavLinks to='/coffee' onClick={() => { onClickdropdown('coffeedropdown') }}>
                                                {m.name} <NavI icon={faCaretDown}></NavI>
                                            </NavLinks>
                                            {coffeedropdown && <Dropdown id={m.mainId} />}
                                        </NavItem>
                                    )
                                }
                                if (m.mainId === 3) {
                                    return (

                                        <NavItem >
                                            <NavLinks to='/up'>
                                                {m.name}
                                            </NavLinks>
                                        </NavItem>
                                    )
                                }
                                if (m.mainId === 4) {
                                    return (

                                        <NavItem onMouseEnter={() => { onMouseEnter('newsdropdown') }} onMouseLeave={() => { onMouseLeave('newsdropdown') }}>
                                            <NavLinks to='/news' onClick={() => { onClickdropdown('newsdropdown') }}>
                                                {m.name} <NavI icon={faCaretDown}></NavI>
                                            </NavLinks>
                                            {newsdropdown && <Dropdown id={m.mainId} />}
                                        </NavItem>
                                    )
                                }
                            })}
                        </NavMenu>
                        <NavBtn>
                            {token ?
                                <>
                                    <NavLinks to='/mypage'>마이페이지</NavLinks>
                                    <NavLinks onClick={onSignout}>로그아웃</NavLinks>
                                </>
                                :
                                <>
                                    <NavLinks onClick={onSignin}>Sign In</NavLinks>
                                    {signin && <Sginin open={signin} setOpen={setSignin} />}
                                </>
                            }
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;