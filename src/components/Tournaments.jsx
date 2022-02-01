import React, { useState } from "react";
import TournamentsItem from "./TournamentsItem";
import SearchInput from "./SearchInput";
import "../css/Tournaments.css";

const Tournaments = ({ allTours }) => {
  const [filters, setFilters] = useState(["international", "algeria"]);
  return (
    <>
    <div className="tournaments">
    <div className="tournaments__header">
        <div className="filters">
            <div className="filters__container">
                    <div className="filters__select">
                            <p>Select</p>
                    </div>
                    <div className="filters__search">
                            <SearchInput/>
                    </div>
            </div>
        </div>
    </div>
    <div className="tournaments__body">
      {filters.map((currFilter) => {
          return (
            [allTours.filter((t) => t.filter.toLowerCase() === currFilter).length !== 0 &&
            <div className="tour-items">
              <p className="tour-filter">{currFilter}</p>
              {allTours
                .filter((t) => t.filter.toLowerCase() === currFilter)
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
                })}
            </div>
            ]
          );
      })}
      </div>
      </div>
    </>
  );
};

export default Tournaments;
