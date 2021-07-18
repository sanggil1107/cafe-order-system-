//rface
import React from 'react';
import Video from '../Videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <>
            {/* <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
                </HeroBg>
            </HeroContainer> */}
            <div className="container">
                <div className="herobg">
                    <video className="videobg" autoPlay loop muted src={Video} type='video.mp4'></video>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
