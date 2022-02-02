import React,{useState} from "react";
import SVGIcons from "./SvgIcons";

const ToursFilterOption = ({ filterDetails, isChecked, filters, setFilters }) => {
    const [activeFilterOption, setActiveFilterOption] = useState(isChecked ? true : false);
    const handleToggle = () => {
        if(activeFilterOption) {
            setFilters((filtersArr) => filtersArr.filter((f) => f !== filterDetails.filterId));
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
          name="live"
          value={filterDetails.filter}
          checked={activeFilterOption}
        />
        <div
          className={`radio-icon${
            activeFilterOption ? " filter-checkbox-active" : ""
          }`}
        >
          <div
            className="filter-checkbox-active-inner"
            style={{
              display: activeFilterOption ? "block" : "none",
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
