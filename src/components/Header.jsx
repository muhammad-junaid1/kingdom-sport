import React from "react";
import SVGIcons from "./SvgIcons";
import Button from "./Button";
import "../css/Header.css";

const Header = ({ showBetsContainer, setShowBetsContainer, collapseNavbar, setCollapseNavbar, collapse }) => {
  const handleClick = () => {
    setShowBetsContainer(!showBetsContainer);
  };
  const handleClick2 = () => {
    setCollapseNavbar(!collapseNavbar);
  }
  return (
    <>
      <div className="header">
        <div className="header__content">
          <div className="header__left">
          {collapse ? <SVGIcons.ArrowRight onClick={handleClick2}/> :
            <SVGIcons.ArrowLeft onClick={handleClick2}/>
          }
            <div className="nav-links">
              <ul>
                <li>
                  <a href="/" className="nav-link-active">
                    SPORT
                  </a>
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
            <Button type="primary">
              <SVGIcons.EmptyWallet /> Connect Wallet
            </Button>
            {showBetsContainer ? (
              <Button onClick={handleClick} type="secondary" color="grey">
                <SVGIcons.Close /> Close bets
              </Button>
            ) : (
              <Button  onClick={handleClick} type="secondary">
                <SVGIcons.Bets /> Show bets
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
