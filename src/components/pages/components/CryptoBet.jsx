import React, {useContext} from 'react';
import "../css/CryptoRow.css";
import { ContentRoutesContext } from "../../Main";
import SVGIcons from "../../SvgIcons";

const CryptoBet = ({type, value, pool}) => {
    const {showBetsContainer} = useContext(ContentRoutesContext);
    const Icon = SVGIcons[type.charAt(0).toUpperCase() + type.slice(1)];
    return (
        <>
            <div className="crypto-bet" style={{width: showBetsContainer ? "100%" : "", margin: showBetsContainer ? "0 .4rem" : ""}}>
                <div className="crypto-bet__header">
                        <p style={{color: type==="moon" ? "#32D74B" : "#FF453A"}}><Icon/>{type.toUpperCase()}</p>
                        <p>{value}</p>
                </div>
                <hr />
                <div className="crypto-bet__footer">
                    <span>POOL</span>
                    <p>{pool}</p>
                </div>
            </div>
        </>
    );
};


export default CryptoBet;