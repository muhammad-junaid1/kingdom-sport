import React,{useState, useEffect} from "react";
import SVGIcons from "./SvgIcons";

const ToursFilterOption = ({ filterDetails, isChecked, filters, setFilters, setToggleOptions }) => {
    const [activeFilterOption, setActiveFilterOption] = useState(false);
    const handleToggle = () => {
      setToggleOptions(false);
        if(isChecked) {
            setFilters(filters.filter((f) => f !== filterDetails.filterId));
        } else {
            setFilters([filterDetails.filterId, ...filters]);
        }
            setActiveFilterOption(!activeFilterOption);
    }
  return (
    <>
      <div className="filter-option" onClick={handleToggle}>
      <div className="filter-radio">
        <input
          style={{ display: "none" }}
          type="checkbox"
          name={filterDetails.filter}
          value={filterDetails.filter}
          checked={isChecked}
        />
        <div
          className={`radio-icon${
            isChecked ? " filter-checkbox-active" : ""
          }`}
        >
          <div
            className="filter-checkbox-active-inner"
            style={{
              display: isChecked ? "block" : "none",
            }}
          >
           <SVGIcons.TickSquare color="#743EE8"/>
          </div>
        </div>
        </div>
        <img src={require(`../assets/filters-logos/${filterDetails.icon}.png`)} alt="" />
        <p>{filterDetails.filter[0].toUpperCase() + filterDetails.filter.slice(1)}</p>
      </div>
    </>
  );
};

export default ToursFilterOption;
