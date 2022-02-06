import React, { useState, useRef } from "react";
import SVGIcons from "../../SvgIcons";
import MatchDetails from "./MatchDetails";
import Button from "../../Button";

const AllMatches = ({ icon, sport, liveData, upcomingData, topBetsData }) => {
  const Icon = SVGIcons[icon];
  const [currTab, setCurrTab] = useState("live");
  const matchBody = useRef();

  const handleClick = (e, tab) => {
    matchBody.current.scrollLeft = 0;
    setCurrTab(tab);
  };
  return (
    <>
      <div className="allmatches">
        <div className="allmatches__header">
          <p>
            <Icon color="white" /> {sport}
          </p>
          <Button type="primary" color="grey" size="small">
            See more
          </Button>
        </div>
        <div className="match-tabs-wrapper">
          <div className="match-tabs">
            <Button
              onClick={(e) => handleClick(e, "live")}
              {...(currTab === "live" && { type: "primary", color: "red" })}
              size="small"
            >
              Live (4)
            </Button>

            <Button
              onClick={(e) => handleClick(e, "upcoming")}
              {...(currTab === "upcoming" && { type: "primary" })}
              size="small"
            >
              Upcoming (5)
            </Button>

            <Button
              onClick={(e) => handleClick(e, "topBets")}
              {...(currTab === "topBets" && {
                type: "primary",
                color: "violet",
              })}
              size="small"
            >
              Top bets (2)
            </Button>
          </div>
        </div>
        <div className="match__body" ref={matchBody}>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th>MATCH</th>
                <th>TIME</th>
                <th>MATCH WINNER</th>
              </tr>
            </thead>
            <tbody>
              {/* For live items */}
              {currTab === "live" && [
                liveData.map((data, index) => {
                  return (
                    <MatchDetails
                    key={index}
                      data={data}
                      isLive={true}
                      highlightScores={index === 0 ? true : false}
                      isTour={false}
                    />
                  );
                }),
              ]}

              {/* For upcoming items */}
              {currTab === "upcoming" && [
                upcomingData.map((data, index) => {
                  return <MatchDetails key={index} data={data} isTour={false}/>;
                  
                }),
              ]}

              {/* For top bets */}
              {currTab === "topBets" && [
                topBetsData.map((data, index) => {
                  return <MatchDetails key={index} data={data} isTour={false} />;
                }),
              ]}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllMatches;
