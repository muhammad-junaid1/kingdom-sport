import React from 'react';
import Navbar from "./Navbar";
import sampleData from "../sampleData";

const LiveNavbar = ({isMobile, forMobile, showNavbar}) => {
    return (
        <>
            <Navbar isMobile={isMobile} forMobile={forMobile} showNavbar={showNavbar} isLive={true} liveNavbarData={sampleData.dropDownsData}/>
        </>
    );
};


export default LiveNavbar;