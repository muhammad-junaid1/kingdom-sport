import React from "react";
import Button from "./Button";
import SVGIcons from "./SvgIcons";
import "../css/MatchBanner.css";
import "../css/circle.css";

const MatchBanner = ({ bets, teams, dateTime, timeForLive, isPreMatch }) => {
  return (
    <>
      <div className="match-banner">
      {isPreMatch ?
        <div className="match-banner__content">
          <p className="date-time">{dateTime}</p>
          <div className="match-banner__teams">
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
          <div className="match-banner__bets">
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
       :  (<div className="match-banner__content for-livematch">
          <p className="date-time" style={{color: "#FF453A"}}>{timeForLive}</p>
          <div className="match-banner__teams">
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
            <div className="teams-separator"  style={{margin: "0"}}>
            <div
                className={`score-numbers`}  style={{margin: "0 4rem"}}
              >
                  <>
                    <p className="team-left-score">{teams.a.score}</p>
                    <span style={{ margin: "0 8px" }}>:</span>
                    <p className="team-right-score">{teams.b.score}</p>
                    <div className="scores-border-container">
                      <div className="scores-border"></div>
                    </div>
                  </>
                </div>
                <div className="match__stats">
                  <div className="stats__teams">
                  <img src={require(`../assets/team-logos/${teams.a.logo}.png`)} alt="" />
                  <img src={require(`../assets/team-logos/${teams.b.logo}.png`)} alt="" />
                  </div>
                  <div className="stats__body">
                    <table>
                      <thead>
                        <th>H1</th>
                        <th><div className="yellow-card" style={{width: 10, height: 14, backgroundColor: "#F2C94C"}}></div></th>
                        <th><div className="yellow-card" style={{width: 10, height: 14, backgroundColor: "#FF453A"}}></div></th>
                        <th><SVGIcons.Flag/></th>
                      </thead>
                      <tbody>
                        <tr>
                          {Object.keys(teams.a.stats).map((key) => {
                            return <td>{teams.a.stats[key]}</td>
                          })}
                        </tr>
                        <tr>
                        {Object.keys(teams.b.stats).map((key) => {
                            return <td>{teams.b.stats[key]}</td>
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
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
          <div className="match-banner__bets">
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
        </div>)}
      </div>
    </>
  );
};

export default MatchBanner;
