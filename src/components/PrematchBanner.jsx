import React from "react";
import Button from "./Button";
import "../css/PrematchBanner.css";
import "../css/circle.css";

const PrematchBanner = ({ bets, teams, dateTime, }) => {
  return (
    <>
      <div className="prematch-banner">
        <div className="prematch-banner__content">
          <p className="date-time">{dateTime}</p>
          <div className="prematch-banner__teams">
            <div className="team-a">
              <p>{teams.a.text}</p>
              <div className={`team__info c100 p${parseInt(teams.a.percent)} dark small`}>
              <span>
                <img src={require(`../assets/team-logos/${teams.a.logo}.png`)} alt="" />
                </span>
                <div className="slice">
                  <div className="bar" style={{borderColor: "#32D74B"}}></div>
                  <div className="fill" style={{borderColor: "#32D74B"}}></div>
                </div>
              </div>
              <p style={{color: "#32D74B"}}>{teams.a.percent}</p>
            </div>
            <p className="teams-separator">VS</p>
            <div className="team-b">
              <p>{teams.b.text}</p>
              <div className={`team__info c100 p${parseInt(teams.b.percent)} dark small`}>
              <span>
                <img src={require(`../assets/team-logos/${teams.b.logo}.png`)} alt="" />
                </span>
                <div className="slice">
                  <div className="bar" style={{borderColor: "#743EE8"}}></div>
                  <div className="fill" style={{borderColor: "#743EE8"}}></div>
                </div>
              </div>
              <p style={{color: "#743EE8"}}>{teams.b.percent}</p>
            </div>
          </div>
          <div className="prematch-banner__bets">
            {[0, 1, 2].map((i) => {
              return (
                <Button betButton={true}>
                  <p>{bets.data[i][0]}</p>
                  <p>{bets.data[i][1]}</p>
                </Button>
              );
            })}
            <Button betButton={true}>
              <p>+{bets.moreBets}</p>
              <p>bets</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrematchBanner;
