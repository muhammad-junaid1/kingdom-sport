import React from 'react';
import Navbar from "./Navbar";
import data from "../sampleData";

const CryptoNavbar = ({isMobile, forMobile, showNavbar}) => {
    return (
        <>
            <Navbar isMobile={isMobile} forMobile={forMobile} showNavbar={showNavbar} isCrypto={true} cryptoData={data.cryptoItems}/>
        </>
    );
};


export default CryptoNavbar;