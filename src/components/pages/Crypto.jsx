import React from "react";
import { useParams } from "react-router-dom";
import "./css/Crypto.css";
import CryptoRow from "./components/CryptoRow";
import CoinSection from "./components/CoinSection";
import sampleData from "../../sampleData";

const Crypto = ({cryptoActiveOrExpired, showBetsContainer}) => {
  const { coin } = useParams();
  if(cryptoActiveOrExpired === "active"){
  return (
    <>
      {coin &&
        sampleData.cryptoTable
          .filter((item) => item.coin.text.toLowerCase() === coin.toLowerCase())
          .map((item, index) => {
            return <CoinSection key={index} {...item} />;
          })}
     {!coin &&
      <div className="crypto">
        <div className="crypto__header">
          <h1>Crypto</h1>
          <p>
            How often do you successfully predict the cryptocurrency rate? Start
            earning money without trade. Just bet on the rise or fall of the
            cryptocurrency you like!
          </p>
        </div>
        <div className="crypto__body">
          <div className="crypto__content">
            <table cellSpacing={0} width="100%">
              <thead>
                <tr>
                  <th>COIN</th>
                  <th>END TIME</th>
                  <th>BET</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                 {sampleData.cryptoTable.map((item, index) => {
                    return <CryptoRow {...item} key={index}/>;
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     }
    </>
  );
    } else {
      return  <h1><u><i>Expired crypto items here</i></u></h1>
    }
};

export default Crypto;
