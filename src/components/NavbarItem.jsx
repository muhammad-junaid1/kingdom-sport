import React from "react";
import SVGIcons from "./SvgIcons";
import {NavbarContext} from "./Main";

const NavbarItem = ({
  Icon,
  text,
  number,
  isDropDown,
  isHome,
  isLive, collapse, active, onToggle
}) => {

  const setCollapseNavbar = React.useContext(NavbarContext);
  const onToggleAndCollapse = () => {
    setCollapseNavbar(!collapse);
    onToggle();
  }

  return (
    <>
      <div
        className={`navbar__item${isDropDown ? " navbar__item--dropdown" : ""}${
          active ? " active-navbar-item" : ""}${isLive ? " navbar__item-live" : ""}`}
        onClick={(isDropDown && !collapse) ? onToggle : (isDropDown ? onToggleAndCollapse : null)}
      >
        {collapse ? (
          <Icon />
        ) : (
          <>
            <div className="left">
              <Icon />
              <p className="navbar__item-text">{text}</p>
            </div>
            <div className="right">
              {!isHome && <span className="navbar__item-number">{number}</span>}
              <div style={{ visibility: isDropDown ? "visible" : "hidden" }}>
                {active ? <SVGIcons.ArrowUp /> : <SVGIcons.ArrowDown />}
              </div>
            </div>
          </>
        )}

        {/* Border left */}
        <div
          className="active-border"
        ></div>
      </div>
    </>
  );
};

NavbarItem.defaultProps = {
  isDropDown: "true",
};

export default NavbarItem;
