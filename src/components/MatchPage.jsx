import React, { useState, useEffect } from "react";
import BreadCrumbs from "./pages/components/BreadCrumbs";
import SVGIcons from "./SvgIcons";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import sampleData from "../sampleData";
import UpcomingMatchAccordion from "./UpcomingMatchAccordion";
import PrematchBanner from "./PrematchBanner";
import LiveMatchBanner from "./LiveMatchBanner";
import "../css/MatchPage.css";

/**
 *
 * This component renders the data about specific match.
 * Now, you'll fetch the match data by querying match id, tour id and sport (coming from url query params)
 * Capture those values in useEffect()
 * After fetching the data about that particular match, store in the state and thats it.
 *
 */
const MatchPage = ({ showBetsContainer }) => {
  // Match ID coming from url query params
  const [matchId, setMatchId] = useState(null);
  const [tourId, setTourId] = useState(null);
  const [sportName, setSportName] = useState(null);

  // Here, we'll store the match data after querying from db
  const [samplePreMatchData, setSamplePreMatchData] = useState();
  const [sampleLiveData, setSampleLiveData] = useState();

  // Tab buttons
  const tabBtns = [
    "All markets",
    "Winner",
    "Tool",
    "Handicap",
    "Correct score",
    "Yellow cards",
    "Fouls",
    "Corners",
    "Others",
  ];
  const [activeBtn, setActiveBtn] = useState("All markets");
  const accordions = sampleData.accordions;

  const { search, pathname } = useLocation();

  useEffect(() => {
    // Construct an object of url query params
    const urlParams = new URLSearchParams(search);
    let urlParamsObj = {};
    for (let value of urlParams.keys()) {
      urlParamsObj[value] = urlParams.get(value);
    }
    setMatchId(parseInt(urlParamsObj.match));
    setTourId(parseInt(urlParamsObj.tour));
    setSportName(urlParamsObj.sport);
  }, [search]);
  return (
    <>
      <div
        className="match-page"
        style={{ width: showBetsContainer ? "100%" : "70%" }}
      >
        {/* Get the sportname, tour text (from its id), and teams names and place them in items arr */}
        <BreadCrumbs
          items={[
            pathname === "/" ? "Home" : "Favourites",
            sportName,
            "Premier League",
            "Queens Park Rangers VS AFC BOURNEMOUTH",
          ]}
        />

        <div className="match-page__header">
          {/* We'll get (isLive) property from (matchData) above in state */}
          {/* For example, it shows live section if (matchId) is 1, otherwise prematch */}
          <div className="match-page__header-content">
            {matchId === 1 ? (
              <>
                <div className="left">
                  <SVGIcons.PlayCircle />
                  <img
                    src={require("../assets/match-page-live-label.png")}
                    alt=""
                  />
                </div>
                <div className="right">
                    <LiveMatchBanner/>
                </div>
              </>
            ) : (
              <div className="prematch-details">
                <PrematchBanner
                  bets={{
                    data: [
                      ["1x", "1.91"],
                      ["1x", "1.91"],
                      ["1x", "1.91"],
                    ],
                    moreBets: 253,
                  }}
                  teams={{
                  a: {
                    text: "QUEENS PARK RANGERS",
                    percent: "70%",
                    logo: "logo",
                  },
                  b: {
                    text: "AFC BOURNEMOUTH",
                    percent: "40%",
                    logo: "logo1",
                  },
                }}
                dateTime="DEC 28, 22:00"
                />
              </div>
            )}
          </div>
        </div>

        <div className="match-page__body">
          <div className="match-page__tabs-container">
            <div className="match-page__tabs">
              {tabBtns.map((btn, index) => {
                return (
                  <Button
                    key={index}
                    {...(activeBtn === btn && { type: "primary" })}
                    size="small"
                    onClick={() => setActiveBtn(btn)}
                  >
                    {btn}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="match-page__accordions">
            {accordions.map((a, index) => {
              return (
                <UpcomingMatchAccordion
                  key={index}
                  title={a.text}
                  items={a.items}
                  {...(index > 1 ? { halfWidth: true } : null)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchPage;
