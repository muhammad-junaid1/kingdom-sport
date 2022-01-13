import React, {useRef} from "react";
import NavbarItem from "./NavbarItem";
import SVGIcons from "./SvgIcons";

const DropdownItem = ({ icon, text, number, dropdownItems, collapse, setToggled, onToggle , active }) => {
  const dropDownsContainer = useRef();
  return (
    <>
      <div className="navbar__dropdown-item" style={{borderRadius: active && "0px 16px 16px 0px"}}>
        <NavbarItem
          isDropDown={true}
          Icon={SVGIcons[icon]}
          text={text}
          number={number}
          setToggled={setToggled}
          collapse={collapse}
          onToggle={onToggle}
          active={active}
        />
        <div className="navbar__dropdown-items" ref={dropDownsContainer} style={{height: (active && !collapse) ? dropDownsContainer.current.scrollHeight : 0}}
>
          {dropdownItems.map((item) => {
            return (
              <NavbarItem
                isDropDown={false}
                Icon={SVGIcons[item.icon]}
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
