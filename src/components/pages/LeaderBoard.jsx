import React from "react";
import "./css/Leaderboard.css";
import SVGIcons from "../SvgIcons";
import SearchInput from "../SearchInput";
import Totals from "./components/Totals";

const LeaderBoard = () => {
  return (
    <>
      <div className="leaderboard">
        <div className="leaderboard__header">
          <div className="left">
            <div className="leaderboard__text">
              <h1>
                <SVGIcons.MedalStar /> Top-300 leaders
              </h1>
              <p>
                Here you can find the information about our best players! They
                are already playing, earning and enjoying! Feel free to join
                them
              </p>
            </div>
                <SearchInput/>
          </div>
          <div className="right">
            <Totals/>
            <Totals/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
