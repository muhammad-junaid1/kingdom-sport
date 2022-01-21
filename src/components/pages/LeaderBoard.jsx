import React, {useEffect, useRef } from "react";
import "./css/Leaderboard.css";
import SVGIcons from "../SvgIcons";
import Totals from "./components/Totals";
import Leader from "./components/Leader";
import sampleData from "../../sampleData";
import { Grid } from "gridjs";

const LeaderBoard = () => {
    const tableRef = useRef(null);
  const wrapperRef = useRef(null);


  useEffect(() => {
    const grid = new Grid({
      from: tableRef.current,
       pagination: {
           enabled: true,
           buttonsCount: true,
           limit: 10
       },
    //    autoWidth: true,
       search: true,
       className: {
        tr: 'table-row',
        search: "table-search-input",
        thead: "table-header",
        th: "table-headings",
        table: "data-table",
        td: "table-data",
        tbody: "table-body"
      }
    }).render(wrapperRef.current);
    const tableInput = document.querySelector(".table-search-input input");
    tableInput.setAttribute("placeholder", "Search a wallet");
    const img = document.createElement("img");
    img.src=require("../../assets/search.png");
    img.alt="";
    document.querySelector(".table-search-input").append(img);
  }, []);
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
          </div>
          <div className="right">
            <Totals Icon={SVGIcons["DollarSquare"]} headline="Total pool" numbersText="8,633,384.00 BCR" increase="0.19%"/>
            <Totals Icon={SVGIcons["Bets"]} headline="Bets placed" numbersText="38907 Bets" increase="52 bets"/>
          </div>
        </div>
        <div className="leaderboard__body">
            <table ref={tableRef} cellPadding={0}>
            <thead>
                <tr>
                    <th>No</th>
                    <th>USER ADDRESS</th>
                    <th>BEST BET</th>
                    <th>WON</th>
                    <th>LOSE</th>
                    <th>RESULT</th>
                </tr>
                </thead>
                <tbody>
                  {sampleData.leaderBoard.map((item, index) => {
                      return <Leader id={index + 1} {...item}/>
                  })}
                </tbody>
            </table>
            <div ref={wrapperRef}></div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
