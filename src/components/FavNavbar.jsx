import React from 'react';
import Navbar from "./Navbar";
import sampleData from "../sampleData";

/**
 * 
 * This component renders the navbar for favourites page
 * containing only fav data
 * 
 */
const FavNavbar = ({isMobile, forMobile, showNavbar, collapse}) => {
    return (
        <>
            <Navbar isMobile={isMobile} forMobile={forMobile} showNavbar={showNavbar} collapse={collapse} isFav={true} favNavbarData={sampleData.favNavbarData}/>
        </>
    );
};


export default FavNavbar;