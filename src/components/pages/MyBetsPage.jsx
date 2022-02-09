import React, { useEffect, useRef, useState } from "react";
import BgImg from "../../assets/my-bets-page-bg.png";
import BetsPageMoney from "./components/BetsPageMoney";
import Button from "../Button";
import MyBetsRow from "./components/MyBetsRow";
import SVGIcons from "../SvgIcons";
import sampleData from "../../sampleData";
import { Grid } from "gridjs";

import "./css/MyBetsPage.css";

const MyBetsPage = ({ isMobile }) => {
  const tableRef = useRef(null);
  const wrapperRef = useRef(null);
  const tableRef2 = useRef(null);
  const wrapperRef2 = useRef(null);
  const [toggle, setToggle] = useState(false);

  // users's avatar
  const [avatarSrc, setAvatarSrc] = useState("avatar-full");

  // Ribbon & Medal src change depending on this number
  const [wins, setWins] = useState(1);

  useEffect(() => {
    new Grid({
      from: tableRef.current,
      pagination: {
        enabled: true,
        buttonsCount: true,
        limit: 10,
      },
      autoWidth: true,
      search: true,
      className: {
        tr: "mybets-table-row",
        search: "table-search-input",
        thead: "mybets-table-header",
        th: "mybets-table-headings",
        td: "mybets-table-data",
        tbody: "mybets-table-body",
      },
      language: {
        pagination: {
          next: "›",
          previous: "‹",
        },
      },
    }).render(wrapperRef.current);
    if (!toggle) {
      // Modify the search input
      const tableInput = document.querySelector(
        ".mybets__table .table-search-input input"
      );
      tableInput.setAttribute("placeholder", "Search a wallet");
      const img = document.createElement("img");
      img.src = require("../../assets/search.png");
      img.alt = "";
      document.querySelector(".mybets__table .table-search-input").append(img);
      document
        .querySelector(".mybets__table .gridjs-container .gridjs-wrapper")
        .append(document.querySelector(".toggle-btns"));
    }

    new Grid({
      from: tableRef2.current,
      pagination: {
        enabled: true,
        buttonsCount: true,
        limit: 10,
      },
      autoWidth: true,
      search: true,
      className: {
        tr: "mybets-table-row",
        search: "table-search-input",
        thead: "mybets-table-header",
        th: "mybets-table-headings",
        td: "mybets-table-data",
        tbody: "mybets-table-body",
      },
      language: {
        pagination: {
          next: "›",
          previous: "‹",
        },
      },
    }).render(wrapperRef2.current);

    // Modify the search input

    if (toggle) {
      const tableInput2 = document.querySelector(
        ".topups__table .table-search-input input"
      );
      tableInput2.setAttribute("placeholder", "Search a wallet");
      const img2 = document.createElement("img");
      img2.src = require("../../assets/search.png");
      img2.alt = "";
      document.querySelector(".topups__table .table-search-input").append(img2);
      document
        .querySelector(".topups__table  .gridjs-container .gridjs-wrapper")
        .append(document.querySelector(".toggle-btns"));
    }
  }, [toggle]);

  return (
    <>
      <div className="mybets-page">
        <div className="mybets-page__header">
          <div className="bets-money">
            <BetsPageMoney
              icon="MoneyInPool"
              text="Your money in pool"
              money="676.00 BCR"
            />
            <BetsPageMoney
              icon="MoneyOnBets"
              text="On bets"
              money="300.00 BCR"
            />
            <BetsPageMoney
              variant="green"
              icon="MoneyOnWinnings"
              text="Winnings for all time"
              money="176.00 BCR"
            />
          </div>
          <div className="user-wins">
          {wins > 0 &&    <div className="user-wins-holder">
            {(() => {
                if(wins >= 1000){
                    return  <img
                src={require(`../../assets/my-bets-user-wins/medals/medal-for-1000.png`)}
                class="user-wins--medal"
                alt=""
              />
                } else if(wins >= 100){
                   return <img
                src={require(`../../assets/my-bets-user-wins/medals/medal-for-100.png`)}
                class="user-wins--medal"
                alt=""
              />
                } else if(wins >= 50) {
                   return <img
                src={require(`../../assets/my-bets-user-wins/medals/medal-for-50.png`)}
                class="user-wins--medal"
                alt=""
              />
                } else if(wins >= 10) {
                   return <img
                src={require(`../../assets/my-bets-user-wins/medals/medal-for-10.png`)}
                class="user-wins--medal"
                alt=""
              />
                } else if(wins >= 1) {
                   return <img
                src={require(`../../assets/my-bets-user-wins/medals/medal-for-1.png`)}
                class="user-wins--medal"
                alt=""
              />
                }
            })()}
              <img
                src={require(`../../assets/my-bets-user-wins/${avatarSrc}.png`)}
                className="user-wins--avatar"
                alt=""
              />
              <div className="user-wins--btn">
                <Button type="primary">
                  <SVGIcons.SaveSquare /> Add money
                </Button>
              </div>
              {(() => {
                if (wins >= 1000) {
                  return (
                    <img
                      src={require("../../assets/my-bets-user-wins/ribbons/ribbon-for-1000.png")}
                      alt=""
                      className="user-wins--ribbon"
                    />
                  );
                } else if (wins >= 100) {
                  return (
                    <img
                      src={require("../../assets/my-bets-user-wins/ribbons/ribbon-for-100.png")}
                      alt=""
                      className="user-wins--ribbon"
                    />
                  );
                } else if (wins >= 50) {
                  return (
                    <img
                      src={require("../../assets/my-bets-user-wins/ribbons/ribbon-for-50.png")}
                      alt=""
                      className="user-wins--ribbon"
                    />
                  );
                } else if (wins >= 10) {
                  return (
                    <img
                      src={require("../../assets/my-bets-user-wins/ribbons/ribbon-for-10.png")}
                      alt=""
                      className="user-wins--ribbon"
                    />
                  );
                } else if (wins >= 1) {
                  return (
                    <img
                      src={require("../../assets/my-bets-user-wins/ribbons/ribbon-for-1.png")}
                      alt=""
                      className="user-wins--ribbon"
                    />
                  );
                }
              })()}
            </div>} 
         
          </div>
        </div>

        {/* Toggle btns */}
        <div className="toggle-btns">
          <div className="toggle-btns__content">
            {!toggle ? (
              <>
                <Button type="primary" onClick={() => setToggle(false)}>
                  Your bets (100)
                </Button>
                <Button onClick={() => setToggle(true)}>
                  Your topups (100)
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => setToggle(false)}>
                  Your bets (100)
                </Button>
                <Button type="primary" onClick={() => setToggle(true)}>
                  Your topups (100)
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="mybets--page__body">
          <div
            className="mybets__table"
            style={{ display: toggle ? "none" : "block" }}
          >
            <table ref={tableRef} cellSpacing={0} cellPadding={0}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>RESULT</th>
                  <th>AMOUNT</th>
                  <th>WIN-LOSE AMOUNT</th>
                  <th>MATCH</th>
                  <th>COEF</th>
                  <th>DATE/TIME</th>
                  <th>WITHDRAWL</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.yourBetsTable.map((item, index) => {
                  return <MyBetsRow {...item} key={index} />;
                })}
              </tbody>
            </table>
            <div ref={wrapperRef}></div>
          </div>

          <div
            className="topups__table"
            style={{ display: toggle ? "block" : "none" }}
          >
            <table ref={tableRef2} cellSpacing={0} cellPadding={0}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>STATUS</th>
                  <th>AMOUNT</th>
                  <th>CURRENCY</th>
                  <th>DATE/TIME</th>
                  <th>LINK</th>
                </tr>
              </thead>
              <tbody>
                <MyBetsRow
                  topup={true}
                  id={36141}
                  status="completed"
                  amount={["100.00 DBSC", "247.00 DBSC"]}
                  currency={["100.00 USDT", "$1000.00 DBSC"]}
                  dateTime={["08:00:04", "DEC 08, 2021"]}
                  link="0cx68747077673434854875887684...6374637647364736923"
                />
                <MyBetsRow
                  topup={true}
                  id={36141}
                  status="failed"
                  amount={["100.00 DBSC", "247.00 DBSC"]}
                  currency={["100.00 USDT", "$1000.00 DBSC"]}
                  dateTime={["08:00:04", "DEC 08, 2021"]}
                  link="0cx68747077673434854875887684...6374637647364736923"
                />
                <MyBetsRow
                  topup={true}
                  id={36141}
                  status="transferring"
                  amount={["100.00 DBSC", "247.00 DBSC"]}
                  currency={["100.00 USDT", "$1000.00 DBSC"]}
                  dateTime={["08:00:04", "DEC 08, 2021"]}
                  link="0cx68747077673434854875887684...6374637647364736923"
                />
                <MyBetsRow
                  topup={true}
                  id={36141}
                  status="pending"
                  amount={["100.00 DBSC", "247.00 DBSC"]}
                  currency={["100.00 USDT", "$1000.00 DBSC"]}
                  dateTime={["08:00:04", "DEC 08, 2021"]}
                  link="0cx68747077673434854875887684...6374637647364736923"
                />
                <MyBetsRow
                  topup={true}
                  id={36141}
                  status="failed"
                  amount={["100.00 DBSC", "247.00 DBSC"]}
                  currency={["100.00 USDT", "$1000.00 DBSC"]}
                  dateTime={["08:00:04", "DEC 08, 2021"]}
                  link="0cx68747077673434854875887684...6374637647364736923"
                />
              </tbody>
            </table>
            <div ref={wrapperRef2}></div>
          </div>
        </div>

        {/* bg image */}
        {!isMobile && <img className="mybets-bg" src={BgImg} alt="" />}
      </div>
    </>
  );
};

export default MyBetsPage;
