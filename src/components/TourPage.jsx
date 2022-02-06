import React, { useState, useEffect } from "react";
import sampleData from "../sampleData";
import BreadCrumbs from "./pages/components/BreadCrumbs";
import DatePicker from "react-datepicker";
import Button from "./Button";
import SVGIcons from "./SvgIcons";
import Match from "./pages/components/Match";
import {Link, useLocation} from "react-router-dom";
import MatchPage from "./MatchPage";
import "../css/TourPage.css";

const TourPage = ({ tourId, sportName, showBetsContainer }) => {
  const [startDate, setStartDate] = useState(null);

  // Fetch today, tomorrow and prematches data
  const todayMatch = sampleData.matchData;
  const tomorrowMatch = sampleData.matchData2.slice(0, 2);
  const preMatch = sampleData.matchData2.slice(0, 2);

  // Get the details of required tour
  const details = sampleData.allTours.find(
    (tour) => tour.id === parseInt(tourId)
  );

  // Capitalize the sport name
  const sport = sportName[0].toUpperCase() + sportName.slice(1);

  // Input for date picker
  const CalendarBtn = React.forwardRef(({ value, onClick }, ref) => (
    <Button
      onClick={onClick}
      ref={ref}
      type="primary"
      color="grey"
      size="small"
    >
      <span style={{ marginRight: 4 }}>
        {value
          ? new Date(value).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Calendar"}
      </span>{" "}
      <SVGIcons.Calendar color="white" />
    </Button>
  ));

  // Construct an object of url query params
  const {search, pathname} = useLocation();
  const urlParams = new URLSearchParams(search);
  let urlParamsObj = {};
  for (let value of urlParams.keys()) {
    urlParamsObj[value] = urlParams.get(value);
  }
  const paramsString = Object.keys(urlParamsObj).map(key => `${key}=${urlParamsObj[key]}`).join('&');


  useEffect(() => {
    //   Add clear button
    if (startDate) {
      document.querySelector(".react-datepicker__close-icon").innerHTML =
        "<span style='margin-left: 5px'>Clear &#10005;</span>";
    }
  }, [startDate]);
  return (
    <>
    {urlParamsObj.hasOwnProperty("match") ?  <MatchPage showBetsContainer={showBetsContainer}/> :
      <div className="tour-page">
        <div className="tour-page__header">
          <BreadCrumbs items={[pathname==="/" ? "Home" : "Favourites", sport, details.text]} />
          <div className="tour-page__details">
            {/* Show logo for just one tour with id 1 (remove this condition, when all images are available) */}
            <div className="tour-page__logo ">
              {parseInt(tourId) === 1 && (
                <img
                  src={require(`../assets/tournament-logos/tour${tourId}-full-logo.png`)}
                  alt=""
                />
              )}{" "}
            </div>
            <div className="tour-page__info">
              <div className="left">
                <SVGIcons.Favourite
                  {...(details.isFav ? { color: "#743EE8" } : null)}
                />
                <h2>{details.text}</h2>
              </div>
              <div className="right" style={{marginRight: showBetsContainer ? "0" : "50px"}}>
                <DatePicker
                  selected={startDate}
                  isClearable
                  onChange={(date) => setStartDate(date)}
                  customInput={<CalendarBtn />}
                  renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }) => (
                    <div className="react-datepicker__header">
                      <p>
                        {new Date(date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                      </p>
                      <div className="nextprev-btns">
                        <div
                          className="prev-btn"
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                        >
                          <SVGIcons.Previous />
                        </div>
                        <div
                          className="next-btn"
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                        >
                          <SVGIcons.Next />
                        </div>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="tour-page__body">
          {/* If date is selected, show the items with specified date other wise show all items */}
          {startDate ? (
            <h3>
              Items with date{" "}
              {new Date(startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              here..
            </h3>
          ) : (
            <>
            <div className="tour-page__item">
              <>
              {/* We'll the get the  id of match and append in the url */}
                 <p className="tour-item__headline"><Link to={`?${paramsString}&match=1`}>Today</Link></p>
                <Match
                  withoutHeader={true}
                  data={todayMatch}
                  isLive={true}
                />
              </>
            </div>
            <div className="tour-page__item">
              <>
              {/* We'll the get the  id of match and append in the url */}
              <p className="tour-item__headline"><Link to={`?${paramsString}&match=2`}>Tomorrow</Link></p>
                <Match
                  withoutHeader={true}
                  data={tomorrowMatch}
                  isLive={false}
                />
              </>
            </div>
            <div className="tour-page__item">
              <>
              {/* We'll the get the  id of match and append in the url */}
                <p className="tour-item__headline"><Link to={`?${paramsString}&match=3`}>Prematch {preMatch[0].time[0]}</Link></p>
                <Match
                  withoutHeader={true}
                  data={preMatch}
                  isLive={false}
                />
              </>
            </div>
              </>
          )}
        </div>
      </div>
    }
    </>
  );
};

export default TourPage;
