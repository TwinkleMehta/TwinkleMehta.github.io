import React, {useState} from 'react';
import AllLinks from '../AllLinks.js';
import HeroSection from '../HeroSection.js';
import '../../App.css';

function MainPage() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <HeroSection/>
            <AllLinks/>
      </> 
    );
}

export default MainPage;