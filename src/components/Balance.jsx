import React, { useState, useEffect} from "react";
import SVGIcons from "./SvgIcons";
import Button from "./Button";

import "../css/Balance.css";


/**
 * 
 * Renders the balance container in the header.
 * It contains information about the user (avatar, current balance, id, etc)
 * 
 */
const Balance = ({ id, numbers, avatarImg, setConnected }) => {
  const [toggle, setToggle] = useState(false);

  // Just for demonstrating (example details & disconnect)
  const handleClick = () => {
    setToggle(!toggle);
  };

  const disconnect = () => {
    setConnected(false);
  }

  useEffect(() => {
    if (toggle) {
      window.addEventListener("click", (e) => {
        if (!e.target.closest(".account-popup")) {
          if (!e.target.closest(".balance-container")) {
            setToggle(false);
          }
        }
      });
    }
  }, [toggle]);
  return (
    <div className="balance">
      <div className="balance-container" onClick={handleClick}>
        <div className="left">
          <span>{id}</span>
          <p>
            <SVGIcons.EmptyWallet /> {numbers}
          </p>
        </div>
        <div className="right">
          <img src={require(`../assets/${avatarImg}.png`)} alt="" />
        </div>
      </div>

      {/* Account information popup */}
      {toggle && (
        <div
          className="account-popup"
          style={{ cursor: toggle ? "default" : "" }}
        >
          <div className="account__header">
            <p>CONNECT WITH METAMASK</p>
            <div className="user">
              <div className="user__info">
                <img src={require(`../assets/${avatarImg}.png`)} alt="" />
                <span>{id}</span>
              </div>
              <div className="user__icons">
                <SVGIcons.Export />
                <SVGIcons.CopyBetID />
              </div>
            </div>
          </div>
          <div className="account__body">
            <p>YOUR BALANCE</p>
            <div className="btns">
              <Button type="primary" size="small" color="grey">
                <SVGIcons.EmptyWallet /> 676.00 BCR
              </Button>
              <Button type="primary" size="small">
                <SVGIcons.SaveAdd /> Add money
              </Button>
            </div>
          </div>
          <div className="account__footer">
            <Button type="secondary" color="grey" onClick={disconnect}>
              <SVGIcons.ToggleOffCircle /> Disconnect
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Balance;
