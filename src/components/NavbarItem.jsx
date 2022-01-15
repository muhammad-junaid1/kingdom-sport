import React, {useState, useRef, useEffect} from "react";
import SVGIcons from "./SvgIcons";
import {NavbarContext} from "./Main";
import { NavLink, Link, useLocation } from "react-router-dom";

const NavbarItem = ({
  Icon,
  text,
  number,
  isDropDown,
  isHome,
  isLive, collapse, active, onToggle, target, noIcon, isCryptoItem, onCheck, activeRadio, forAll, setChecked, isLiveItem, isActiveLiveItem
}) => {
  const [activeLiveCheckBox, setActiveLiveCheckBox] = useState(false);
  const inputElement = useRef();

  // Determine the query params 
  const {search} = useLocation();
  let query = search;
  if(query.length === 0) {
    query += `?${text}=true&`;
  } else {
    if(!query.includes(text)) {
      query += `${text}=true&`;
    } else {
      query = query.replace(`${text}=true&`, "");
    }
  }

  const {isMobile, setShowNavbar, setCollapseNavbar, setShowBets} = React.useContext(NavbarContext);
  const onToggleAndCollapse = () => {
    setCollapseNavbar(!collapse);
    onToggle();
  } 
  const HideNavOnClickOnMobile = () => {
    if(isMobile){  
      setShowNavbar(false);
          setShowBets(false);
    }
    if(isCryptoItem && !forAll){
      onCheck();
    } if(forAll) {
      setChecked("all");
    }
  }

   const handleLiveItem =() =>{
    if(isLiveItem){
      inputElement.current.checked = true;
      setActiveLiveCheckBox(!activeLiveCheckBox);
      setShowNavbar(false);
      setShowBets(false);
    }
   }

 useEffect(() => {
  if(isActiveLiveItem) {
    inputElement.current.checked = true;
    setActiveLiveCheckBox(true);
  }
 }, [activeLiveCheckBox, isActiveLiveItem]);

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
              {(isCryptoItem) && <>
              <input style={{display: "none"}} type="radio" name="crypto" value={text} checked={activeRadio} onChange={HideNavOnClickOnMobile}/>
              <div className={`radio-icon${(activeRadio==="all" || activeRadio===true) ? " radio-active": ""}`}>
                <div className="active-radio-circle" style={{display: (activeRadio==="all" || activeRadio===true) ? "block" : "none"}}></div>
              </div>
              </>}

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
      (isLiveItem ? <Link to={query}>
        <div
        className={`navbar__item${isDropDown ? " navbar__item--dropdown" : ""}${
          active ? " active-navbar-item" : ""}${(isLive || activeLiveCheckBox) ? " navbar__item-live" : ""}${activeLiveCheckBox ? " live-active" : ""}`}
        onClick={(isDropDown && !collapse) ? onToggle : (isDropDown ? onToggleAndCollapse : handleLiveItem)}
      >
        {collapse ? (
          [!noIcon &&<Icon />]
        ) : (
          <>
            <div className="left">
              {(isLiveItem) && <>
              <input style={{display: "none"}} type="checkbox" name="live" value={text} ref={inputElement} checked={activeLiveCheckBox}/>
              <div className={`radio-icon${(activeLiveCheckBox) ? " live-checkbox-active": ""}`}>
                <div className="live-checkbox-active-inner" style={{display: activeLiveCheckBox ? "block" : "none"}}><SVGIcons.TickSquare/></div>
              </div>
              </>}
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
      </div>
      </Link>
      
      : <div
        className={`navbar__item${isDropDown ? " navbar__item--dropdown" : ""}${
          active ? " active-navbar-item" : ""}${isLive ? " navbar__item-live" : ""}`}
        onClick={(isDropDown && !collapse) ? onToggle : (isDropDown ? onToggleAndCollapse : handleLiveItem)}
      >
        {collapse ? (
          [!noIcon &&<Icon />]
        ) : (
          <>
            <div className="left">
              {(isLiveItem) && <>
              <input style={{display: "none"}} type="checkbox" name="live" value={text} ref={inputElement} checked={activeLiveCheckBox}/>
              <div className={`radio-icon${(activeLiveCheckBox) ? " radio-active": ""}`}>
                <div className="active-radio-circle" style={{display: activeLiveCheckBox ? "block" : "none"}}></div>
              </div>
              </>}
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
      </div>)}
    </>
  );
};

NavbarItem.defaultProps = {
  isDropDown: "true",
};

export default NavbarItem;
