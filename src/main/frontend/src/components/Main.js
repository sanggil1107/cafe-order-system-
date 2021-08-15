import React from 'react';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import { homeOne, homeThree, homeTwo } from './InfoSection/Data';
import InfoSection from './InfoSection/InfoSection';
import Navbar from './Navbar/Navbar';
import ScrollToTop from './ScrollToTop';
import Services from './Services/Services';


const Main = () => {

    return (
        <>
            <HeroSection/>
            <InfoSection {...homeOne} />
            <InfoSection {...homeTwo} />
            {/* <Services /> */}
            <InfoSection {...homeThree} />

        </>
    );
}

export default Main;