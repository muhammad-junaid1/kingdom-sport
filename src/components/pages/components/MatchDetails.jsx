import React, {useContext} from "react";
import "../css/MatchDetails.css";
import { AllRoutesContext } from "../../Main";

const MatchDetails = ({data, isLive, highlightScores, isFav}) => {
    const {showBetsContainer} = useContext(AllRoutesContext);
  return (
    <tr>
      <td>
        <div className="info" style={{paddingLeft: showBetsContainer ? "15px" : ""}}>
       {!isFav && <div className="tournament">
        <img className="tournament-icon" src={require(`../../../assets/tournament-logos/${data.tour.icon}.png`)} alt="" />
          <p className="tournament-name fw-bold">{data.tour.name}</p>
          </div>
       }
          <div className="scores">
            <div className="team-left">
              <p className="team-name">{data.team.left.name}</p>
              <img className="team-icon" src={require(`../../../assets/team-logos/${data.team.left.icon}.png`)} alt="" />
            </div>
            <div className="score">
                <div className={`score-numbers${highlightScores ? " highlight-scores" : ""}${(showBetsContainer && !isFav) ? " on-bets-show" : ""}`}>
                   {(!isFav || isLive) ? <><p className="team-left-score">{data.team.left.score}</p>
                    <span style={{margin: "0 8px"}}>:</span>
                    <p className="team-right-score">{data.team.right.score}</p>
                    <div className="scores-border-conainer">
                        <div className="scores-border">
                        </div>
                    </div></> : <span className="fw-bold" style={{fontSize: "1.3rem"}}>VS</span>}
                </div>
            </div>
            <div className="team-right">
              <img className="team-icon" src={require(`../../../assets/team-logos/${data.team.right.icon}.png`)} alt="" />
            <p className="team-name">{data.team.right.name}</p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="time">
            <div className={`time__content${isLive ? " live" : ""}`}>
                {isLive ? <><p>Quarter {data.time[0]}</p>
                <p>`{data.time[1]}</p></> : <>
                    <p>{data.time[0]}</p>
                    <p>{data.time[1]}</p>
                </> 
                }
            </div>
        </div>
      </td>
      <td>
        <div className={`winner-container${showBetsContainer ? " on-bets-show" : ""}`}>
            <div className="ratios">
            {data.ratios.length === 0 && <>
            <div className="ratio"><span>-</span></div>
            <div className="ratio"><span>-</span></div>
            <div className="ratio"><span>-</span></div>
            </>
            }
            {(data.ratios.length !== 0 ) && data.ratios.map(ratio =>{
                    return<div className="ratio">
                    <p>{ratio[0]}</p>
                    <p>{ratio[1]}</p>
                    </div>
                })}
                <div className="ratio no-bg"><span>{data.ratios.length === 0 ? "-" : `${data.moreRatios}+`}</span></div>
                </div>
        </div>
      </td>
    </tr>
  );
};

export default MatchDetails;
