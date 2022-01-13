import React, {useState} from "react";
import "../css/Navbar.css";
import SVGIcons from "./SvgIcons";
import NavbarItem from "./NavbarItem";
import DropdownItem from "./DropdownItem";
import FullLogo from "../assets/full-logo.png";
import HalfLogo from "../assets/half-logo.png";
import SearchInput from "./SearchInput";

const Navbar = ({collapse, isMobile}) => {
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
      icon: "Basketball",
      text: "Basketball",
      number: 34,
      dropdownItems: [
        {
          icon: "Basketball",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "Basketball",
          text: "Item no 2",
          number: 14,
        },
      ],
    },
    {
      icon: "MMA",
      text: "MMA",
      number: 34,
      dropdownItems: [
        {
          icon: "MMA",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "MMA",
          text: "Item no 2",
          number: 14,
        },
      ],
    },
    {
      icon: "Tennis",
      text: "Tennis",
      number: 34,
      dropdownItems: [
        {
          icon: "Tennis",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "Tennis",
          text: "Item no 2",
          number: 14,
        },
      ],
    },
    {
      icon: "Icehockey",
      text: "Icehockey",
      number: 34,
      dropdownItems: [
        {
          icon: "Icehockey",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "Icehockey",
          text: "Item no 2",
          number: 14,
        },
      ],
    },
  ];
  const [toggled, setToggled] = useState(null);
  return (
    <>
      <div className="navbar">
      <div className="navbar__header" style={{padding: collapse ? "20px 10px" : ""}}>
      {!isMobile &&
        <div className="navbar__logo">
        {collapse ? <img src={HalfLogo} alt=""/> : <img src={FullLogo} alt="" />}
        </div>
      }
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
                    active={toggled === index}
                    onToggle={() => toggled === index ? setToggled(null) : setToggled(index)}
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
