import React, { useState, useEffect , useContext} from "react";
import "../css/Navbar.css";
import SVGIcons from "./SvgIcons";
import NavbarItem from "./NavbarItem";
import DropdownItem from "./DropdownItem";
import FullLogo from "../assets/full-logo.png";
import HalfLogo from "../assets/half-logo.png";
import SearchInput from "./SearchInput";
import sampleData from "../sampleData";
import { useLocation, useParams } from "react-router-dom";

const Navbar = ({
  collapse,
  isMobile,
  showNavbar,
  isCrypto,
  cryptoData,
  setCollapse,
  isLive,
  liveNavbarData,
  cryptoActiveOrExpired,
  setCryptoActiveOrExpired
}) => {
  const dropDowns = sampleData.dropDownsData;
  const [toggled, setToggled] = useState(null);
  const [checked, setChecked] = useState("all");
  const [radioForActive, setRadioForActive] = useState(true);
  const [radioForExpired, setRadioForExpired] = useState(false);
  const { search } = useLocation();
  const { coin } = useParams();

  const params = new URLSearchParams(search);
  let paramObj = {};
  for (var value of params.keys()) {
    paramObj[value] = params.get(value);
  }

  useEffect(() => {
    if(coin) {
      setChecked(coin.toUpperCase());
    }
  }, [coin]);
  return (
    <>
      <div
        className="navbar"
        style={{ paddingRight: isMobile && !showNavbar ? 0 : "" }}
      >
        <div
          className="navbar__header"
          style={{ padding: collapse ? "20px 10px" : "" }}
        >
          {!isMobile && (
            <div className="navbar__logo">
              {collapse ? (
                <img src={HalfLogo} alt="" />
              ) : (
                <img src={FullLogo} alt="" />
              )}
            </div>
          )}
          <div
            className="search-input-container"
            style={{ cursor: collapse ? "pointer" : "" }}
          >
            <SearchInput collapse={collapse} setCollapse={setCollapse} />
          </div>
        </div>
        {isCrypto && 
        <>
        <div className="crypto-coins-type">
        <div className="radio-input">
          <input type="radio" style={{display: "none"}} name="coins-type" value="active" checked={radioForActive}/>
              <div className={`radio-icon${(radioForActive) ? " radio-active": ""}`}>
                <div className="active-radio-circle" style={{display: radioForActive ? "block" : "none"}}></div>
              </div>
              <p onClick={() => {setRadioForActive(true); setRadioForExpired(false); setCryptoActiveOrExpired("active")}}>Active</p>
              </div>

              <div className="radio-input">
          <input type="radio" style={{display: "none"}} name="coins-type" value="expired" checked={radioForExpired}/>
              <div className={`radio-icon${(radioForExpired) ? " radio-active": ""}`}>
                <div className="active-radio-circle" style={{display: radioForExpired ? "block" : "none"}}></div>
              </div>
              <p onClick={() => {setRadioForExpired(true); setRadioForActive(false); setCryptoActiveOrExpired("expired")}}>Expired</p>
              </div>
              </div>
              </>
          }
        <div className="navbar__main-items-container">
          <ul>
            {!isCrypto ? (
              <>
                <li>
                  <NavbarItem
                    isDropDown={false}
                    Icon={SVGIcons["Home"]}
                    text="Home"
                    number={23}
                    isHome={true}
                    collapse={collapse}
                    target="/"
                  />
                </li>
                <li>
                  <NavbarItem
                    isDropDown={false}
                    Icon={SVGIcons["Live"]}
                    text="Live"
                    number={23}
                    isLive={true}
                    collapse={collapse}
                    target={`/sport/live${search}`}
                  />
                </li>
                <li>
                  <NavbarItem
                    isDropDown={false}
                    Icon={SVGIcons["Favourite"]}
                    text="Favourite"
                    number={23}
                    collapse={collapse}
                    target="/sport/favourites"
                  />
                </li>
              </>
            ) : (
              [cryptoActiveOrExpired==="active" ?
              <>
                <NavbarItem
                  isDropDown={false}
                  text="All items"
                  noIcon={true}
                  number={123}
                  collapse={collapse}
                  target="/crypto/all"
                  isCryptoItem={true}
                  forAll={true}
                  setChecked={setChecked}
                  activeRadio={checked === "all"}
                />
                {cryptoData.map((item, index) => {
                  return (
                    <NavbarItem
                      isDropDown={false}
                      Icon={SVGIcons.CryptoIcons[item.icon]}
                      text={item.text}
                      number={item.number}
                      collapse={collapse}
                      activeRadio={
                        checked === "all"
                          ? false
                          : ((checked === index || checked === item.text) ? true : false)
                      }
                      onCheck={() =>
                        checked === index
                          ? setChecked(index)
                          : setChecked(index)
                      }
                      isCryptoItem={true}
                      target={`/crypto/${item.text}`}
                    />
                  );
                })}
              </>
              : <h4 style={{textAlign: "center"}}><u>Expired items here</u></h4>]
            )}
          </ul>
        </div>
        {!isCrypto && !isLive && (
          <div className="navbar__dropdown-items-container">
            <ul>
              {dropDowns.map((item, index) => {
                return (
                  <li>
                    <DropdownItem
                      key={index}
                      icon={item.icon}
                      text={item.text}
                      number={item.number}
                      dropdownItems={item.dropdownItems}
                      collapse={collapse}
                      active={toggled === index}
                      onToggle={() =>
                        toggled === index ? setToggled(null) : setToggled(index)
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="live-navbar-items">
          {isLive && (
            <>
              {liveNavbarData.map((item, index) => (
                <NavbarItem
                  isDropDown={false}
                  Icon={SVGIcons[item.icon]}
                  text={item.text}
                  number={item.number}
                  collapse={collapse}
                  isLiveItem={true}
                  isActiveLiveItem={paramObj.hasOwnProperty(item.text)}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
