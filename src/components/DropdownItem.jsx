import React, {useState} from "react";
import NavbarItem from "./NavbarItem";
import SVGIcons from "./SvgIcons";

const DropdownItem = ({ icon, text, number, dropdownItems, collapse }) => {
    const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div className="navbar__dropdown-item" style={{borderRadius: showDropdown && "0px 16px 16px 0px"}}>
        <NavbarItem
          isDropDown={true}
          Icon={SVGIcons[icon]}
          text={text}
          number={number}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          collapse={collapse}
        />
        {(showDropdown && !collapse) &&
        <div className="navbar__dropdown-items">
          {dropdownItems.map((item) => {
            return (
              <NavbarItem
                isDropDown={false}
                Icon={SVGIcons[item.icon]}
                text={item.text}
                number={item.number}
              />
            );
          })}
        </div>
        }
      </div>
    </>
  );
};

export default DropdownItem;
