import React from 'react';
import SVGIcons from "./SvgIcons";

const MatchWinner = ({team1, team2, winner, activity, noDeleteIcon, footerRightAlign}) => {
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
                    <p style={{justifyContent: footerRightAlign ? "flex-end" : ""}}><SVGIcons.Activity/>{activity}</p>
                </div>
            </div>
        </>
    );
};

export default MatchWinner;