import React from "react";
import "../css/Button.css";

// Valid classe options for button
const TYPES = ["primary", "secondary"];
const COLORS = ["green", "violet", "grey", "red"];
const SIZES = ["small", "normal"];

const Button = ({ children, type, color, size, isDisabled, betButton }) => {
  // Create dynamic classes for button
  let getType = "btn-primary";
  let getColor = `btn--${type ? type : "primary"}-color`;
  let getSize = "btn--normal-size";
  if (type) {
    getType = TYPES.includes(type) ? `btn-${type}` : "btn-primary";
  }
  if (color) {
    getColor = COLORS.includes(color)
      ? `btn--${color}-color`
      : `btn--${type}-color`;
  }
  if (size) {
    getSize = SIZES.includes(size) ? `btn--${size}-size` : `btn--normal-size`;
  }
  return (
    <>
      {betButton ? (
        <button className="btn bet-button">{children}</button>
      ) : (
        <button
          className={`btn ${getType} ${getColor} ${getSize}`}
          disabled={isDisabled ? true : false}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
