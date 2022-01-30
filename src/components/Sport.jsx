import React, { useState } from "react";
import Button from "./Button";
import sampleData from "../sampleData";
import SVGIcons from "../components/SvgIcons";
import "../css/Sport.css";
import Match from "./pages/components/Match";

const Sport = ({ sportName, page }) => {
  const [currTab, setCurrTab] = useState("live");
  const liveData = sampleData.liveToursData.filter((item) => item.text.toLowerCase() === sportName.toLowerCase());
  const handleClick = (e, tab) => {
    setCurrTab(tab);
  };
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
            Tours (123)
          </Button>
          <Button
            onClick={(e) => handleClick(e, "live")}
            {...(currTab === "live" && { type: "primary", color: "red" })}
            size="small"
          >
            Live (4)
          </Button>
          <Button
            onClick={(e) => handleClick(e, "prematch")}
            {...(currTab === "prematch" && { type: "primary" })}
            size="small"
          >
            Prematch (23)
          </Button>
          <Button
            onClick={(e) => handleClick(e, "calendar")}
            size="small"
          >
            Calendar
          </Button>
        </div>
      </div>

      <div className="sport__body-container">
      <div className="sport__body">
      {currTab === "live" &&
        [liveData.map((item) => {
          return (
            <>
            {page==="home" ?
                [item.tours.map((tour) => {
                  return (
                    <Match
                      isLive={tour.isLive}
                      data={tour.matchData}
                      FavIcon={SVGIcons["Heart"]}
                      tourName={tour.name}
                      tourIcon={tour.icon}
                      isFav={tour.isFav}
                      isTour={true}
                    />
                  );
                })]
            : [item.tours.filter((t) => t.isFav === true).map((tour) => {
                  return (
                    <Match
                      isLive={tour.isLive}
                      data={tour.matchData}
                      FavIcon={SVGIcons["Heart"]}
                      tourName={tour.name}
                      tourIcon={tour.icon}
                      isFav={tour.isFav}
                      isTour={true}
                    />
                  );
                })]}
            </>
          );
        })
        ]}

        {currTab === "tours" && <p>Tours</p>}
        {currTab === "prematch" && <p>Prematch</p>}
        {currTab === "calendar" && <p>Calendar</p>}
              </div>
      </div>

      </div>
    </>
  );
};

export default Sport;
