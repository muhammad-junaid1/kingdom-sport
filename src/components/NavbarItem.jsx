import React, { useState, useRef, useEffect } from "react";
import SVGIcons from "./SvgIcons";
import { NavbarContext } from "./Main";
import { NavLink, Link, useLocation } from "react-router-dom";

const NavbarItem = ({
  Icon,
  text,
  number,
  isDropDown,
  isHome,
  isLive,
  collapse,
  active,
  onToggle,
  target,
  noIcon,
  isCryptoItem,
  onCheck,
  activeRadio,
  forAll,
  setChecked,
  isLiveItem,
  isActiveLiveItem,
  dropDownIcon
}) => {
  const [activeLiveCheckBox, setActiveLiveCheckBox] = useState(false);
  const inputElement = useRef();

  // Determine the query params for live navbar items
  const { search } = useLocation();
  let query = search;
  if (query.length === 0) {
    query += `?${text}=true&`;
  } else {
    if (!query.includes(text)) {
      query += `${text}=true&`;
    } else {
      query = query.replace(`${text}=true&`, "");
    }
  }

  // Determine the query params for sport navbar items
  let query2 = search;
  if(query2.length === 0) {
    query2 = `?sport=${text.toLowerCase()}`;
  } else {
    if(!query2.includes(text.toLowerCase())) {
      query2 = `?sport=${text.toLowerCase()}`;
    } else {
      query2 = "";
    }
  }

  const { isMobile, setShowNavbar, setCollapseNavbar, setShowBets } =
    React.useContext(NavbarContext);
  const onToggleAndCollapse = () => {
    setCollapseNavbar(!collapse);
    onToggle();
  };
  const HideNavOnClickOnMobile = () => {
    if (isMobile) {
      setShowNavbar(false);
      setShowBets(false);
    }
    if (isCryptoItem && !forAll) {
      onCheck();
    }
    if (forAll) {
      setChecked("all");
    }
    if (isLive) {
      setCollapseNavbar(false);
    }
  };

  const hideNavbarOnToggleSportItems=() => {
    if(isMobile) {
      setShowNavbar(false);
    }
  }

  const handleLiveItem = () => {
    if (isLiveItem) {
      inputElement.current.checked = true;
      setActiveLiveCheckBox(!activeLiveCheckBox);
      setShowNavbar(false);
      setShowBets(false);
    }
  };

  useEffect(() => {
    if (isActiveLiveItem) {
      inputElement.current.checked = true;
      setActiveLiveCheckBox(true);
    }
  }, [activeLiveCheckBox, isActiveLiveItem]);
  
  return (
    <>
    {/* If the item is a link */}
      {target ? (
        <NavLink
          to={target}
          className={`navbar__item${
            isDropDown ? " navbar__item--dropdown" : ""
          }${active ? " active-navbar-item" : ""}${
            isLive ? " navbar__item-live" : ""
          }`}
          onClick={
            isDropDown && !collapse
              ? onToggle
              : isDropDown
              ? onToggleAndCollapse
              : HideNavOnClickOnMobile
          }
        >
          {collapse ? (
            [!noIcon && <Icon />]
          ) : (
            <>
              <div className="left">
              {/* Crypto navbar items */}
                {isCryptoItem && (
                  <>
                    <input
                      style={{ display: "none" }}
                      type="radio"
                      name="crypto"
                      value={text}
                      checked={activeRadio}
                      onChange={HideNavOnClickOnMobile}
                    />
                    <div
                      className={`radio-icon${
                        activeRadio === "all" || activeRadio === true
                          ? " radio-active"
                          : ""
                      }`}
                    >
                      <div
                        className="active-radio-circle"
                        style={{
                          display:
                            activeRadio === "all" || activeRadio === true
                              ? "block"
                              : "none",
                        }}
                      ></div>
                    </div>
                  </>
                )}

                {!noIcon && <Icon />}
                <p className="navbar__item-text">{text}</p>
              </div>
              <div className="right">
                {!isHome && (
                  <span className="navbar__item-number">{number}</span>
                )}
                <div style={{ visibility: isDropDown ? "visible" : "hidden" }}>
                  {active ? <SVGIcons.ArrowUp /> : <SVGIcons.ArrowDown />}
                </div>
              </div>
            </>
          )}

          {/* Border left */}
          <div className="active-border"></div>
        </NavLink>

      ) : isLiveItem ? (
        <>
        {/* Live navbar item */}
        <Link to={query}>
          <div
            className={`navbar__item${
              isDropDown ? " navbar__item--dropdown" : ""
            }${active ? " active-navbar-item" : ""}${
              isLive || activeLiveCheckBox ? " navbar__item-live" : ""
            }${activeLiveCheckBox ? " live-active" : ""}`}
            onClick={
              isDropDown && !collapse
                ? onToggle
                : isDropDown
                ? onToggleAndCollapse
                : handleLiveItem
            }
          >
            {collapse ? (
              [!noIcon && <Icon />]
            ) : (
              <>
                <div className="left">
                  {isLiveItem && (
                    <>
                    {/* Live item */}
                      <input
                        style={{ display: "none" }}
                        type="checkbox"
                        name="live"
                        value={text}
                        ref={inputElement}
                        checked={activeLiveCheckBox}
                      />
                      <div
                        className={`radio-icon${
                          activeLiveCheckBox ? " live-checkbox-active" : ""
                        }`}
                      >
                        <div
                          className="live-checkbox-active-inner"
                          style={{
                            display: activeLiveCheckBox ? "block" : "none",
                          }}
                        >
                          <SVGIcons.TickSquare />
                        </div>
                      </div>
                    </>
                  )}
                  {!noIcon && <Icon />}

                  <p className="navbar__item-text">{text}</p>
                </div>
                <div className="right">
                  {!isHome && (
                    <span className="navbar__item-number">{number}</span>
                  )}
                  <div
                    style={{ visibility: isDropDown ? "visible" : "hidden" }}
                  >
                    {active ? <SVGIcons.ArrowUp /> : <SVGIcons.ArrowDown />}
                  </div>
                </div>
              </>
            )}

            {/* Border left */}
            <div className="active-border"></div>
          </div>
        </Link>
          </>
      ) : (
      [isDropDown ?
        <Link to={`${query2}`}
          className={`navbar__item${
            isDropDown ? " navbar__item--dropdown" : ""
          }${active ? " active-navbar-item" : ""}${
            isLive ? " navbar__item-live" : ""
          }`}
          onClick={
            isDropDown && !collapse
              ? (() => {onToggle(); hideNavbarOnToggleSportItems()})
              : isDropDown
              ? onToggleAndCollapse
              : handleLiveItem
          }
        >
          {collapse ? (
            [!noIcon && <Icon />]
          ) : (
            <>
              <div className="left">
                {!noIcon && <Icon />}

                <p className="navbar__item-text">{text}</p>
              </div>
              <div className="right">
                {!isHome && (
                  <span className="navbar__item-number">{number}</span>
                )}
                <div style={{ visibility: isDropDown ? "visible" : "hidden" }}>
                  {active ? <SVGIcons.ArrowUp /> : <SVGIcons.ArrowDown />}
                </div>
              </div>
            </>
          )}

          {/* Border left */}
          <div className="active-border"></div>
        </Link>

      :      <Link to={`/tour`}
          className={`navbar__item${
            isDropDown ? " navbar__item--dropdown" : ""
          }${active ? " active-navbar-item" : ""}${
            isLive ? " navbar__item-live" : ""
          }`}
          onClick={
            isDropDown && !collapse
              ? (() => {onToggle(); hideNavbarOnToggleSportItems()})
              : isDropDown
              ? onToggleAndCollapse
              : handleLiveItem
          }
        >
            {!collapse &&
            <>
              <div className="left">
                {!noIcon && <img src={require(`../assets/tournament-logos/${dropDownIcon}.png`)} alt=""/>}

                <p className="navbar__item-text">{text}</p>
              </div>
              <div className="right">
                {!isHome && (
                  <span className="navbar__item-number">{number}</span>
                )}
                <div style={{ visibility: isDropDown ? "visible" : "hidden" }}>
                  {active ? <SVGIcons.ArrowUp /> : <SVGIcons.ArrowDown />}
                </div>
              </div>
            </>
            }
        </Link>]
      )}
    </>
  );
};

NavbarItem.defaultProps = {
  isDropDown: "true",
};

export default NavbarItem;
