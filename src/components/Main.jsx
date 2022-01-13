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
import Crypto from "./pages/Crypto";
import LeaderBoard from "./pages/LeaderBoard";
import CryptoNavbar from "./CryptoNavbar";

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
        {!isMobile && (
          <NavbarContext.Provider value={{ setCollapseNavbar }}>
            <Routes>
            <Route path="/" element={<Navbar setCollapse={setCollapseNavbar} collapse={collapseNavbar && true}/>}/>
            <Route path="/sport/:page" element={<Navbar setCollapse={setCollapseNavbar}  collapse={collapseNavbar && true}/>}/>
              <Route
                path="/crypto/all"
                element={
                  <CryptoNavbar
                    isMobile={isMobile}
                    forMobile={true}
                    showNavbar={showNavbar}
                  />
                }
              />
              <Route
                path="/crypto/:index"
                element={
                  <CryptoNavbar
                    isMobile={isMobile}
                    forMobile={true}
                    showNavbar={showNavbar}
                  />
                }
              />
            </Routes>
          </NavbarContext.Provider>
        )}
        <div className="section">
        <Routes>
                <Route path="/" element={ <Header
            isMobile={isMobile}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            showBetsContainer={showBetsContainer}
            setShowBetsContainer={setShowBetsContainer}
            collapseNavbar={collapseNavbar}
            setCollapseNavbar={setCollapseNavbar}
          />}/>
                <Route path="/sport/:page" element={ <Header
            isMobile={isMobile}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            showBetsContainer={showBetsContainer}
            setShowBetsContainer={setShowBetsContainer}
            collapseNavbar={collapseNavbar}
            setCollapseNavbar={setCollapseNavbar}
          />}/>
          <Route path="/crypto/all" element={ <Header
            isMobile={isMobile}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            showBetsContainer={showBetsContainer}
            setShowBetsContainer={setShowBetsContainer}
            collapseNavbar={collapseNavbar}
            setCollapseNavbar={setCollapseNavbar}
            removeCollapseToggle={true}
          />}/>
          <Route path="/crypto/:index" element={ <Header
            isMobile={isMobile}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            showBetsContainer={showBetsContainer}
            setShowBetsContainer={setShowBetsContainer}
            collapseNavbar={collapseNavbar}
            setCollapseNavbar={setCollapseNavbar}
            removeCollapseToggle={true}
          />}/>
      <Route path="/leaderboard" element={ <Header
            isMobile={isMobile}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            showBetsContainer={showBetsContainer}
            setShowBetsContainer={setShowBetsContainer}
            collapseNavbar={collapseNavbar}
            setCollapseNavbar={setCollapseNavbar}
            removeCollapseToggle={true}
            isLeaderboard={true}
          />}/>
        </Routes>
          <div className="content-wrapper">
            <div
              className="navbar--mobile"
              style={{
                width: isMobile && showNavbar ? "100%" : 0,
                overflow: showNavbar ? "visible" : "hidden",
              }}
            >
              <NavbarContext.Provider
                value={{ setCollapseNavbar, isMobile, setShowNavbar }}
              >
                <Routes>
                <Route
                    path="/"
                    element={
                      <Navbar
                        isMobile={isMobile}
                        forMobile={true}
                        showNavbar={showNavbar}
                      />
                    }
                  />
                <Route
                    path="/sport/:page"
                    element={
                      <Navbar
                        isMobile={isMobile}
                        forMobile={true}
                        showNavbar={showNavbar}
                      />
                    }
                  />
        
                  <Route
                    path="/crypto/all"
                    element={
                      <CryptoNavbar
                        isMobile={isMobile}
                        forMobile={true}
                        showNavbar={showNavbar}
                      />
                    }
                  />
                  <Route
                    path="/crypto/:index"
                    element={
                      <CryptoNavbar
                        isMobile={isMobile}
                        forMobile={true}
                        showNavbar={showNavbar}
                      />
                    }
                  />
                </Routes>
              </NavbarContext.Provider>
            </div>

            {/* ************* */}

            <div
              className="content"
              style={{ pointerEvents: showNavbar ? "none" : "" }}
            >
              {showBets ? (
                <BetsContainer
                  isMobile={isMobile}
                  showBets={showBets}
                  setShowBets={setShowBets}
                />
              ) : (
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/sport/live" element={<Live />} />
                  <Route path="/sport/favourites" element={<Favourites />} />
                  <Route path="/crypto/all" element={<Crypto />} />
                  <Route path="/crypto/:index" element={<Crypto/>} />
                  <Route path="/leaderboard" element={<LeaderBoard />} />
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
