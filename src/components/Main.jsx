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
import LiveNavbar from "./LiveNavbar";
import useMediaQuery from "../useMediaQuery";

export const NavbarContext = React.createContext({});
export const AllRoutesContext = React.createContext({});

const Main = () => {
  const [showBetsContainer, setShowBetsContainer] = useState(false);
  const [collapseNavbar, setCollapseNavbar] = useState(false);
  const [showBets, setShowBets] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [cryptoActiveOrExpired, setCryptoActiveOrExpired] = useState("active");
  const [noSportsBets, setNoSportsBets] = useState(false);
  const [noCryptoBets, setNoCryptoBets] = useState(false);
  const [connected, setConnected] = useState(false);
  const isMobile = useMediaQuery('(max-width: 500px)');

  useEffect(() => {
    if(isMobile && showNavbar) {
      document.body.style.overflow="hidden";
    } else {
      document.body.style.overflow="";
    }
  }, [showNavbar, isMobile]);

  return (
    <>
      <div className="main-wrapper">
        {!isMobile && (
          <NavbarContext.Provider value={{ setCollapseNavbar}}>
            <Routes>
            <Route path="/" element={<Navbar setCollapse={setCollapseNavbar} collapse={collapseNavbar && true}/>}/>
            <Route path="/sport/:page" element={<Navbar setCollapse={setCollapseNavbar}  collapse={collapseNavbar && true}/>}/>
            <Route path="/sport/live" element={<LiveNavbar setCollapse={setCollapseNavbar}  collapse={collapseNavbar && true}/>}/>
              <Route
                path="/crypto/all"
                element={
                  <CryptoNavbar
                    isMobile={isMobile}
                    forMobile={true}
                    showNavbar={showNavbar}
                    setCryptoActiveOrExpired={setCryptoActiveOrExpired}
                    cryptoActiveOrExpired={cryptoActiveOrExpired} 
                  />
                }
              />
              <Route
                path="/crypto/:coin"
                element={
                  <CryptoNavbar
                    isMobile={isMobile}
                    forMobile={true}
                    showNavbar={showNavbar}
                    setCryptoActiveOrExpired={setCryptoActiveOrExpired}
                    cryptoActiveOrExpired={cryptoActiveOrExpired} 
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
            isConnected={connected} setConnected={setConnected}
            setShowBets={setShowBets}
          />}/>
                <Route path="/sport/:page" element={ <Header
            isMobile={isMobile}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            showBetsContainer={showBetsContainer}
            setShowBetsContainer={setShowBetsContainer}
            collapseNavbar={collapseNavbar}
            setCollapseNavbar={setCollapseNavbar}
            isConnected={connected} setConnected={setConnected}
            setShowBets={setShowBets}
          />}/>
                <Route path="/sport/live" element={ <Header
            isMobile={isMobile}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            showBetsContainer={showBetsContainer}
            setShowBetsContainer={setShowBetsContainer}
            collapseNavbar={collapseNavbar}
            setCollapseNavbar={setCollapseNavbar}
            isConnected={connected} setConnected={setConnected}
            removeCollapseToggle={true}
            setShowBets={setShowBets}
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
            isConnected={connected} setConnected={setConnected}
            setShowBets={setShowBets}
          />}/>
          <Route path="/crypto/:coin" element={ <Header
            isMobile={isMobile}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            showBetsContainer={showBetsContainer}
            setShowBetsContainer={setShowBetsContainer}
            collapseNavbar={collapseNavbar}
            setCollapseNavbar={setCollapseNavbar}
            removeCollapseToggle={true}
            isConnected={connected} setConnected={setConnected}
            setShowBets={setShowBets}
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
            isConnected={connected} setConnected={setConnected}
            isLeaderboard={true}
            setShowBets={setShowBets}
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
                value={{ setCollapseNavbar, isMobile, setShowNavbar, setShowBets }}
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
                    path="/sport/live"
                    element={
                      <LiveNavbar
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
                        cryptoActiveOrExpired={cryptoActiveOrExpired}
                        setCryptoActiveOrExpired={setCryptoActiveOrExpired}
                      />
                    }
                  />
                  <Route
                    path="/crypto/:coin"
                    element={
                      <CryptoNavbar
                        isMobile={isMobile}
                        forMobile={true}
                        showNavbar={showNavbar}
                        cryptoActiveOrExpired={cryptoActiveOrExpired}
                        setCryptoActiveOrExpired={setCryptoActiveOrExpired}
                      />
                    }
                  />
              <Route
                    path="/leaderboard"
                    element={
                      <Navbar
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
              style={{ pointerEvents: showNavbar ? "none" : "", paddingBottom: showNavbar ? "0" : "" }}
            >
              {showBets ? (
                <BetsContainer
                  isMobile={isMobile}
                  showBets={showBets}
                  setShowBets={setShowBets}
                  isConnected={connected}
                  showNavbar={showNavbar}
                  noSportsBets={noSportsBets} noCryptoBets={noCryptoBets}
                />
              ) : (
                <AllRoutesContext.Provider value={{showBetsContainer, isMobile}}>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/sport/live" element={
                      <Live showBetsContainer={showBetsContainer}/>
                  
                  } />
                  <Route path="/sport/favourites" element={<Favourites showBetsContainer={showBetsContainer}/>} />
                  <Route path="/crypto/all" element={<Crypto cryptoActiveOrExpired={cryptoActiveOrExpired} showBetsContainer={showBetsContainer}/>} />
                  <Route path="/crypto/:coin" element={<Crypto cryptoActiveOrExpired={cryptoActiveOrExpired} showBetsContainer={showBetsContainer}/>} />
                  <Route path="/leaderboard" element={<LeaderBoard />} />
                </Routes>
                </AllRoutesContext.Provider>
              )}
            </div>
            {/* ********** */}
            {showBetsContainer && !isMobile && (
              <BetsContainer isConnected={connected} showNavbar={showNavbar} noSportsBets={noSportsBets} noCryptoBets={noCryptoBets}/>
            )}
          </div>
        </div>
        {isMobile && !showBets && (
          <NavLinks
            isFixed={true}
            setShowNavbar={setShowNavbar}
            showBets={showBets}
            setShowBets={setShowBets}
            setCollapseNavbar={setCollapseNavbar}
          />
        )}
      </div>
    </>
  );
};

export default Main;
