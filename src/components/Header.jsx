import React from "react";
import SVGIcons from "./SvgIcons";
import Button from "./Button";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__content">
          <div className="header__left">
            <SVGIcons.ArrowLeft />
            <div className="nav-links">
              <ul>
                <li>
                  <a href="/" className="nav-link-active">SPORT</a>
                  <div className="nav-link-active-border"></div>
                </li>
                <li>
                  <a href="/">CRYPTO</a>
                </li>
                <li>
                  <a href="/">LEADERBOARD</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__right">
                <Button><SVGIcons.EmptyWallet/> Connect Wallet</Button>
                <Button type="secondary"><SVGIcons.Bets/> Open bets</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
