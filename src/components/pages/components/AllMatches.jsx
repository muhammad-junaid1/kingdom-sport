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
  }
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
            {currTab === "live" ? (
              <Button
                onClick={(e) => handleClick(e, "live")}
                type="primary"
                color="red"
                size="small"
              >
                Live (4)
              </Button>
            ) : (
              <Button onClick={(e) => handleClick(e,"live")} size="small">
                Live (4)
              </Button>
            )}

            {currTab === "upcoming" ? (
              <Button
                onClick={(e) => handleClick(e,"upcoming")}
                type="primary"
                size="small"
              >
                Upcoming (5)
              </Button>
            ) : (
              <Button onClick={(e) => handleClick(e,"upcoming")} size="small">
                Upcoming (5)
              </Button> 
            )}

            {currTab === "topBets" ? (
              <Button
                onClick={(e) => handleClick(e,"topBets")}
                type="primary"
                color="violet"
                size="small"
              >
                Top bets (2)
              </Button>
            ) : (
              <Button onClick={(e) => handleClick(e,"topBets")} size="small">
                Top bets (2)
              </Button>
            )}
            </div>
          </div>
        <div className="match__body" ref={matchBody}>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th>MATCH</th>
                <th>TIME</th>
                <th>MATCH-WINNER</th>
              </tr>
            </thead>
            <tbody>
              {/* For live items */}
              {currTab === "live" && [
                liveData.map((data, index) => {
                  return (
                    <MatchDetails
                      data={data}
                      isLive={true}
                      highlightScores={index === 0 ? true : false}
                    />
                  );
                }),
              ]}

              {/* For upcoming items */}
              {currTab === "upcoming" && [
                upcomingData.map((data) => {
                  return <MatchDetails data={data} />;
                })
              ]}

              {/* For top bets */}
              {currTab === "topBets" && [
                topBetsData.map((data) => {
                  return <MatchDetails data={data} />;
                })
              ]}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllMatches;
