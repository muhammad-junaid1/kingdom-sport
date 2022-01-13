import React, {useState} from "react";
import "../css/Navbar.css";
import SVGIcons from "./SvgIcons";
import NavbarItem from "./NavbarItem";
import DropdownItem from "./DropdownItem";
import FullLogo from "../assets/full-logo.png";
import HalfLogo from "../assets/half-logo.png";
import SearchInput from "./SearchInput";
import sampleData from "../sampleData";

const Navbar = ({collapse, isMobile, showNavbar, isCrypto, cryptoData, setCollapse}) => {
  const dropDowns = sampleData.dropDownsData;
  const [toggled, setToggled] = useState(null);
  const [checked, setChecked] = useState(null);
  return (
    <>
      <div className="navbar" style={{paddingRight: (isMobile && !showNavbar) ? 0 : ""}}>
      <div className="navbar__header" style={{padding: collapse ? "20px 10px" : ""}}>
      {(!isMobile) && 
        <div className="navbar__logo">
        {collapse ? <img src={HalfLogo} alt=""/> : <img src={FullLogo} alt="" />}
        </div>
      }
        <div className="search-input-container" style={{cursor: collapse ? "pointer" : ""}}>
        <SearchInput collapse={collapse} setCollapse={setCollapse}/>
        </div>
      </div>
        <div className="navbar__main-items-container">
          <ul>
          {!isCrypto ?
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
                target="/sport/live"
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
          : 
          <>
          <NavbarItem isDropDown={false} text="All items" noIcon={true} number={123} collapse={collapse} target="/crypto/all" isCryptoItem={true} forAll={true}/>
          {cryptoData.map((item, index) => {
            return <NavbarItem isDropDown={false} Icon={SVGIcons[item.icon]} text={item.text} number={item.number} collapse={collapse} activeRadio={checked === index} onCheck={() => checked === index ? setChecked(index) : setChecked(index)} isCryptoItem={true} target={`/crypto/${index+1}`}/>
          })}
          </>
          }
          </ul>
        </div>
        {!isCrypto &&
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
                    onToggle={() => toggled === index ? setToggled(null) : setToggled(index)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        }
      </div>
    </>
  );
};

export default Navbar;
