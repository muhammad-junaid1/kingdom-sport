import React, {useRef} from "react";
import NavbarItem from "./NavbarItem";
import SVGIcons from "./SvgIcons";
import {useLocation} from "react-router-dom";

const DropdownItem = ({ icon, text, number, dropdownItems, collapse, onToggle, active }) => {
  const dropDownsContainer = useRef();
  
  const {search} = useLocation();
  const toursParams = new URLSearchParams(search);
  let toursParamsObj = {};
  for (let value of toursParams.keys()) {
    toursParamsObj[value] = toursParams.get(value);
  }
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
                tourId={item.tourId}
                collapse={collapse}
                activeTour={item.tourId === toursParamsObj.tour}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DropdownItem;
