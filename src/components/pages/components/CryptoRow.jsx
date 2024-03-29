import React, { useContext } from "react";
import "../css/CryptoRow.css";
import SVGIcons from "../../SvgIcons";
import CryptoBet from "./CryptoBet";
import { ContentRoutesContext } from "../../Main";

const CryptoRow = ({ coin, endTime, prices, bet }) => {
  const { showBetsContainer, isMobile } = useContext(ContentRoutesContext);
  const Icon = SVGIcons.CryptoIcons[coin.icon];
  return (
    <>
      <tr>
        <td className="coin-container">
          <div>
            <div className="coin">
              <Icon />
              <p>
                {coin.text} touch {coin.price} {!isMobile && <br />} by {coin.date}
              </p>
            </div>
          </div>
        </td>
        <td>
          <div style={{ display: isMobile ? "block" : "" }}>
            <div
              className="endtime"
              style={{ marginRight: showBetsContainer ? "1.5rem" : "" }}
            >
              {isMobile ? (
                <p>
                  Market ends at {endTime[0]} {endTime[1]}
                </p>
              ) : (
                <>
                  <p>{endTime[0]}</p>
                  <p>{endTime[1]}</p>
                </>
              )}
            </div>
          </div>
        </td>
        {isMobile &&
        <td>
          <div>
            <div className="prices">
              <p>
                <span>Locked Price</span> {prices.locked}
              </p>
              <p>
                <span>Closed Price</span> {prices.closed}
              </p>
            </div>
          </div>
        </td>
        }
        <td>
          <div>
            <div className="crypto-bets" style={{marginRight: showBetsContainer ? "4px" : "", width: showBetsContainer ? "260px": ""}}>
              <CryptoBet type="moon" {...bet.moon} />
              <CryptoBet type="rekt" {...bet.rekt} />
            </div>
          </div>
        </td>
        {!isMobile &&
        <td>
          <div>
            <div className="prices">
              <p>
                <span>Locked Price</span> {prices.locked}
              </p>
              <p>
                <span>Closed Price</span> {prices.closed}
              </p>
            </div>
          </div>
        </td>
        }
      </tr>
    </>
  );
};

export default CryptoRow;
