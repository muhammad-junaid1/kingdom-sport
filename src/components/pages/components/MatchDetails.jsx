import React, { useContext } from "react";
import "../css/MatchDetails.css";
import { ContentRoutesContext } from "../../Main";
import Button from "../../Button";

const MatchDetails = ({ data, isLive, highlightScores, isFav }) => {
  const { showBetsContainer, isMobile } = useContext(ContentRoutesContext);
  return (
    <tr>
      <td className="info-container">
        <div
          className="info"
        >
          {!isFav && (
            <div className="tournament">
              <img
                className="tournament-icon"
                src={require(`../../../assets/tournament-logos/${data.tour.icon}.png`)}
                alt=""
              />
              <p className="tournament-name fw-bold">{data.tour.name}</p>
            </div>
          )}
          <div className="scores">
            <div className="team-left">
              <p
                style={{ maxWidth: showBetsContainer ? "100px" : "120px" }}
                className="team-name"
              >
                {data.team.left.name}
              </p>
              <img
                className="team-icon"
                src={require(`../../../assets/team-logos/${data.team.left.icon}.png`)}
                alt=""
              />
            </div>
            <div className="score">
              <div
                className={`score-numbers${
                  highlightScores ? " highlight-scores" : ""
                }`}
              >
                {isLive ? (
                  <>
                    <p className="team-left-score">{data.team.left.score}</p>
                    <span style={{ margin: "0 8px" }}>:</span>
                    <p className="team-right-score">{data.team.right.score}</p>
                    <div className="scores-border-conainer">
                      <div className="scores-border"></div>
                    </div>
                  </>
                ) : (
                  <span style={{ fontSize: "1.2rem" }}>
                    VS
                  </span>
                )}
              </div>
            </div>
            <div className="team-right">
              <img
                className="team-icon"
                src={require(`../../../assets/team-logos/${data.team.right.icon}.png`)}
                alt=""
              />
              <p
                style={{ maxWidth: showBetsContainer ? "100px" : "120px" }}
                className="team-name"
              >
                {data.team.right.name}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className="time-container" style={{width: !showBetsContainer ? "25%" : ""}}>
        <div className="time">
          <div className={`time__content${isLive ? " live" : ""}`}>
            {isLive ? (
              <>
                <p>Quarter {data.time[0]}</p>
                <p>`{data.time[1]}</p>
              </>
            ) : (
              <>
                <p>{data.time[0]}</p>
                <p>{data.time[1]}</p>
              </>
            )}
          </div>
        </div>
      </td>
      <td className="winner-wrapper">
        <div
          className={`winner-container`}
          style={{ margin: showBetsContainer ? "0 3px" : "" }}
        >
          <div
            className={`ratios${
              showBetsContainer ? " bets-container-opened" : ""
            }`}
          >
            {(data.ratios.length === 0 && (showBetsContainer || isMobile)) && (
              <>
                <div className="ratio not-btn">
                  <p>-</p>
                </div>
                <div className="ratio not-btn">
                  <p>-</p>
                </div>
                <div className="ratio not-btn">
                  <p>-</p>
                </div>
              </>
            )}
            {data.ratios.length === 0 && (!showBetsContainer && !isMobile)&& (
              <>
                <div className="ratio not-btn">
                  <p>-</p>
                </div>
                <div className="ratio not-btn">
                  <p>-</p>
                </div>
                <div className="ratio not-btn">
                  <p>-</p>
                </div>
                <div className="ratio not-btn">
                  <p>-</p>
                </div>
                <div className="ratio not-btn">
                  <p>-</p>
                </div>
                <div className="ratio not-btn">
                  <p>-</p>
                </div>
                <div className="ratio not-btn">
                  <p>-</p>
                </div>
              </>
            )}
            {(data.ratios.length !== 0 && (showBetsContainer || isMobile)) &&
              data.ratios.slice(0, 3).map((ratio) => {
                return (
                  <div className="ratio">
                    <Button betButton={true}>
                      <p>{ratio[0]}</p>
                      <p>{ratio[1]}</p>
                    </Button>
                  </div>
                );
              })}
            {(data.ratios.length !== 0 && (!showBetsContainer && !isMobile)) &&
              data.ratios.slice(0, 7).map((ratio) => {
                return (
                  <div className="ratio">
                    <Button betButton={true}>
                      <p>{ratio[0]}</p>
                      <p>{ratio[1]}</p>
                    </Button>
                  </div>
                );
              })}

            <div className="ratio no-bg not-btn">
              {data.ratios.length === 0 ? "-" : `${data.moreRatios}+`}
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MatchDetails;
