import React from "react";
import "../css/Match.css";
import MatchDetails from "./MatchDetails";

const Match = ({ sport, Icon, data, isLive, showBetsContainer}) => {
  return (
    <>
      <div className="match">
        <div className="match__header">
          <p>
           <Icon/> {sport}
          </p>
        </div>
        <div className="match__body">
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th>MATCH</th>
                <th>TIME</th>
                <th>MATCH-WINNER</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, index) => {
                  return <MatchDetails data={d} isLive={isLive} highlightScores={index === 0 ? true : false} showBetsContainer={showBetsContainer}/>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Match;
