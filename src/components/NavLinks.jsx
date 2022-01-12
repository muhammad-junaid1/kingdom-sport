import React from 'react';
import "../css/NavLinks.css";

const NavLinks = () => {
    return (
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
    );
};


export default NavLinks;