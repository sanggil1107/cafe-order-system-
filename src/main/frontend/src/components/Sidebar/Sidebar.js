import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarLink, SidebarRoute, SidebarMenu } from './SidebarElements';
 
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="menu" onClick={toggle}>Menu</SidebarLink>
                        <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                        <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                        <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
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
