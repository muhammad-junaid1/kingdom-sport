import React from 'react';
import MatchWinner from './MatchWinner';
import SVGIcons from "./SvgIcons";

const MatchWinnersList = ({Icon, sport, winnersData}) => {
    return (
        <>
            <div className="winners-container">
            <p className="about-container">{<Icon/>} {sport}</p>
                {winnersData.map((match) => {
                    return <MatchWinner team1={match.team1} team2={match.team2} winner={match.winner} activity={match.activity}/>
                })}
            </div>
        </>
    );
};


export default MatchWinnersList;