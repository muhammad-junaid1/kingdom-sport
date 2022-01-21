import React from "react";
import SVGIcons from "../../SvgIcons";
import "../css/Totals.css";

const Totals = ({Icon, headline, numbersText, increase}) => {
  return (
    <>
      <div className="totals">
        <div className="totals__content">
          <div className="totals__icon">
            <Icon />
          </div>
          <div className="totals__numbers">
            <p>{headline}</p>
            <h1>{numbersText}</h1>
          </div>
          <div className="totals__increase">
            <SVGIcons.IncreaseArrowUp />
            <p>+{increase}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Totals;
