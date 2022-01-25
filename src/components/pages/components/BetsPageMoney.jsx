import React from 'react';
import "../css/BetsPageMoney.css";
import SVGIcons from "../../SvgIcons";

const BetsPageMoney = ({icon, text, money, variant}) => {
    const Icon = SVGIcons[icon];
    return (
        <>
            <div className={`bets-money__item${variant ? " color--green" : ""}`}>
                    <div className="left">
                            <div className="bets-money__icon">
                                <Icon/>
                            </div>
                    </div>
                    <div className="right">
                            <p className='fw-bold'>{text}</p>
                            <h1>{money}</h1>
                    </div>
            </div>   
        </>
    );
};


export default BetsPageMoney;