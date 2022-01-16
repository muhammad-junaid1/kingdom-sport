import React from "react";
import "../css/Match.css";
import MatchDetails from "./MatchDetails";

const Match = ({ sport, Icon }) => {
  return (
    <>
      <div className="match">
        <div className="match__header">
          <p>
            <Icon /> {sport}
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
              <MatchDetails
                team={{
                  left: { name: "Napoli", icon: "logo", score: 1 },
                  right: { name: "Leicester City", icon: "logo1", score: 4 },
                }}
                tour={{icon: "logo", name: "UEFA EUORUPA LEAGUE"}}
                time={[4, 83]}
                ratios={[]}
                isLive={true}
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Match;
