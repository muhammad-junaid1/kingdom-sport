import React, { useState } from "react";
import TournamentsItem from "./TournamentsItem";
import SearchInput from "./SearchInput";
import SVGIcons from "./SvgIcons";
import Button from "./Button";
import "../css/Tournaments.css";
import ToursFilterOption from "./ToursFilterOption"
import sampleData from "../sampleData";

const Tournaments = ({ allTours }) => {
  const [filters, setFilters] = useState([1, 2]);
  const [toggleOptions, setToggleOptions] = useState(false);
  const fetchFiltersData = sampleData.toursFilters.filter((filter) => filters.includes(filter.filterId));
  const handleToggle = () => {
    setToggleOptions(!toggleOptions);
  };
  if (toggleOptions) {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".select-wrapper")) {
        if (!e.target.closest(".filters__options")) {
          setToggleOptions(false);
        }
      }
    });
  }
  return (
    <>
      <div className="tournaments">
        <div className="tournaments__header">
          <div className="filters">
            <div className="filters__container">
              <div className="filters__select">
                <div className="select-wrapper" onClick={handleToggle}>
                  <div className="left">
                    <SVGIcons.Filter />
                    {filters.length !== 0 ? <p>{fetchFiltersData.slice(0, 2).map((f) => f.filter[0].toUpperCase() + f.filter.slice(1)).join(", ")}{fetchFiltersData.length > 2 && ".."}</p> : <p style={{color: "#ccc"}}>Select the Option</p>}
                    
                  </div>
                  <div className="right">
                    {toggleOptions ? (
                      <SVGIcons.ArrowUp />
                    ) : (
                      <SVGIcons.ArrowDown />
                    )}
                  </div>
                </div>

                {/* Options container */}
                {toggleOptions && (
                  <div className="filters__options">
                    <div className="filters-options__header">
                      <SearchInput />
                    </div>
                    <div className="filters-options__body">
                      {sampleData.toursFilters.map((f) => {
                        return <>
                            <ToursFilterOption filterDetails={f} filters={filters} setFilters={setFilters} isChecked={filters.includes(f.filterId)}/>
                            <hr />
                        </>
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div className="filters__search">
                <SearchInput />
                <Button type="secondary">Apply</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="tournaments__body" style={{height: filters.length<=1 ? "40rem" : ""}}>
              {filters.length !== 0 ?
          [filters.map((currFilter) => {
            return (
                <div className="tour-items">
                  <p className="tour-filter">
                    {sampleData.toursFilters
                      .find((t) => t.filterId === currFilter)
                      .filter.toUpperCase()}
                  </p>
                  {allTours.filter((t) => t.filterId === currFilter).length === 0 ? <p style={{color: "red"}}>No data found</p> :
                  [allTours
                    .filter((t) => t.filterId === currFilter)
                    .map((tour, index) => {
                      return (
                        <TournamentsItem
                          tourLogo={tour.icon}
                          index={index}
                          tourText={tour.text}
                          isFav={tour.isFav}
                          numbers={tour.numbers}
                        />
                      );
                    })]
                  }
                </div>
              );
          })] : <p>Nothing to show..</p>}
        </div>
      </div>
    </>
  );
};

export default Tournaments;
