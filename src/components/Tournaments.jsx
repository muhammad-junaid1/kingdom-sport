import React, { useState, useEffect } from "react";
import TournamentsItem from "./TournamentsItem";
import SearchInput from "./SearchInput";
import SVGIcons from "./SvgIcons";
import Button from "./Button";
import "../css/Tournaments.css";
import ToursFilterOption from "./ToursFilterOption";
import sampleData from "../sampleData";

const Tournaments = ({ allTours }) => {
  const [filtersToShow, setFiltersToShow] = useState([1]);
  const [toggleOptions, setToggleOptions] = useState(false);
  const [filterSearchVal, setFilterSearchVal] = useState("");
  const [allSearchInput, setAllSearchInput] = useState("");
  const [allToursData, setAllToursData] = useState([]);
  const fetchFiltersData = sampleData.toursFilters.filter((filter) =>
    filtersToShow.includes(filter.filterId)
  );
  const [allToursFilters, setAllToursFilters] = useState(sampleData.toursFilters);
  const handleToggle = () => {
    if(!toggleOptions) {
      setFilterSearchVal("");
              setAllToursFilters(sampleData.toursFilters);
    }
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

  const handleAllSearchInput = (e) =>{
    setAllSearchInput(e.target.value);
  }

  const handleSearchSubmit = () => {
    if(allSearchInput === "") {
      setAllToursData(allTours);
    } else {
      const searchedData = allTours.filter((tour) => tour.text.toLowerCase().indexOf(allSearchInput.toLowerCase()) !== -1);
      setAllToursData(searchedData);
    }
  }

  const handleInput = (e) => {
      if(e.target.value === "") {
        setAllToursFilters(sampleData.toursFilters);
      } else {
          setAllToursFilters(sampleData.toursFilters.filter((f) => f.filter.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1));
      }
      setFilterSearchVal(e.target.value);
  }

  useEffect(()=>{

    // Reset on re-render
    setAllToursData(allTours);
    setAllSearchInput("");
    setFiltersToShow([1]);
  }, [allTours])
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
                    {filtersToShow.length !== 0 ? (
                      <p>
                        {fetchFiltersData.map(
                            (f) => f.filter[0].toUpperCase() + f.filter.slice(1)
                          )
                          .join(", ")}
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
                              filters={filtersToShow}
                              setFilters={setFiltersToShow}
                              isChecked={filtersToShow.includes(f.filterId)}
                              setToggleOptions={setToggleOptions}
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
                <SearchInput onInput={handleAllSearchInput} value={allSearchInput}/>
                <Button type="secondary" onClick={handleSearchSubmit}>Apply</Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tournaments__body">
          {filtersToShow.length !== 0 ? (
            [
              filtersToShow.map((currFilterId) => {
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
                    {allToursData.filter((t) => t.filterId === currFilterId)
                      .length === 0 ? (
                      <p style={{ color: "red" }}>No data found</p>
                    ) : (
                      [
                        allToursData
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
