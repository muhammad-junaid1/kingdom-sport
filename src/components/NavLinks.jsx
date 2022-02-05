import React from "react";
import SVGIcons from "./SvgIcons";
import {NavLink, useLocation} from "react-router-dom";
import "../css/NavLinks.css";

/**
 * 
 * This component renders the links to different pages (home, leaderboard, crypto, mybets)
 * It becomes fixed on mobile
 * 
 */
const NavLinks = ({ isFixed, setShowBetsOnMobile,setShowBetsContainer, setShowNavbar,setCollapseNavbar, connected }) => {
  const location = useLocation();

  const handleClick = () => {
    if(isFixed) {
      setShowBetsOnMobile(false);
      setShowNavbar(false);
    }
      setCollapseNavbar(false);
    return;
  }
  
  return (
    <div className={`nav-links${isFixed ? " nav-fixed" : ""}`}>
      <ul>
        <li onClick={handleClick}>
        <NavLink to="/" className={`${(location.pathname === "/" || location.pathname === "/live" || location.pathname==="/favourites") ? "active" : ""}`}>
        {isFixed &&
          <SVGIcons.Soccer />
        }
          <p>SPORT</p>
          <div className="nav-link-active-border"></div>
          </NavLink>
        </li>
        <li onClick={handleClick}>
        <NavLink to="/crypto/all" className={`${location.pathname.startsWith("/crypto") ? "active" : ""}`}>
        {isFixed &&
          <SVGIcons.Crypto />
        }
          <p>CRYPTO</p>
          <div className="nav-link-active-border"></div>
          </NavLink>
        </li>
        <li onClick={() => {handleClick(); setShowBetsContainer(false)}}>
        <NavLink to="/leaderboard">
        {isFixed &&
          <SVGIcons.LeaderBoard />
        }
          <p>LEADERBOARD</p>
          <div className="nav-link-active-border"></div>
          </NavLink>
        </li>
        {isFixed && connected &&
        <>
          <li onClick={() => {handleClick(); setShowBetsContainer(false);}}>
        <NavLink to="/my-bets">
          <SVGIcons.Bets2 />
          <span>MY BETS</span>
          <div className="nav-link-active-border"></div>
        </NavLink>
        </li>
        </>
        }
      </ul>
    </div>
  );
};

export default NavLinks;
