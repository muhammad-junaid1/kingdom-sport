import React from "react";
import SVGIcons from "./SvgIcons";
import {NavLink, useLocation} from "react-router-dom";
import "../css/NavLinks.css";

const NavLinks = ({ isFixed, showBets, setShowBets, setShowNavbar }) => {
  const handleClick = () => {
    setShowBets(!showBets);
    setShowNavbar(false);
  }

  const location = useLocation();
  
  return (
    <div className={`nav-links${isFixed ? " nav-fixed" : ""}`}>
      <ul>
        <li>
        <NavLink to="/" className={`${location.pathname.startsWith("/sport") ? "active" : ""}`}>
        {isFixed &&
          <SVGIcons.Soccer />
        }
          <p>SPORT</p>
          <div className="nav-link-active-border"></div>
          </NavLink>
        </li>
        <li>
        <NavLink to="/crypto">
        {isFixed &&
          <SVGIcons.Crypto />
        }
          <p>CRYPTO</p>
          <div className="nav-link-active-border"></div>
          </NavLink>
        </li>
        <li>
        <NavLink to="/leaderboard">
        {isFixed &&
          <SVGIcons.LeaderBoard />
        }
          <p>LEADERBOARD</p>
          <div className="nav-link-active-border"></div>
          </NavLink>
        </li>
        {isFixed &&
        <li onClick={handleClick}>
          <SVGIcons.Bets2 />
          <span>MY BETS</span>
        </li>
        }
      </ul>
    </div>
  );
};

export default NavLinks;
