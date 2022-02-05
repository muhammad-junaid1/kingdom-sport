import React, {useRef} from "react";
import NavbarItem from "./NavbarItem";
import SVGIcons from "./SvgIcons";

import sampleData from "../sampleData";
import {useLocation} from "react-router-dom";

/** 
 * 
 * Renders the dropdown item in navbar
 * It takes logo of dropdown item, text, etc
 * 
*/
const DropdownItem = ({ icon, text, number, dropdownItems, collapse, onToggle, active }) => {
  const dropDownsContainer = useRef();
  
  // Construct an object of query params
  const {search} = useLocation();
  const toursParams = new URLSearchParams(search);
  let toursParamsObj = {};
  for (let value of toursParams.keys()) {
    toursParamsObj[value] = toursParams.get(value);
  }

     // Get the data about tour
     const toursData = sampleData.allTours.filter((tour) => dropdownItems.includes(tour.id));
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
          {toursData.map((item) => {
            return (
              <NavbarItem
                isDropDown={false}
                dropDownIcon={item.icon}
                text={`${item.text.length > 15 ? `${item.text.slice(0, 15)}..` : item.text}`}
                number={item.numbers}
                tourId={item.id}
                collapse={collapse}
                activeTour={item.id === parseInt(toursParamsObj.tour)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DropdownItem;
