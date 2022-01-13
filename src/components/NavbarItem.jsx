import React from "react";
import SVGIcons from "./SvgIcons";
import {NavbarContext} from "./Main";
import { NavLink } from "react-router-dom";

const NavbarItem = ({
  Icon,
  text,
  number,
  isDropDown,
  isHome,
  isLive, collapse, active, onToggle, target, noIcon, children
}) => {

  const {isMobile, setShowNavbar, setCollapseNavbar} = React.useContext(NavbarContext);
  const onToggleAndCollapse = () => {
    setCollapseNavbar(!collapse);
    onToggle();
  }
  const HideNavOnClickOnMobile = () => {
    if(isMobile){
        setShowNavbar(false);
    }
  }

  return (
    <>
    {target ?  <NavLink to={target}
        className={`navbar__item${isDropDown ? " navbar__item--dropdown" : ""}${
          active ? " active-navbar-item" : ""}${isLive ? " navbar__item-live" : ""}`}
        onClick={(isDropDown && !collapse) ? onToggle : (isDropDown ? onToggleAndCollapse : HideNavOnClickOnMobile)}
      >
        {(collapse) ? (
          [!noIcon && <Icon />]
        ) : (
          <>
            <div className="left">
              {children}
              {!noIcon && <Icon />}
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
      </NavLink> :
      <div
        className={`navbar__item${isDropDown ? " navbar__item--dropdown" : ""}${
          active ? " active-navbar-item" : ""}${isLive ? " navbar__item-live" : ""}`}
        onClick={(isDropDown && !collapse) ? onToggle : (isDropDown ? onToggleAndCollapse : null)}
      >
        {collapse ? (
          [!noIcon &&<Icon />]
        ) : (
          <>
            <div className="left">
              {!noIcon && <Icon />}
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
      </div>}
    </>
  );
};

NavbarItem.defaultProps = {
  isDropDown: "true",
};

export default NavbarItem;
