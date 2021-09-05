import React, { useState } from 'react';
import Dropdown from '../Navbar/Dropdown';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarLink, SidebarRoute, SidebarMenu } from './SidebarElements';
 
const Sidebar = ({ isOpen, toggle }) => {

    const [ menudropdown, setMenudropdown ] = useState(false);
    const [ coffeedropdown, setCoffeedropdown ] = useState(false);
    const [ newsdropdown, setNewsdropdown ] = useState(false);

    const onMouseEnter = (dropdown) => {
        if(dropdown === 'menudropdown') {
            setMenudropdown(true);
        }
        if(dropdown === 'coffeedropdown') {

            setCoffeedropdown(true);

        }
        if(dropdown === 'newsdropdown') {
            setNewsdropdown(true);
        }
    }

    const onMouseLeave = (dropdown) => {
        if(dropdown === 'menudropdown') {
            setMenudropdown(false);
        }
        if(dropdown === 'coffeedropdown') {
            setCoffeedropdown(false);
        }
        if(dropdown === 'newsdropdown') {
            setNewsdropdown(false);
        }
        
    }

    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="menu" onClick={toggle} onMouseEnter={() => {onMouseEnter('menudropdown')}} onMouseLeave={() => {onMouseLeave('menudropdown')}}>Menu <i className='fas fa-caret-down'></i></SidebarLink>
                        {menudropdown && <SidebarLink/>}
                        <SidebarLink to="coffee" onClick={toggle} onMouseEnter={() => {onMouseEnter('coffeedropdown')}} onMouseLeave={() => {onMouseLeave('coffeedropdown')}}>Coffee <i className='fas fa-caret-down'></i></SidebarLink>
                        {coffeedropdown && <SidebarLink/>}
                        <SidebarLink to="store" onClick={toggle}>Store</SidebarLink>
                        <SidebarLink to="news" onClick={toggle} onMouseEnter={() => {onMouseEnter('newsdropdown')}} onMouseLeave={() => {onMouseLeave('newsdropdown')}}>News <i className='fas fa-caret-down'></i></SidebarLink>
                        {newsdropdown && <SidebarLink/>}
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
