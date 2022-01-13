import React, { useState } from "react";
import Button from "./Button";
import SVGIcons from "./SvgIcons";
import "../css/BetsContainer.css";
import MatchWinnersList from "./MatchWinnersList";
import sampleData from "../sampleData";

const BetsContainer = ({ isConnected, isMobile, showBets, setShowBets }) => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  return (
    <>
      <div className={`bets`}>
        <div className="bets__header">
          {toggle ? (
            <Button onClick={() => setToggle(false)}>
              <SVGIcons.SaveAdd color="#48484A" /> Best slip
            </Button>
          ) : (
            <Button onClick={() => setToggle(false)} type="primary">
              <SVGIcons.SaveAdd /> Best slip
            </Button>
          )}
          {toggle ? (
            <Button type="primary" onClick={() => setToggle(true)}>
              <SVGIcons.Bets /> My bets
            </Button>
          ) : (
            <Button onClick={() => setToggle(true)}>
              <SVGIcons.Bets color="#48484A" /> My bets
            </Button>
          )}
        </div>
        <div
          className={`bets__body${
            !isConnected ? " not-connected-wrapper" : ""
          }`} style={{height: isConnected ? "70%" : "100%"}}
        >
          <div className={`bets__body-wrapper`}>
            {!isConnected ? (
              <div className="not-connected">
                <span className="text-muted fw-bold">Choose the odds and</span>
                <a href="/" className="fw-bold">
                  Make your bank account great again
                </a>
                <hr />
                <p>
                  This wallet is not connected. <br /> Please read the{" "}
                  <a className="fw-bold" href="/">
                    instructions
                  </a>{" "}
                  or
                </p>
                <Button type="primary">
                  <SVGIcons.EmptyWallet /> Connect wallet now
                </Button>
              </div>
            ) : (
              <>
                <div className="bets__header" style={{ marginTop: "1.0rem" }}>
                  {toggle2 ? (
                    <Button onClick={() => setToggle2(false)}>
                      <SVGIcons.SingleBet color="#48484A" /> Single bet
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setToggle2(false)}
                      type="secondary"
                      color="grey"
                    >
                      <SVGIcons.SingleBet /> Single bet
                    </Button>
                  )}
                  {toggle2 ? (
                    <Button
                      type="secondary"
                      color="grey"
                      onClick={() => setToggle2(true)}
                    >
                      <SVGIcons.Save2 /> Parlay
                    </Button>
                  ) : (
                    <Button onClick={() => setToggle2(true)}>
                      <SVGIcons.Save2 color="#48484A" /> Parlay
                    </Button>
                  )}
                </div>
                <MatchWinnersList
                  Icon={SVGIcons["Soccer"]}
                  sport="FOOTBALL"
                  winnersData={sampleData.matchWinners}
                />
                <MatchWinnersList
                  Icon={SVGIcons["Basketball"]}
                  sport="BASKETBALL"
                  winnersData={sampleData.matchWinners}
                />
              </>
            )}
          </div>
        </div>

          <div className="bets__footer-wrapper">
          {isConnected &&
          <>
          <div className="min-max">
              <div className="left">
                <Button type="primary" size="small" color="violet">
                  Min
                </Button>
                <p>Bet amount</p>
              </div>
              <div className="right">
                <p>BCR</p>
                <Button type="primary" size="small" color="green">
                  Max
                </Button>
              </div>
            </div>
            <div className="place-bet">
              <div className="place-bet__header">
                <p>POSSIBLE WIN</p>
                <p className="win">$0.00</p>
              </div>
              <Button type="primary">Place bet $0.00</Button>
            </div>
            </>
          }

            {isMobile ? <div className="bets__footer">
              <div className="left">
                <p>
                  <SVGIcons.EmptyWallet /> <span>Settings</span>
                </p>
                <SVGIcons.ArrowUp />
              </div>
              <div className="right">
                <Button
                  onClick={() => setShowBets(!showBets)}
                  type="secondary"
                  color="grey"
                >
                  <SVGIcons.CloseMenuCircle />
                </Button>
              </div>
            </div> :
            <div className="bets__footer">
              <p>
                <SVGIcons.EmptyWallet /> <span>Settings</span>
              </p>
              <SVGIcons.ArrowUp />
            </div>
            }
          </div>
      </div>
    </>
  );
};

export default BetsContainer;
