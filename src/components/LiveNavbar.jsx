import React from 'react';
import Navbar from "./Navbar";
import sampleData from "../sampleData";

/**
 * 
 * This component renders the navbar for live page
 * containing only live data
 * 
 */
const LiveNavbar = ({isMobile, forMobile, showNavbar}) => {
    return (
        <>
            <Navbar isMobile={isMobile} forMobile={forMobile} showNavbar={showNavbar} isLive={true} liveNavbarData={sampleData.liveNavItems}/>
        </>
    );
};


export default LiveNavbar;