import React from "react";
import SVGIcons from "./SvgIcons";
import "../css/NavLinks.css";

const NavLinks = ({ isFixed, showBets, setShowBets }) => {
  return (
    <div className={`nav-links${isFixed ? " nav-fixed" : ""}`}>
      <ul>
        <li className="nav-link-active">
        {isFixed &&
          <SVGIcons.Soccer />
        }
          <a href="/">SPORT</a>
          <div className="nav-link-active-border"></div>
        </li>
        <li>
        {isFixed &&
          <SVGIcons.Crypto />
        }
          <a href="/">CRYPTO</a>
        </li>
        <li>
        {isFixed &&
          <SVGIcons.LeaderBoard />
        }
          <a href="/">LEADERBOARD</a>
        </li>
        {isFixed &&
        <li onClick={() => setShowBets(!showBets)}>
          <SVGIcons.Bets2 />
          <span>MY BETS</span>
        </li>
        }
      </ul>
    </div>
  );
};

export default NavLinks;
