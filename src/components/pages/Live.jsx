import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

const Live = () => {
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
            <h1>Live</h1>
            {Object.keys(allParams).map((i) => {
                return <p>{i}</p>
            })}
        </>
    );
};


export default Live;