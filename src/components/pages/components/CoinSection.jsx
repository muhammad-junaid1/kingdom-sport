import React, { useState, useEffect, useContext } from "react";
import BreadCrumbs from "./BreadCrumbs";
import SVGIcons from "../../SvgIcons";
import Button from "../../Button";
import "../css/CoinSection.css";
import CryptoBet from "./CryptoBet";
import { ContentRoutesContext } from "../../Main";

// Graph
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const CoinSection = ({ coin, endTime, bet, prices }) => {
  const Icon = SVGIcons.CryptoIcons[coin.icon];
  const { isMobile, showBetsContainer } = useContext(ContentRoutesContext);
  const [gradient, setGradient] = useState("");

  // Graph section tabs
  const [activeTab, setActiveTab] = useState("All time");
  const graphTabs = ["All time", "24h", "7d", "30d"];

  useEffect(() => {
    let ctx = document
      .querySelector(".coin-graph__body canvas")
      .getContext("2d");
    let gradientColor = ctx.createLinearGradient(0, 0, 0, 400);
    gradientColor.addColorStop(0, "rgba(50, 215, 75, 0.5)");
    gradientColor.addColorStop(1, "rgba(50, 215, 75, 0)");
    setGradient(gradientColor);
  }, []);
  return (
    <>
      <div
        className="coin-section"
        style={{ width: showBetsContainer ? "100%" : "" }}
      >
        <div className="coin-section__header">
          <BreadCrumbs items={["CRYPTO", coin.details()]} />
        </div>
        <div className="coin-section__content">
          <div className="coin-content__container">
            <div className="left">
              {!isMobile && (
                <p className="coin-content__header">
                  <Icon color="#743EE8" /> {coin.text}
                </p>
              )}
              {isMobile ? (
                <p className="coin-content__header">
                  <Icon /> {coin.details()}
                </p>
              ) : (
                <h2 className="coin-content__details">{coin.details()}</h2>
              )}
              <p className="coin-content__endtime">
                {isMobile ? (
                  `Market ends at ${endTime[0]} ${endTime[1]}`
                ) : (
                  <>
                    <span className="fw-bold">END TIME</span> {endTime[0]}{" "}
                    {endTime[1]}
                  </>
                )}
              </p>
              <div className="coin-content__prices">
                <p className="prices__locked">
                  <span>Locked price</span>
                  {prices.locked}
                </p>
                <p className="prices__closed">
                  <span>Closed price</span>
                  {prices.closed}
                </p>
              </div>
            </div>
            <div className="right">
              <div className="coin-content__crypto-bets">
                <CryptoBet type="moon" {...bet.moon} />
                <CryptoBet type="rekt" {...bet.rekt} />
              </div>
            </div>
          </div>
          <div className="coin-content__graph">
            <div className="coin-graph__header">
              <div className="coin-graph__tabs">
                {graphTabs.map((tab, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => setActiveTab(tab)}
                      {...(activeTab === tab ? { type: "primary" } : null)}
                    >
                      {tab}
                    </Button>
                  );
                })}
              </div>
            </div>
            <div className="coin-graph__body">
              <Line
                type="line"
                options={{
                  plugins: {
                    tooltip: false,
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    y: {
                      ticks: {
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                          return value.toFixed(1) +"k";
                        },
                        color: "white",
                      },
                    },
                    x:{
                      ticks: {
                        color:"white"
                      }
                    }
                  },
                }}
                data={{
                  labels: [
                    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
                  ],
                  datasets: [
                    {
                      fill: true,
                      backgroundColor: gradient,
                      borderColor: "#32D74B",
                      pointRadius: 0,
                      borderWidth: 3,
                      data: [0, 10, 5, 0, 30, 25, 10, 70, 20],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinSection;
