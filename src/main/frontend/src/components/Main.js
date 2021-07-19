import React, { useState } from 'react';
import HeroSection from './HeroSection/HeroSection';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';


const Main = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection></HeroSection>
        </>
    );
}

export default Main;