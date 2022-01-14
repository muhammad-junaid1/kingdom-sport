import React from 'react';
import {useLocation} from "react-router-dom";

const Live = () => {
    const {search} = useLocation();
    const params = new URLSearchParams(search);
    let paramObj = {};
    for(var value of params.keys()) {
         paramObj[value] = params.get(value);
     }
    return (
        <>
            <h1>Live</h1>
            {Object.keys(paramObj).map((i) => {
                return <p>{i}</p>
            })}
        </>
    );
};


export default Live;