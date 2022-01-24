import React from 'react';
import SVGIcons from "./SvgIcons";

const MatchWinner = ({team1, team2, winner, activity, noDeleteIcon, footerRightAlign, loseBet, notBet, crypto}) => {
    if(!crypto) {
    return (
        <>
            <div className="match-winner">
                <div className="match-winner__header">
                    <div className="left">
                        <p className="team1">{team1}</p>
                        <span>vs</span>
                        <p className="team2">{team2}</p>
                    </div>
                    <div className="right">
                        {!noDeleteIcon &&<SVGIcons.Trash/>}
                    </div>
                </div>
                <div className="match-winner__body">
                        <p className="fw-bold">Match Winner - {winner}</p>
                </div>
                <div className="match-winner__footer">
                    <p style={{justifyContent: footerRightAlign ? "flex-end" : "", color: (!notBet &&loseBet) && "#FF453A"}}><SVGIcons.Activity color={(!notBet && loseBet) && "#FF453A"}/>{activity}</p>
                </div>
            </div>
        </>
    );
} else {
    return <>
        <div className="cryptobet-in-bets">
            <div className="cryptobet-in-bets__body">
            <p>{crypto.details}</p>{!noDeleteIcon &&<SVGIcons.Trash/>}

            </div>
            <div className="cryptobet-in-bets__footer">
            {crypto.betType === "moon" ? 
                    <p className='fw-bold' style={{color: "#32D74B", display: "flex", alignItems: "center"}}><SVGIcons.Moon color="#32D74B"/> MOON: {crypto.betValue}</p>
            : <p className='fw-bold' style={{color: "#FF453A", display: "flex", alignItems: "center"}}><SVGIcons.Moon color="#FF453A"/> REKT: {crypto.betValue}</p>}
                </div>
        </div>
    </>
}
};

export default MatchWinner;