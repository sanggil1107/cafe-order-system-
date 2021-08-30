import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import { homeOne, homeThree, homeTwo } from './InfoSection/Data';
import InfoSection from './InfoSection/InfoSection';


const Main = () => {

    return (
        <>
            <HeroSection/>
            <InfoSection {...homeOne} />
            <InfoSection {...homeTwo} />
            <InfoSection {...homeThree} />

        </>
    );
}

export default Main;