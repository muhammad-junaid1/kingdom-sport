import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import Match from './components/Match';
import SVGIcons from "../SvgIcons";
import sampleData from "../../sampleData";

const Live = ({showBetsContainer}) => {
    const {search} = useLocation();
    const [allParams, setAllParams] = useState({});

     useEffect(() => {
        const params = new URLSearchParams(search);
        let paramObj = {};
        for(var value of params.keys()) {
             paramObj[value] = params.get(value);
         }
         setAllParams(paramObj);
     }, [search]);
    return (
        <>
        <div className="live-matches">
        {Object.keys(allParams).length === 0 && sampleData.liveNavItems.map((item) => {
           return <Match isLive={true} isFav={item.isFav} isTour={false} sport={item.text} data={item.matchData} Icon={SVGIcons[item.icon]} />
        })}

            {Object.keys(allParams).length !== 0 && Object.keys(allParams).map((i) => {
                return sampleData.liveNavItems.filter((item) => item.text === i).map((i) =>{
                    return <Match isLive={true} isFav={i.isFav} isTour={false} sport={i.text} data={i.matchData} Icon={SVGIcons[i.icon]}/>
                })

            })}
</div>
        </>
    );
};


export default Live;