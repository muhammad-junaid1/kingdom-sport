import React from 'react';
import SVGIcons from "../../SvgIcons";
import "../css/Totals.css";

const Totals = () => {
    return (
        <>
            <div className="totals">
                    <div className="totals__content">
                        <div className="totals__icon">
                            <SVGIcons.DollarSquare/>
                        </div>
                        <div className="totals__numbers">
                            <p>Total pool</p>
                          <h1>8,633,384.00 BCR</h1>
                        </div>
                        <div className="totals__increase">
                            <SVGIcons.IncreaseArrowUp/>
                            <p>+0.19%</p>
                        </div>
                    </div>
            </div>   
        </>
    );
};


export default Totals;