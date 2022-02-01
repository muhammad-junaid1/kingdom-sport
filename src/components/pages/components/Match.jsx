import React, {useContext, useState, useEffect} from "react";
import "../css/Match.css";
import Button from "../../Button";
import SVGIcons from "../../SvgIcons";
import MatchDetails from "./MatchDetails";
import sampleData from "../../../sampleData";

const Match = ({ sport, Icon, data, isLive,tourId, tourIcon, tourName,isFavPage, isTour}) => {
  const FavIcon = SVGIcons["Heart"];
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if(isTour) {
      if(isFavPage || sampleData.allTours.find((t) => t.id === tourId).isFav) {
        setIsFav(true);
      }
    }
  }, []);
  return (
    <>
      <div className="match">
        <div className="match__header">
          <p>
          {isTour &&
        [isFav ? <FavIcon/> : <FavIcon color="#48484A"/>
        ]}
       {isTour ? <><img style={{marginRight: 5}} src={require(`../../../assets/tournament-logos/${tourIcon}.png`)} alt="" />{tourName}</> :
       <>
        <Icon color="white"/> {sport}
        </>
       }
          </p>
          {isTour && <Button type="primary" color="grey" size="small">See more</Button>
}
        </div>
        <div className="match__body">
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th>MATCH</th>
                <th>TIME</th>
                <th>MATCH WINNER</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, index) => {
                  return <MatchDetails isTour={isTour} data={d} isLive={isLive && true} highlightScores={isLive ? (index === 0 ? true : false) : false}/>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Match;
