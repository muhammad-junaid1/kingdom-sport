import React from 'react';
import Navbar from "./Navbar";
import data from "../sampleData";

/**
 * 
 * This component renders the navbar for crypto page
 * containing only crypto data
 * 
 */
const CryptoNavbar = ({isMobile, forMobile, showNavbar, cryptoActiveOrExpired, setCryptoActiveOrExpired}) => {
    return (
        <>
            <Navbar setCryptoActiveOrExpired={setCryptoActiveOrExpired} cryptoActiveOrExpired={cryptoActiveOrExpired} isMobile={isMobile} forMobile={forMobile} showNavbar={showNavbar} isCrypto={true} cryptoData={data.cryptoItems}/>
        </>
    );
};


export default CryptoNavbar;