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
  tourId
}) => {
  const [activeLiveCheckBox, setActiveLiveCheckBox] = useState(false);

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
  if (query2.length === 0) {
    query2 = `?sport=${text.toLowerCase()}`;
  } else {
    if (!query2.includes(text.toLowerCase())) {
      query2 = `?sport=${text.toLowerCase()}`;
    } else {
      query2 = "";
    }
  }

    // Determine the query params for tournament page
  let query3;
  const params = new URLSearchParams(search);
  let paramObj = {};
  for (var value of params.keys()) {
    paramObj[value] = params.get(value);
  }
    paramObj.tour = tourId;
    const paramString = Object.keys(paramObj).map(key => `${key}=${paramObj[key]}`).join('&');
    query3 = "?" + paramString;

    

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
              to={`${query2}`}
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
              to={query3}
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
