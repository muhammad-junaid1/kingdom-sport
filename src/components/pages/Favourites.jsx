import React from 'react';
import sampleData from "../../sampleData";
import Match from './components/Match';
import SVGIcons from "../SvgIcons";

const Favourites = () => {
    return (
        <>
           <div className="favourites">
                {sampleData.favItemsData.map((item) => {
                    const Icon = SVGIcons[item.icon];
                    return (<>
                        <div className="match__header" style={{marginBottom: 15}}>
                            <p><Icon color="white"/> {item.text}</p>
                        </div>
                        {item.tours.map((tour) => {
                            return <Match isLive={tour.isLive} data={tour.matchData} FavIcon={SVGIcons["Heart"]} tourName={tour.name} tourIcon={tour.icon} isFav={true}/>;
                        })}
                    </>)
                })}
           </div>
        </>
    );
};


export default Favourites;