import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import NavLinks from "./NavLinks";
import BetsContainer from "./BetsContainer";
import { Routes, Route } from "react-router-dom";
import "../css/Main.css";

// Pages
import Homepage from "./pages/Homepage";
import Live from "./pages/Live";
import Favourites from "./pages/Favourites";

export const NavbarContext = React.createContext({});

const Main = () => {
  const [showBetsContainer, setShowBetsContainer] = useState(false);
  const [collapseNavbar, setCollapseNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBets, setShowBets] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });
  useEffect(() => {
    if (screenSize < 500) setIsMobile(true);
  }, [screenSize]);

  return (
    <>
      <div className="main-wrapper">
        {!isMobile &&  <NavbarContext.Provider
                value={{ setCollapseNavbar }}
              ><Navbar collapse={collapseNavbar && true}/></NavbarContext.Provider>}
        <div className="section">
          <Header
            isMobile={isMobile}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            showBetsContainer={showBetsContainer}
            setShowBetsContainer={setShowBetsContainer}
            collapseNavbar={collapseNavbar}
            setCollapseNavbar={setCollapseNavbar}
          />
          <div className="content-wrapper">
          <div className="navbar--mobile" style={{width: (isMobile && showNavbar) ? "100%" : 0, overflow: showNavbar ? "visible" : "hidden"}}>
              <NavbarContext.Provider
                value={{ setCollapseNavbar, isMobile, setShowNavbar }}
              >
                <Navbar isMobile={isMobile} forMobile={true} showNavbar={showNavbar}/>
              </NavbarContext.Provider>
              </div>

            {/* ************* */}

            <div className="content" style={{pointerEvents: showNavbar ? "none" : ""}}>
              {showBets ? (
                <BetsContainer
                  isMobile={isMobile}
                  showBets={showBets}
                  setShowBets={setShowBets}
                />
              ) : (
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/live" element={<Live />} />
                  <Route path="/favourites" element={<Favourites />} />
                </Routes>
              )}
            </div>
            {/* ********** */}
            {showBetsContainer && !isMobile && (
              <BetsContainer isConnected={false} />
            )}
          </div>
        </div>
        {isMobile && !showBets && (
          <NavLinks
            isFixed={true}
            setShowNavbar={setShowNavbar}
            showBets={showBets}
            setShowBets={setShowBets}
          />
        )}
      </div>
    </>
  );
};

export default Main;
