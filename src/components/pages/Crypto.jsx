import React from 'react';
import { useParams } from 'react-router-dom';

const  Crypto = () => {
    const {index} = useParams();
    return (
        <>
            <h1>Crypto</h1> <span>{index}</span>   
        </>
    );
};


export default Crypto;