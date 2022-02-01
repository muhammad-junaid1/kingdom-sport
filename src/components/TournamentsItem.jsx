import React from 'react';
import SVGIcons from "./SvgIcons";

const TournamentsItem = ({isFav, tourLogo, tourText, numbers, index}) => {
    return (
        <>
            <div className="tour-item" style={{background: index%2 !== 0 ? "#1C1C1E" : "#141415"}}>
                <div className="left">
                {isFav ? <SVGIcons.Favourite color="#743EE8"/>
                : <SVGIcons.Favourite/>}
                 <img src={require(`../assets/tournament-logos/${tourLogo}.png`)} alt=''/>
                    <p>{tourText}</p>
                </div>
                <div className="right">
                    <div style={{background: index%2===0 ? "#1C1C1E" : ""}}>+{numbers}</div>
                </div>
            </div>
        </>
    );
};


export default TournamentsItem;