import React from "react";
import "../css/Navbar.css";
import SVGIcons from "./SvgIcons";
import NavbarItem from "./NavbarItem";
import DropdownItem from "./DropdownItem";
import FullLogo from "../assets/full-logo.png";
import HalfLogo from "../assets/half-logo.png";
import SearchInput from "./SearchInput";

const Navbar = ({collapse}) => {
  const dropDowns = [
    {
      icon: "Soccer",
      text: "Football",
      number: 34,
      dropdownItems: [
        {
          icon: "Soccer",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "Soccer",
          text: "Item no 2",
          number: 14,
        },
      ],
    },
    {
      icon: "Soccer",
      text: "Football",
      number: 34,
      dropdownItems: [
        {
          icon: "Soccer",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "Soccer",
          text: "Item no 2",
          number: 14,
        },
      ],
    },
    {
      icon: "Soccer",
      text: "Football",
      number: 34,
      dropdownItems: [
        {
          icon: "Soccer",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "Soccer",
          text: "Item no 2",
          number: 14,
        },
      ],
    },
    {
      icon: "Soccer",
      text: "Football",
      number: 34,
      dropdownItems: [
        {
          icon: "Soccer",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "Soccer",
          text: "Item no 2",
          number: 14,
        },
      ],
    },
  ];
  return (
    <>
      <div className="navbar">
      <div className="navbar__header" style={{padding: collapse ? "20px 10px" : ""}}>
        <div className="navbar__logo">
        {collapse ? <img src={HalfLogo} alt=""/> : <img src={FullLogo} alt="" />}
        </div>
        <div className="search-input-container" style={{cursor: collapse ? "pointer" : ""}}>
        <SearchInput collapse={collapse}/>
        </div>
      </div>
        <div className="navbar__main-items-container">
          <ul>
            <li>
              <NavbarItem
                isDropDown={false}
                Icon={SVGIcons["Home"]}
                text="Home"
                number={23}
                isHome={true}
                isActive={true}
                collapse={collapse}
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
              />
            </li>
            <li>
              <NavbarItem
                isDropDown={false}
                Icon={SVGIcons["Favourite"]}
                text="Favourite"
                number={23}
                collapse={collapse}
              />
            </li>
          </ul>
        </div>
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
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
