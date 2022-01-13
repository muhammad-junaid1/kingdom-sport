import React from 'react';
import Avatar from "../assets/avatar.png";
import SVGIcons from "./SvgIcons";

import "../css/Balance.css";

const Balance = () => {
    return (
        <div className="balance-container">
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