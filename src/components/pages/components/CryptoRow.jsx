import React, {useContext} from "react";
import "../css/CryptoRow.css";
import SVGIcons from "../../SvgIcons";
import CryptoBet from "./CryptoBet";
import { AllRoutesContext } from "../../Main";

const CryptoRow = ({coin, endTime, prices, bet}) => {
    const {showBetsContainer, isMobile} = useContext(AllRoutesContext);
    const Icon = SVGIcons.CryptoIcons[coin.icon];
  return (
    <>
      <tr>
        <td>
          <div>
              <div className="coin">
                    <Icon/>
                    <p>BTC touch {coin.price} {!isMobile && <br />} by {coin.date}</p>
              </div>
          </div>
        </td>
        <td>
          <div><div className="endtime" style={{marginRight: showBetsContainer ? "1.5rem" : ""}}>
              <p>{endTime[0]}</p>
              <p>{endTime[1]}</p>
          </div> </div>
        </td>
        <td>
          <div>
              <div className="crypto-bets">
                  <CryptoBet type="moon" {...bet}/>
                  <CryptoBet type="rekt" {...bet}/>
              </div>
          </div>
        </td>
        <td>
            <div>
                <div className="prices">
                    <p><span>Locked Price</span> {prices.locked}</p>
                    <p><span>Closed Price</span> {prices.closed}</p>
                </div>
            </div>
        </td>
      </tr>
    </>
  );
};

export default CryptoRow;
