import React, { useState, useEffect} from "react";
import sampleData from "../sampleData";
import BreadCrumbs from "./pages/components/BreadCrumbs";
import DatePicker from "react-datepicker";
import Button from "./Button";
import SVGIcons from "./SvgIcons";
import Match from "./pages/components/Match";
import "../css/TourPage.css";

const TourPage = ({ tourId, sportName, showBetsContainer }) => {
  const [startDate, setStartDate] = useState(null);

  // Fetch today, tomorrow and prematches data
  const todayMatch = sampleData.matchData;
  const tomorrowMatch = sampleData.preMatches.filter((item) => item.text.toLowerCase() === sportName);
const preMatches = sampleData.preMatches.filter((item) => item.text.toLowerCase() === sportName);

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

  useEffect(() => {
    //   Add clear button
    if (startDate) {
      document.querySelector(".react-datepicker__close-icon").innerHTML =
        "<span style='margin-left: 5px'>Clear &#10005;</span>";
    }
  }, [startDate]);
  return (
    <>
      <div className="tour-page">
        <div className="tour-page__header">
          <BreadCrumbs items={["Home", sport, details.text]} />
          <div className="tour-page__details">

          {/* Show logo for just one tour with id 1 (remove this condition, when all images are available) */}
            <div className="tour-page__logo ">{parseInt(tourId) === 1 && <img src={require(`../assets/tournament-logos/tour${tourId}-full-logo.png`)} alt="" />} </div>
            <div className="tour-page__info">
              <div className="left">
                <SVGIcons.Favourite {...(details.isFav ? {color: "#743EE8"} : null)}/>
                <h2>{details.text}</h2>
              </div>
              <div className="right">
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
        <div className="tour-page__item">
            {startDate ? <h3>Items with date {new Date(startDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} here..</h3> : 
            <>

                <p className="tour-item__headline">Today</p>
                <Match withoutHeader={true} data={todayMatch} isLive={true}/>
            </>
            }
        </div>
        </div>
      </div>
    </>
  );
};

export default TourPage;
