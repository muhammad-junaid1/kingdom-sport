import React from 'react';
import Navbar from "./Navbar";
import sampleData from "../sampleData";

const FavNavbar = ({isMobile, forMobile, showNavbar, collapse}) => {
    return (
        <>
            <Navbar isMobile={isMobile} forMobile={forMobile} showNavbar={showNavbar} collapse={collapse} isFav={true} favNavbarData={sampleData.favNavbarData}/>
        </>
    );
};


export default FavNavbar;