import React from "react";
import MatchWinner from "./MatchWinner";
import SVGIcons from "./SvgIcons";
import sampleData from "../sampleData";

/**
 * 
 * This component is rendered when *My bets* button is toggled on (in bets container)
 * This also changes the content/styles based whether item/items are settled or not
 * It also defines the UI, depending on if the bet is lost or won
 * 
 */
const MyBets = ({
  id,
  date,
  loseBet,
  activity,
  betAmount,
  winAmount,
  settled,
  crypto,
}) => {
  return (
    <>
      <div className="my-bets">
        <div className="details">
          <div className="left">
            <span>{id}</span>
            <p>{date}</p>
          </div>
          <div className="right">
            <span>Copy Bet ID</span>
            <SVGIcons.CopyBetID />
          </div>
        </div>
        {crypto ? (
          <>
           {crypto.map((item, index) => {
             return <MatchWinner key={index} crypto={{...item}}/>
           })}
           <hr style={{border: "1px solid #2C2C2E", height: 1}}/>
          </>
        ) : (
          <>
            <MatchWinner
              {...sampleData.matchWinners[0]}
              noDeleteIcon={true}
              footerRightAlign={true}
              loseBet={loseBet}
              notBet={false}
            />
            <MatchWinner
              {...sampleData.matchWinners[0]}
              noDeleteIcon={true}
              footerRightAlign={true}
              loseBet={loseBet}
              notBet={false}
            />
            <MatchWinner
              {...sampleData.matchWinners[0]}
              noDeleteIcon={true}
              footerRightAlign={true}
              loseBet={loseBet}
              notBet={false}
            />
          </>
        )}

        {!crypto && (
          <div className="odds">
            <p>ODDS</p>
            <span style={{ color: loseBet && settled && "#FF453A" }}>
              <SVGIcons.Activity color={loseBet && settled && "#FF453A"} />
              {activity}
            </span>
          </div>
        )}
        <div className="amounts">
          <div className="bet-amount">
            <p>Bet amount</p>
            <p className="amount">{betAmount}</p>
          </div>
          <div
            className={`win${loseBet && settled ? " bet-lose" : " bet-won"}${
              !settled ? " possible-win" : ""
            }`}
          >
            {settled && loseBet && <p>Lose</p>}
            {settled && !loseBet && <p>Won</p>}
            {!settled && <p>Possible win</p>}
            <p className="amount">{winAmount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBets;
