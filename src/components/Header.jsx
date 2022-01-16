import React from "react";
import SVGIcons from "./SvgIcons";
import FullLogo from "../assets/full-logo.png";
import HalfLogo from "../assets/half-logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";
import "../css/Header.css";
import Balance from "./Balance";

const Header = ({
  showBetsContainer,
  setShowBetsContainer,
  collapseNavbar,
  setCollapseNavbar,
  isMobile,
  showNavbar, setShowNavbar, removeCollapseToggle, isLeaderboard, isConnected, setConnected
}) => {
  const handleClick = () => {
    setShowBetsContainer(!showBetsContainer);
  };
  const handleClick2 = () => {
    if(!removeCollapseToggle && !isLeaderboard) {
      setCollapseNavbar(!collapseNavbar);
    }
  };

  return (
    <>
      <div className="header">
        <div className="header__content" >
          <div className="header__left" style={{marginLeft: (isLeaderboard && !isMobile) ? "4%": ""}}>
          {(isLeaderboard && !isMobile) &&
            <div className="logo">
              <img src={FullLogo} alt="" />
            </div>
          }
          {isMobile &&
              <div className="logo">
              <img src={HalfLogo} width="40px" alt="" />
            </div>}
            {(!isMobile) && (
                [(collapseNavbar) ? <SVGIcons.ArrowRight onClick={handleClick2} /> :
                <SVGIcons.ArrowLeft onClick={handleClick2} />
                ]
            )}
            {!isMobile && <NavLinks/>}
          </div>
          <div className="header__right">
          {!isConnected ? 
            <Button type="primary" onClick={() => setConnected(true)}>
              <SVGIcons.EmptyWallet /> Connect Wallet
            </Button>
           : <>

           <Balance/>
           {!isMobile && <Button type="secondary" color="green"><SVGIcons.Bets2 color="white"/> My bets</Button>}</>
          }
            {!isMobile ? [
              showBetsContainer ? (
                <Button onClick={handleClick} type="secondary" color="grey">
                  <SVGIcons.Close /> Close bets
                </Button>
              ) : (
                <Button onClick={handleClick} type="secondary">
                  <SVGIcons.Bets /> Open bets
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
