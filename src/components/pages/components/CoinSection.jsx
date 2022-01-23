import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import SVGIcons from "../../SvgIcons";
import "../css/CoinSection.css";
import CryptoBet from './CryptoBet';

const CoinSection = ({coin, endTime, bet, prices}) => {
    const Icon = SVGIcons.CryptoIcons[coin.icon];
    return (
        <>
            <div className="coin-section">
                <div className="coin-section__header">
                    <BreadCrumbs items={["CRYPTO", coin.details()]}/>
                </div>
                <div className="coin-section__content">
                        <div className="coin-content__container">
                        <div className="left">
                            <p className='coin-content__header'><Icon color="#743EE8"/> {coin.text}</p>
                            <h2 className="coin-content__details">{coin.details()}</h2>
                            <p className='coin-content__endtime'><span className='fw-bold'>END TIME</span> {endTime[0]} {endTime[1]}</p>
                            <div className="coin-content__prices">
                                <p className="prices__locked"><span>Locked price</span>{prices.locked}</p>
                                <p className="prices__closed"><span>Closed price</span>{prices.closed}</p>
                            </div>
                        </div>
                        <div className="right">
                        <div className="coin-content__crypto-bets">
                            <CryptoBet type="moon" {...bet}/>
                            <CryptoBet type="rekt" {...bet}/>
                        </div>
                        </div>
                        </div>
                        <div className="coin-content__graph">
                            <h1>Graph will be here :)</h1>
                        </div>
                </div>
            </div>   
        </>
    );
};


export default CoinSection;