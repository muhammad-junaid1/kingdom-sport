import React, {useContext} from "react";
import SVGIcons from "./SvgIcons";
import Button from "./Button";
import NavLinks from "./NavLinks";
import Balance from "./Balance";

import {NavLink} from "react-router-dom";  
import "../css/Header.css"; 
import { HeaderContext } from "./Main";
import FullLogo from "../assets/full-logo.png";
import HalfLogo from "../assets/half-logo.png";


/** 
 * 
 * Contains the header (upper) part of app
 * It includes logo, collapse navbar button, account button, toggle button for bets container etc
 * 
*/
const Header = ({
removeCollapseToggle, isLeaderboard, isMyBets
}) => {

  const {isMobile, showNavbar, setShowNavbar, showBetsContainer, setShowBetsContainer, collapseNavbar, setCollapseNavbar, isConnected, setShowBetsOnMobile, setConnected} = useContext(HeaderContext);

  // Controls the button to toggle bets container
  const handleClick = () => {
    setShowBetsContainer(!showBetsContainer);
  };

  // Controls the button to toggle navbar collapse
  const handleClick2 = () => {
    if(!removeCollapseToggle && !isLeaderboard && !isMyBets) {
      setCollapseNavbar(!collapseNavbar);
    }
  };

  return (
    <>
      <div className="header">
        <div className="header__content" >
          <div className="header__left" style={{marginLeft: ((isLeaderboard || isMyBets) && !isMobile) ? "4%": ""}}>
          {((isLeaderboard || isMyBets) && !isMobile) &&
            <div className="logo">
              <a href="/"><img src={FullLogo} alt="" /></a>
            </div>
          }
          {isMobile &&
              <div className="logo">
              <a href="/"><img src={HalfLogo} width="40px" alt="" /></a>
            </div>}
            {(!isMobile) && (
                [(collapseNavbar) ? <SVGIcons.ArrowRight onClick={handleClick2} /> :
                <SVGIcons.ArrowLeft onClick={handleClick2} />
                ]
            )}
            {!isMobile && <NavLinks setCollapseNavbar={setCollapseNavbar} setShowBetsContainer={setShowBetsContainer}
/>}
          </div>
          <div className="header__right">
          {!isConnected ? 
            <Button type="primary" onClick={() => setConnected(true)}>
              <SVGIcons.EmptyWallet /> Connect Wallet
            </Button>
           : <>

           <Balance id="0xe1B233535...5c00" numbers="676.00 BCR" avatarImg="avatar" setConnected={setConnected}/>
           {!isMobile && <NavLink onClick={() => setShowBetsContainer(false)} className="mybets-page-link" to="/my-bets"><Button type="secondary" color="green"><SVGIcons.Bets2 color="white"/> My bets</Button></NavLink>}</>
          }
  
            {!isMobile ? [
              showBetsContainer ? (
                [(!isLeaderboard && !isMyBets) &&
                <Button onClick={handleClick} type="secondary" color="grey">
                  <SVGIcons.Close /> Close bets
                </Button>
                ]
              ) : (
                [(!isLeaderboard && !isMyBets) &&
                <Button onClick={handleClick} type="secondary">
                  <SVGIcons.Bets /> Open bets
                </Button>
                ]
              ),
               ] : (!isLeaderboard && !isMyBets) && <Button onClick={() => {setShowNavbar(!showNavbar); setShowBetsOnMobile(false)}} addClass="hamburger-btn">{showNavbar ? <SVGIcons.CloseMenu/> : <SVGIcons.Hamburger/>}</Button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
