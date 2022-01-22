import React from 'react';
import { useParams } from 'react-router-dom';
import "./css/Crypto.css";
import CryptoRow from "./components/CryptoRow";
import sampleData from "../../sampleData";

const  Crypto = () => {
    const {coin} = useParams();
    return (
        <>
            <div className="crypto">
                <div className="crypto__header">
                    <h1>Crypto</h1>
                    <p>How often do you successfully predict the cryptocurrency rate? Start earning money without trade. Just bet on the rise or fall of the cryptocurrency you like!</p>
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
                            {sampleData.cryptoTable.map((item) => {
                                return <CryptoRow {...item}/>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Crypto;