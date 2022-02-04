import React, { useState, useEffect } from "react";
import TournamentsItem from "./TournamentsItem";
import SearchInput from "./SearchInput";
import SVGIcons from "./SvgIcons";
import Button from "./Button";
import "../css/Tournaments.css";
import ToursFilterOption from "./ToursFilterOption";
import sampleData from "../sampleData";

const Tournaments = ({ allTours }) => {
  const [filters, setFilters] = useState([1]);
  const [toggleOptions, setToggleOptions] = useState(false);
  const [filterSearchVal, setFilterSearchVal] = useState("");
  const fetchFiltersData = sampleData.toursFilters.filter((filter) =>
    filters.includes(filter.filterId)
  );
  const [allToursFilters, setAllToursFilters] = useState([]);
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

  const handleInput = (e) => {
      setFilterSearchVal(e.target.value);
      if(e.target.value === "") {
        setAllToursFilters(sampleData.toursFilters);
      } else {
          setAllToursFilters(sampleData.toursFilters.filter((f) => f.filter.toLowerCase().indexOf(filterSearchVal.toLowerCase()) !== -1));
      }
  }

  useEffect(() => {
    setAllToursFilters(sampleData.toursFilters);
  }, []);
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
                    {filters.length !== 0 ? (
                      <p>
                        {fetchFiltersData
                          .slice(0, 2)
                          .map(
                            (f) => f.filter[0].toUpperCase() + f.filter.slice(1)
                          )
                          .join(", ")}
                        {fetchFiltersData.length > 2 && ".."}
                      </p>
                    ) : (
                      <p style={{ color: "#ccc" }}>Select the Option</p>
                    )}
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
                      <SearchInput onInput={handleInput} value={filterSearchVal}/>
                    </div>
                    <div className="filters-options__body">
                      {allToursFilters.map((f) => {
                        return (
                          <>
                            <ToursFilterOption
                              filterDetails={f}
                              filters={filters}
                              setFilters={setFilters}
                              isChecked={filters.includes(f.filterId)}
                            />
                            <hr />
                          </>
                        );
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
        <div
          className="tournaments__body"
          style={{ height: filters.length <= 1 ? "40rem" : "" }}
        >
          {filters.length !== 0 ? (
            [
              filters.map((currFilterId) => {
                return (
                  <div className="tour-items">
                    <div className="tour-filter">
                    <img src={require(`../assets/filters-logos/${sampleData.toursFilters
                        .find((t) => t.filterId === currFilterId).icon}.png`)} alt="" />
                        <p>
                      {sampleData.toursFilters
                        .find((t) => t.filterId === currFilterId)
                        .filter.toUpperCase()}
                        </p>
                    </div>
                    {allTours.filter((t) => t.filterId === currFilterId)
                      .length === 0 ? (
                      <p style={{ color: "red" }}>No data found</p>
                    ) : (
                      [
                        allTours
                          .filter((t) => t.filterId === currFilterId)
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
                          }),
                      ]
                    )}
                  </div>
                );
              }),
            ]
          ) : (
            <p style={{color: "red"}}>Nothing to show..</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Tournaments;
