import React, {useRef} from "react";
import NavbarItem from "./NavbarItem";
import SVGIcons from "./SvgIcons";

import sampleData from "../sampleData";
import {useLocation} from "react-router-dom";
import {CSSTransition} from 'react-transition-group';

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
      <CSSTransition 
      in={active && !collapse} timeout={200} classNames="display" unmountOnExit>
        <div className="navbar__dropdown-items" ref={dropDownsContainer}>
          {toursData.map((item, index) => {
            return (
              <NavbarItem
                key={index}
                isDropDown={false}
                dropDownIcon={item.icon}
                text={item.text}
                number={item.numbers}
                tourId={item.id}
                collapse={collapse}
                activeTour={item.id === parseInt(toursParamsObj.tour)}
              />
            );
          })}
        </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default DropdownItem;
