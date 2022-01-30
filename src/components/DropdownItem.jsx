import React, {useRef} from "react";
import NavbarItem from "./NavbarItem";
import SVGIcons from "./SvgIcons";

const DropdownItem = ({ icon, text, number, dropdownItems, collapse, onToggle, setToggled, active }) => {
  const dropDownsContainer = useRef();
  return (
    <>
      <div className="navbar__dropdown-item" style={{borderRadius: active && "0px 16px 16px 0px"}}>
        <NavbarItem
          isDropDown={true}
          Icon={SVGIcons[icon]}
          text={text}
          number={number}
          collapse={collapse}
          onToggle={onToggle}
          active={active}
        />
        <div className="navbar__dropdown-items" ref={dropDownsContainer} style={{height: (active && !collapse) ? "100%" : 0}}
>
          {dropdownItems.map((item) => {
            return (
              <NavbarItem
                isDropDown={false}
                dropDownIcon={item.icon}
                text={item.text}
                number={item.number}
                collapse={collapse}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DropdownItem;
