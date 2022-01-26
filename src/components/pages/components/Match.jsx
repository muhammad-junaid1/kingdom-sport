import React from "react";
import "../css/Match.css";
import Button from "../../Button";
import MatchDetails from "./MatchDetails";

const Match = ({ sport, Icon, data, isLive, FavIcon, tourIcon, tourName, isFav}) => {
  return (
    <>
      <div className="match">
        <div className="match__header">
          <p>
        {isFav && <FavIcon/>}
       {isFav ? <><img style={{marginRight: 5}} src={require(`../../../assets/tournament-logos/${tourIcon}.png`)} alt="" />{tourName}</> :
       <>
        <Icon color="white"/> {sport}
        </>
       }
          </p>
          {isFav && <Button type="primary" color="grey" size="small">See more</Button>
}
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
                  return <MatchDetails isFav={isFav} data={d} isLive={isLive} highlightScores={isLive ? (index === 0 ? true : false) : false}/>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Match;
