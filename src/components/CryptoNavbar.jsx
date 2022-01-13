import React from 'react';
import Navbar from "./Navbar";
import data from "../sampleData";
import {useParams} from "react-router-dom";

const CryptoNavbar = ({isMobile, forMobile, showNavbar}) => {
    const {type} = useParams();
    return (
        <>
            <Navbar isMobile={isMobile} index={type} forMobile={forMobile} showNavbar={showNavbar} isCrypto={true} cryptoData={data.cryptoItems}/>
        </>
    );
};


export default CryptoNavbar;