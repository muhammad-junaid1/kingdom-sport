import React, {useEffect, useRef } from "react";
import BgImg from "../../assets/my-bets-page-bg.png";
import BetsPageMoney from './components/BetsPageMoney';
import Button from "../Button";
import Leader from "./components/Leader";
import SVGIcons from "../SvgIcons";
import sampleData from "../../sampleData";
import { Grid } from "gridjs";
import {Curve, AvatarHolder, Ribbon, DashedBorder, BigCircle, Avatar} from "../../assets/My bet/index.js";

import "./css/MyBetsPage.css";

const MyBetsPage = ({isMobile}) => {
    const tableRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        new Grid({
            from: tableRef.current,
             pagination: {
                 enabled: true,
                 buttonsCount: true,
                 limit: 10
             },
             autoWidth: true,
             search: true,
             className: {
              tr: 'mybets-table-row',
              search: "table-search-input",
              thead: "mybets-table-header",
              th: "mybets-table-headings",
              td: "mybets-table-data",
              tbody: "mybets-table-body"
            },
            language: {
                "pagination": {
                    "next": "›",
                    "previous": "‹"
                }
            }
          }).render(wrapperRef.current);
          // Modify the search input
            const tableInput = document.querySelector(".table-search-input input");
            tableInput.setAttribute("placeholder", "Search a wallet");
            const img = document.createElement("img");
            img.src=require("../../assets/search.png");
            img.alt="";
            document.querySelector(".table-search-input").append(img);
    }, []);
    return (
        <>
            <div className="mybets-page">
                <div className="mybets-page__header">
                <div className="bets-money">
                    <BetsPageMoney icon="MoneyInPool" text="Your money in pool" money="676.00 BCR"/>
                    <BetsPageMoney icon="MoneyOnBets" text="On bets" money="300.00 BCR"/>
                    <BetsPageMoney variant="green" icon="MoneyOnWinnings" text="Winnings for all time" money="176.00 BCR"/>
                </div>
                <div className="user-wins">
                <div className="user-wins-holder">
                    <img src={Curve} alt="" className="user-wins--curve"/>
                    <img src={AvatarHolder} alt="" className="user-wins--avatar_holder"/>
                    <img src={Ribbon} alt="" className='user-wins--ribbon'/>
                    <img src={DashedBorder} alt="" className="user-wins--dashed_border"/>
                    <img src={BigCircle} alt=""  className="user-wins--big_circle"/>
                    <img src={Avatar} alt="" className="user-wins--avatar"/>
                    <div className="user-wins--btn">
                        <Button type="primary"><SVGIcons.SaveSquare/> Add money</Button>
                    </div>
                </div>
                </div>
                </div>
                <div className="mybets--page__body">
                <table ref={tableRef} cellPadding={0}>
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
                  {sampleData.leaderBoard.map((item, index) => {
                      return <Leader id={index + 1} {...item}/>
                  })}
                </tbody>
            </table>
            <div ref={wrapperRef}></div>
                </div>

                {/* bg image */}
                {!isMobile && <img className='mybets-bg' src={BgImg} alt="" />}
            </div>  
        </>
    );
};


export default MyBetsPage;