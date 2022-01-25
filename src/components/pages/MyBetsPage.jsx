import React, {useEffect, useRef , useState} from "react";
import BgImg from "../../assets/my-bets-page-bg.png";
import BetsPageMoney from './components/BetsPageMoney';
import Button from "../Button";
import MyBetsRow from "./components/MyBetsRow";
import SVGIcons from "../SvgIcons";
import sampleData from "../../sampleData";
import { Grid } from "gridjs";
import {Curve, AvatarHolder, Ribbon, DashedBorder, BigCircle, Avatar} from "../../assets/My bet/index.js";

import "./css/MyBetsPage.css";

const MyBetsPage = ({isMobile}) => {
    const tableRef = useRef(null);
    const wrapperRef = useRef(null);
    const tableRef2 = useRef(null);
    const wrapperRef2 = useRef(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if(!toggle) {

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
            const tableInput = document.querySelector(".mybets__table .table-search-input input");
            tableInput.setAttribute("placeholder", "Search a wallet");
            const img = document.createElement("img");
            img.src=require("../../assets/search.png");
            img.alt="";
            document.querySelector(".mybets__table .table-search-input").append(img);
            document.querySelector(".mybets__table .gridjs-container .gridjs-wrapper").append(document.querySelector(".toggle-btns"));

        }

        if(toggle) {

            new Grid({
                from: tableRef2.current,
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
            }).render(wrapperRef2.current);
            const tableInput2 = document.querySelector(".topups__table .table-search-input input");
            tableInput2.setAttribute("placeholder", "Search a wallet");
            const img2 = document.createElement("img");
            img2.src=require("../../assets/search.png");
            img2.alt="";
            document.querySelector(".topups__table .table-search-input").append(img2);
            document.querySelector(".topups__table  .gridjs-container .gridjs-wrapper").append(document.querySelector(".toggle-btns"));
        }
    }, [toggle]);
    
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

                {/* Toggle btns */}
                <div className="toggle-btns">
                <div className="toggle-btns__content">
                {!toggle ?  <><Button type="primary" onClick={() => setToggle(false)}>Your bets (100)</Button>
                 <Button onClick={()=> setToggle(true)}>Your topups (100)</Button></>
                 : <>
                 <Button onClick={() => setToggle(false)}>Your bets (100)</Button>
                 <Button type="primary" onClick={()=> setToggle(true)}>Your topups (100)</Button>
                 </>
                 }
                    </div>
                </div>
                <div className="mybets--page__body">
                <div className="mybets__table" style={{display: toggle ? "none" : "block"}}>
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
                 {
                    sampleData.yourBetsTable.map((item) => {
                      return <MyBetsRow {...item}/>
                  })
                }
                
                </tbody>
            </table>
            <div ref={wrapperRef}></div>
            </div>

                <div className="topups__table" style={{display: toggle ? "block" : "none"}}>

                <table ref={tableRef2} cellSpacing={0} cellPadding={0}>
            <thead>
            <tr>
                    <th>ID</th>
                    <th>RESULT</th>
                </tr>
            
                </thead>
                <tbody>
               <tr>
                   <td>hi</td>
                   <td>hi</td>
               </tr>
                
               <tr>
                   <td>hi</td>
                   <td>hi</td>
               </tr>
                
               <tr>
                   <td>hi</td>
                   <td>hi</td>
               </tr>
                
                </tbody>
            </table>
            <div ref={wrapperRef2}></div>
            </div>
                
                </div>

                {/* bg image */}
                {!isMobile && <img className='mybets-bg' src={BgImg} alt="" />}
            </div>  
        </>
    );
};


export default MyBetsPage;