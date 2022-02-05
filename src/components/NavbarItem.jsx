import React, { useState, useEffect } from "react";
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
  dropDownIcon,
  tourId,
  activeTour
}) => {
  const [activeLiveCheckBox, setActiveLiveCheckBox] = useState(false);

  const { search } = useLocation();
  
  // Determine the query params for live navbar items
  let queryForLive;
  const paramsForLive = new URLSearchParams(search);
  let paramObjForLive = {};
  for (let value of paramsForLive.keys()) {
    paramObjForLive[value] = paramsForLive.get(value);
  }
  if(paramObjForLive[text.toLowerCase()]) {
    delete paramObjForLive[text.toLowerCase()];
  } else {
    paramObjForLive[text.toLowerCase()] = true;
  }
  const paramStringForLive = Object.keys(paramObjForLive).map(key => `${key}=${paramObjForLive[key]}`).join('&');
  queryForLive = "?" + paramStringForLive;

    // Determine the query params for sport navbar dropdown items
  let queryForDropdowns;
  const paramsForDropdowns = new URLSearchParams(search);
  let paramObjForDropdowns = {};
  for (let value of paramsForDropdowns.keys()) {
    paramObjForDropdowns[value] = paramsForDropdowns.get(value);
  }
  if(paramObjForDropdowns.hasOwnProperty("tour")) {
    delete paramObjForDropdowns.tour;
    paramObjForDropdowns.sport = text.toLowerCase();
  } else if(paramObjForDropdowns.sport === text.toLowerCase()) {
    delete paramObjForDropdowns.sport;
  } else {
    paramObjForDropdowns.sport = text.toLowerCase();
  }
    const paramStringForDropdowns = Object.keys(paramObjForDropdowns).map(key => `${key}=${paramObjForDropdowns[key]}`).join('&');
    queryForDropdowns = "?" + paramStringForDropdowns;


    // Determine the query params for tournament page
  let queryForTours;
  const paramsForTours = new URLSearchParams(search);
  let paramObjForTours = {};
  for (let value of paramsForTours.keys()) {
    paramObjForTours[value] = paramsForTours.get(value);
  }
    paramObjForTours.tour = tourId;
    const paramStringForTours = Object.keys(paramObjForTours).map(key => `${key}=${paramObjForTours[key]}`).join('&');
    queryForTours = "?" + paramStringForTours;



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

  const hideNavbarOnToggleSportItems = () => {
    if (isMobile) {
      setShowNavbar(false);
    }
  };

  const handleLiveItem = () => {
    if (isLiveItem) {
      setActiveLiveCheckBox(!activeLiveCheckBox);
      setShowNavbar(false);
      setShowBets(false);
    }
  };

  useEffect(() => {
    if (isActiveLiveItem) {
      setActiveLiveCheckBox(true);
    }
  }, [activeLiveCheckBox, isActiveLiveItem]);

  return (
    <>
      {/* If the item has a target */}
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
                {/* Crypto page item */}
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
          <Link to={queryForLive}>
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
                        {/* Live page item */}
                        <input
                          style={{ display: "none" }}
                          type="checkbox"
                          name="live"
                          value={text}
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
        [
          isDropDown ? (
            <>
            {/* Item for Dropdown menus */}
            <Link
              to={`${queryForDropdowns}`}
              className={`navbar__item${
                isDropDown ? " navbar__item--dropdown" : ""
              }${active ? " active-navbar-item" : ""}${
                isLive ? " navbar__item-live" : ""
              }`}
              onClick={
                isDropDown && !collapse
                  ? () => {
                      onToggle();
                      hideNavbarOnToggleSportItems();
                    }
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
            </Link>
            </>
          ) : (<>
            {/* Item for Tournament section */}
            <Link
              to={queryForTours}
              className={`navbar__item${
                isDropDown ? " navbar__item--dropdown" : ""
              }${activeTour ? " active-navbar-item" : ""}`}
              onClick={
                isDropDown && !collapse
                  ? () => {
                      onToggle();
                      hideNavbarOnToggleSportItems();
                    }
                  : isDropDown
                  ? onToggleAndCollapse
                  : handleLiveItem
              }
            >
              {!collapse && (
                <>
                  <div className="left">
                    {!noIcon && (
                      <img
                        src={require(`../assets/tournament-logos/${dropDownIcon}.png`)}
                        alt=""
                      />
                    )}

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
            </Link>
            </>
          ),
        ]
      )}
    </>
  );
};

NavbarItem.defaultProps = {
  isDropDown: "true",
};

export default NavbarItem;
