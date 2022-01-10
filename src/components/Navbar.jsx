import React from "react";
import "../css/Navbar.css";
import SVGIcons from "./SvgIcons";
import NavbarItem from "./NavbarItem";
import DropdownItem from "./DropdownItem";
import Logo from "../assets/full-logo.png";
import SearchInput from "./SearchInput";

const Navbar = () => {
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
      <div className="navbar__header">
        <div className="navbar__logo">
          <img src={Logo} alt="" />
        </div>
        <div className="search-input-container">
        <SearchInput/>
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
              />
            </li>
            <li>
              <NavbarItem
                isDropDown={false}
                Icon={SVGIcons["Live"]}
                text="Live"
                number={23}
                isLive={true}
              />
            </li>
            <li>
              <NavbarItem
                isDropDown={false}
                Icon={SVGIcons["Favourite"]}
                text="Favourite"
                number={23}
              />
            </li>
          </ul>
        </div>
        <div className="navbar__dropdown-items-container">
          <ul>
            {dropDowns.map((item) => {
              return (
                <li>
                  <DropdownItem
                    icon={item.icon}
                    text={item.text}
                    number={item.number}
                    dropdownItems={item.dropdownItems}
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
