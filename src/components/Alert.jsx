import React from 'react';
import SVGIcons from "./SvgIcons";
import "../css/Alert.css";

const Alert = ({type, show}) => {

    if(type==="success") {

    return (
        <>
            <div className={`alert-container alert--success${show ? " show" : ""}`}>
                <div className="alert-body">
                    <SVGIcons.TickCircle/>
                    <p>Transaction successful</p>
                    <SVGIcons.CloseMenu color="#20622B"/>
                </div>
            </div>  
        </>
    );
} else if(type==="fail") {
    return (
        <>
            <div className={`alert-container alert--fail${show ? " show" : ""}`}>
                <div className="alert-body">
                    <SVGIcons.Danger color="#FF453A"/>
                    <p>Transaction failed</p>
                    <SVGIcons.CloseMenu color="#722824"/>
                </div>
            </div>  
        </>
    );
} else if(type==="nosync") {
    return (
        <>
            <div className={`alert-container alert--nosync${show ? " show" : ""}`}>
                <div className="alert-body">
                    <SVGIcons.Danger color="#743EE8"/>
                    <p>Your system is out of sync</p>
                    <SVGIcons.CloseMenu color="#4E2D93"/>
                </div>
            </div>  
        </>
    );
} else return null;

};


export default Alert;