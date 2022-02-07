import React from 'react';
import SVGIcons from "../../SvgIcons";
import Button from '../../Button';
import "../css/SliderItem.css";

const SliderItem = ({isLive, tourLogo, date, bgColor, bgImg, winningTeam, teams, bets}) => {
    return (
        <>
        <div className="slide__item">
               <div className="slide__container" style={{background: bgImg ? `url(${require(`../../../assets/${bgImg}.png`)}) ${bgColor}` : bgColor}}>
                    <img src={require(`../../../assets/tournament-logos/${tourLogo}.png`)} alt=""/>

                    <div className="slide__teams-scores">
                    <img src={require(`../../../assets/team-logos/${teams.a.logo}.png`)} alt="" />
                    <div className="score">
              <div
                className={`score-numbers`}
              >
                  <>
                    <p className="team-left-score">3</p>
                    <span style={{ margin: "0 8px" }}>:</span>
                    <p className="team-right-score">4</p>
                    <div className="scores-border-container">
                      <div className="scores-border"></div>
                    </div>
                  </>
                </div>
            </div>
            <img src={require(`../../../assets/team-logos/${teams.b.logo}.png`)} alt="" />

            </div>

            <div className="slide__date">
            {isLive ? <p className='slide__live-label'><SVGIcons.Live/>LIVE NOW</p>
 : <p>{date}</p>}
            </div>

            <div className="slide__teams-info">
                <h3>{teams.a.text} <span style={{color: winningTeam === "a" ? "#32D74B" : "#FF453A" }}>{teams.a.percent}</span></h3>
                <h3>{teams.b.text} <span style={{color: winningTeam === "b" ? "#32D74B" : "#FF453A" }}>{teams.b.percent}</span></h3>
            </div>

            <div className="slide__bets">
            {[0, 1, 2].map((i) => {
                return <Button betButton={true}>
                    <p>{bets.data[i][0]}</p>
                    <p>{bets.data[i][1]}</p>
                </Button>
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


export default SliderItem;