import React, { useState } from 'react';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import { homeOne, homeThree, homeTwo } from './InfoSection/Data';
import InfoSection from './InfoSection/InfoSection';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
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
            <HeroSection/>
            <InfoSection {...homeOne} />
            <InfoSection {...homeTwo} />
            <Services />
            <InfoSection {...homeThree} />
            <Footer />
        </>
    );
}

export default Main;