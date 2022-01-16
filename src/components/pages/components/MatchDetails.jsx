import React from "react";
import "../css/MatchDetails.css";

const MatchDetails = ({tour, team, ratios, isLive, time, highlightScores}) => {
  return (
    <tr>
      <td>
        <div className="info">
        <div className="tournament">
        <img className="tournament-icon" src={require(`../../../assets/tournament-logos/${tour.icon}.png`)} alt="" />
          <p className="tournament-name fw-bold">{tour.name}</p>
          </div>
          <div className="scores">
            <div className="team-left">
              <p className="team-name">{team.left.name}</p>
              <img className="team-icon" src={require(`../../../assets/team-logos/${team.left.icon}.png`)} alt="" />
            </div>
            <div className="score">
                <div className={`score-numbers${highlightScores ? " highlight-scores" : ""}`}>
                    <p className="team-left-score">{team.left.score}</p>
                    <span style={{margin: "0 8px"}}>:</span>
                    <p className="team-right-score">{team.right.score}</p>
                    <div className="scores-border-conainer">
                        <div className="scores-border">
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-right">
              <img className="team-icon" src={require(`../../../assets/team-logos/${team.right.icon}.png`)} alt="" />
            <p className="team-name">{team.right.name}</p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="time">
            <div className={`time__content${isLive ? " live" : ""}`}>
                {isLive ? <><p>Quarter {time[0]}</p>
                <p>`{time[1]}</p></> : <>
                    <p>{time[0]}</p>
                    <p>{time[1]}</p>
                </> 
                }
            </div>
        </div>
      </td>
      <td>
        <div className="winner-container">
            <div className="ratios">
            {ratios.length === 0 && <>
            <div className="ratio"><span>-</span></div>
            <div className="ratio"><span>-</span></div>
            <div className="ratio"><span>-</span></div>
            <div className="ratio"><span>-</span></div>
            </>
            }
            {(ratios.length !== 0 ) && ratios.map(ratio =>{
                    return<div className="ratio">
                    <p>{ratio.content[0]}</p>
                    <p>{ratio.content[1]}</p>
                    </div>
                })}
                </div>
        </div>
      </td>
    </tr>
  );
};

export default MatchDetails;
