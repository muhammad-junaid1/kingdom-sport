import React, { useState, useEffect } from "react";
import Button from "./Button";
import sampleData from "../sampleData";
import SVGIcons from "./SvgIcons";
import "../css/Sport.css";
import Match from "./pages/components/Match";
import Tournaments from "./Tournaments";
import DatePicker from "react-datepicker";

const Sport = ({ sportName, page }) => {
  const [currTab, setCurrTab] = useState("live");
  const [startDate, setStartDate] = useState(null);

  // Data
  const liveData = sampleData.liveToursData.filter(
    (item) => item.text.toLowerCase() === sportName.toLowerCase()
  );
  const prematchData = sampleData.preMatches.filter(
    (item) => item.text.toLowerCase() === sportName.toLowerCase()
  );
  const allTours = sampleData.allTours.filter((item) => item.sport.toLowerCase() === sportName.toLowerCase());

  const handleClick = (e, tab) => {
    setCurrTab(tab);
  };

  useEffect(() => {
    setStartDate(null);
  }, [sportName]);

  useEffect(() => {
    if (startDate) {
      document.querySelector(".react-datepicker__close-icon").innerHTML =
        "Clear &#10005;";
    }
  }, [startDate]);

  // Input for date picker
  const CalendarBtn = React.forwardRef(({ value, onClick }, ref) => (
    <Button
      {...(value ? { type: "primary" } : null)}
      onClick={onClick}
      ref={ref}
      size="small"
    >
      <span style={{ color: value ? "white" : "#743EE8", marginRight: 4 }}>
        {value
          ? new Date(value).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Calendar"}
      </span>{" "}
      <SVGIcons.Calendar {...(value ? { color: "white" } : null)} />
    </Button>
  ));
  return (
    <>
      <div className="sport-container">
        <div className="sport__header-tabs">
          <div className="sport__header">
            <Button
              onClick={(e) => handleClick(e, "tours")}
              {...(currTab === "tours" && { type: "primary" })}
              size="small"
            >
              Tournaments (123)
            </Button>
            <Button
              onClick={(e) => handleClick(e, "live")}
              {...(currTab === "live" && { type: "primary", color: "red" })}
              size="small"
            >
              <SVGIcons.Live
                {...(currTab === "live" ? { color: "white" } : null)}
              />{" "}
              <span
                style={{ color: currTab === "live" ? "white " : "#FF453A" }}
              >
                {" "}
                Live (4)
              </span>
            </Button>
            <Button
              onClick={(e) => handleClick(e, "prematch")}
              {...(currTab === "prematch" && { type: "primary" })}
              size="small"
            >
              Prematch (23)
            </Button>

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

        <div className="sport__body-container">
          <div className="sport__body">
            {currTab === "live" && [
              liveData.map((item) => {
                return (
                  <>
                    {page === "home"
                      ? [
                          item.tours.map((tour) => {
                            return (
                              <Match
                                isLive={tour.isLive}
                                data={tour.matchData}
                                tourId={tour.id}
                                tourName={tour.name}
                                tourIcon={tour.icon}
                                isTour={true}
                              />
                            );
                          }),
                        ]
                      : [
                          item.tours
                            .filter((t) => t.isFav === true)
                            .map((tour) => {
                              return (
                                <Match
                                  isLive={tour.isLive}
                                  data={tour.matchData}
                                  tourId={tour.id}
                                  tourName={tour.name}
                                  tourIcon={tour.icon}
                                  isTour={true}
                                  isFavPage={true}
                                />
                              );
                            }),
                        ]}
                  </>
                );
              }),
            ]}

            {currTab === "tours" && <Tournaments allTours={allTours}/>}
            {currTab === "prematch" && [
              prematchData.map((item) => {
                return (
                  <>
                    {page === "home"
                      ? [
                          item.tours.map((tour) => {
                            return (
                              <Match
                                data={tour.matchData}
                                tourId={tour.id}
                                tourName={tour.name}
                                tourIcon={tour.icon}
                                isTour={true}
                              />
                            );
                          }),
                        ]
                      : [
                          item.tours
                            .filter((t) => t.isFav === true)
                            .map((tour) => {
                              return (
                                <Match
                                  data={tour.matchData}
                                  tourId={tour.id}
                                  tourName={tour.name}
                                  tourIcon={tour.icon}
                                  isTour={true}
                                  isFavPage={true}
                                />
                              );
                            }),
                        ]}
                  </>
                );
              }),
            ]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sport;
