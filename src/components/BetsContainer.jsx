import React from "react";
import Button from "./Button";
import SVGIcons from "./SvgIcons";
import "../css/BetsContainer.css";

const BetsContainer = ({ isConnected }) => {
  return (
    <>
      <div className={`bets`}>
        <div className="bets__header">
            <Button type="primary"><SVGIcons.SaveAdd/> Best slip</Button>
            <Button><SVGIcons.Bets color="#48484A"/> My bets</Button>
        </div>
        <div className={`bets__body${!isConnected ? " not-connected-wrapper" : ""}`}>
          <div
            className={`bets__body-wrapper`}
          >
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
                  </a> or
                </p>
                <Button type="primary">
                  <SVGIcons.EmptyWallet /> Connect wallet now
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="bets__footer">
            <p><SVGIcons.EmptyWallet/> <span>Settings</span></p>
            <SVGIcons.ArrowUp/>
        </div>
      </div>
    </>
  );
};

export default BetsContainer;
