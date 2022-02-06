import React from 'react';
import MatchWinner from './MatchWinner';

/**
 * 
 * Used in bets container
 * Shows the collection of match winner blocks/items
 * 
 */
const MatchWinnersList = ({Icon, sport, winnersData}) => {
    return (
        <>
            <div className="winners-container">
            <p className="about-container">{<Icon/>} {sport}</p>
                {winnersData.map((match, index) => {
                    return <MatchWinner key={index} team1={match.team1} team2={match.team2} winner={match.winner} activity={match.activity} notBet={true}/>
                })}
            </div>
        </>
    );
};


export default MatchWinnersList;