import React, { useContext } from 'react';
import Avatar from "../assets/avatar.png";
import SVGIcons from "./SvgIcons";
import { HeaderContext } from './Main';

import "../css/Balance.css";

const Balance = () => {
    const {setNoCryptoBets, setNoSportsBets} = useContext(HeaderContext);

    // For demonstrating empty bets container (example)
    const handleClick = () => {
        setNoCryptoBets(true);
        setNoSportsBets(true);
    }
    return (
        <div className="balance-container" onClick={handleClick}>
                <div className="left">
                    <span>0xe1B2...5c00</span>
                    <p><SVGIcons.EmptyWallet/> 676.00 BCR</p>
                </div>
                <div className="right">
                    <img src={Avatar} alt="" />
                </div>
        </div>
    );
};


export default Balance;