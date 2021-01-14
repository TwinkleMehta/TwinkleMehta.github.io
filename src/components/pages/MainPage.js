import React from 'react';
import AllLinks from '../AllLinks.js';
import HeroSection from '../HeroSection.js';
import Footer from '../Footer.js';
import '../../App.css';

function MainPage() {
    return (
        <>
            <HeroSection/>
            <AllLinks/>
            <Footer/> 
        </> 
    );
}

export default MainPage;