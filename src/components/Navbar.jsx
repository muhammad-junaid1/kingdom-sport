import React from "react";
import "../css/Navbar.css";
import SVGIcons from "./SvgIcons";
import NavbarItem from "./NavbarItem";
import DropdownItem from "./DropdownItem";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
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
                Icon={SVGIcons["Home"]}
                text="About"
                number={23}
              />
            </li>
            <li>
              <NavbarItem
                isDropDown={false}
                Icon={SVGIcons["Home"]}
                text="Contact"
                number={23}
              />
            </li>
          </ul>
        </div>
        <div className="navbar__dropdown-items-container">
          <ul>
            <li>
              <DropdownItem
                icon="Soccer"
                text="Football"
                number={9}
                dropdownItems={[
                  {
                    icon: "Soccer",
                    text: "Dropdown Item 1",
                    number: 5,
                  },
                  {
                    icon: "Soccer",
                    text: "Dropdown Item 2",
                    number: 4,
                  },
                ]}
              />
            </li>
            <li>
              <DropdownItem
                icon="Soccer"
                text="Football"
                number={9}
                dropdownItems={[
                  {
                    icon: "Soccer",
                    text: "Dropdown Item 1",
                    number: 5,
                  },
                  {
                    icon: "Soccer",
                    text: "Dropdown Item 2",
                    number: 4,
                  },
                ]}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
