import React from "react";
import SVGIcons from "./SvgIcons";
import FullLogo from "../assets/full-logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";
import "../css/Header.css";

const Header = ({
  showBetsContainer,
  setShowBetsContainer,
  collapseNavbar,
  setCollapseNavbar,
  collapse,
  isMobile,
  showNavbar, setShowNavbar
}) => {
  const handleClick = () => {
    setShowBetsContainer(!showBetsContainer);
  };
  const handleClick2 = () => {
    setCollapseNavbar(!collapseNavbar);
  };
  return (
    <>
      <div className="header">
        <div className="header__content">
          <div className="header__left">
            {!isMobile ? (
                [collapse ? <SVGIcons.ArrowRight onClick={handleClick2} /> :
                <SVGIcons.ArrowLeft onClick={handleClick2} />
                ]
            ) : 
            <div className="logo">
              <img src={FullLogo} alt="" />
            </div>}
            {!isMobile && <NavLinks/>}
          </div>
          <div className="header__right">
            <Button type="primary">
              <SVGIcons.EmptyWallet /> Connect Wallet
            </Button>
            {!isMobile ? [
              showBetsContainer ? (
                <Button onClick={handleClick} type="secondary" color="grey">
                  <SVGIcons.Close /> Close bets
                </Button>
              ) : (
                <Button onClick={handleClick} type="secondary">
                  <SVGIcons.Bets /> Show bets
                </Button>
              ),
            ] : <Button onClick={() => setShowNavbar(!showNavbar)} addClass="hamburger-btn">{showNavbar ? <SVGIcons.CloseMenu/> : <SVGIcons.Hamburger/>}</Button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
