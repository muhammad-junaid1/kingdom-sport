import React, { useState } from "react";
import Button from "./Button";
import SVGIcons from "./SvgIcons";
import "../css/BetsContainer.css";

const BetsContainer = ({ isConnected, isMobile, showBets, setShowBets }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={`bets`}>
        <div className="bets__header">
          {toggle ? (
            <Button onClick={() => setToggle(false)}>
              <SVGIcons.SaveAdd color="#48484A"/> Best slip
            </Button>
          ) : (
            <Button onClick={() => setToggle(false)} type="primary">
              <SVGIcons.SaveAdd/> Best slip
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
          }`}
        >
          <div className={`bets__body-wrapper`}>
            {!isConnected && (
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
            )}
          </div>
        </div>
        {isMobile ? 
          <div className="bets__footer">
          <div className="left">
            <p>
              <SVGIcons.EmptyWallet /> <span>Settings</span>
            </p>
            <SVGIcons.ArrowUp />
          </div>
          <div className="right">
                <Button onClick={() => setShowBets(!showBets)} type="secondary" color="grey"><SVGIcons.CloseMenuCircle/></Button>
          </div>
        </div>
        :
        <div className="bets__footer">
          <p>
            <SVGIcons.EmptyWallet /> <span>Settings</span>
          </p>
          <SVGIcons.ArrowUp />
        </div>
        }
      </div>
    </>
  );
};

export default BetsContainer;
