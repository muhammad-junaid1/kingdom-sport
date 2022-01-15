import React from "react";
import SVGIcons from "./SvgIcons";
import {NavLink, useLocation} from "react-router-dom";
import "../css/NavLinks.css";

const NavLinks = ({ isFixed, showBets, setShowBets, setShowNavbar }) => {
  const handleClick = () => {
    if(isFixed) {
      setShowBets(false);
      setShowNavbar(false);
    }
    return;
  }

  const toggleBetsContainer = () => {
    setShowBets(!showBets);
    setShowNavbar(false);
  }

  const location = useLocation();
  
  return (
    <div className={`nav-links${isFixed ? " nav-fixed" : ""}`}>
      <ul>
        <li onClick={handleClick}>
        <NavLink to="/" className={`${location.pathname.startsWith("/sport") ? "active" : ""}`}>
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
        <li onClick={handleClick}>
        <NavLink to="/leaderboard">
        {isFixed &&
          <SVGIcons.LeaderBoard />
        }
          <p>LEADERBOARD</p>
          <div className="nav-link-active-border"></div>
          </NavLink>
        </li>
        {isFixed &&
        <li onClick={toggleBetsContainer}>
          <SVGIcons.Bets2 />
          <span>MY BETS</span>
        </li>
        }
      </ul>
    </div>
  );
};

export default NavLinks;
