import React, { useState, useEffect } from "react";

// Components
import Navbar from "./Navbar";
import Header from "./Header";
import NavLinks from "./NavLinks";
import BetsContainer from "./BetsContainer";
import Button from "./Button";
import SVGIcons from "./SvgIcons";
import Alert from "./Alert";

// Pages
import Homepage from "./pages/Homepage";
import Live from "./pages/Live";
import Favourites from "./pages/Favourites";
import Crypto from "./pages/Crypto";
import LeaderBoard from "./pages/LeaderBoard";
import CryptoNavbar from "./CryptoNavbar";
import FavNavbar from "./FavNavbar";
import LiveNavbar from "./LiveNavbar";
import MyBetsPage from "./pages/MyBetsPage";

// Other imports
import { Routes, Route, useLocation } from "react-router-dom";
import useMediaQuery from "../useMediaQuery";
import "../css/Main.css";

// Contexts
export const NavbarContext = React.createContext({});
export const ContentRoutesContext = React.createContext({});
export const HeaderContext = React.createContext({});

const Main = () => {
  // Shows/Hides bets container (desktop and above)
  const [showBetsContainer, setShowBetsContainer] = useState(false);
  // Controls the collapse of navbar (desktop and above)
  const [collapseNavbar, setCollapseNavbar] = useState(false);
  // Shows/Hides bets container (mobile)
  const [showBetsOnMobile, setShowBetsOnMobile] = useState(false);
  // Shows/Hides the navbar (mobile)
  const [showNavbar, setShowNavbar] = useState(false);
  // Sets the type of items on crypto page (active/expired)
  const [cryptoActiveOrExpired, setCryptoActiveOrExpired] = useState("active");
  // When no bets are selected/taken
  /**
   * Initially these states are true, if user selects/takes bets then 
   * these (or any one of them) are set to false 
   */
  const [noSportsBets, setNoSportsBets] = useState(true);
  const [noCryptoBets, setNoCryptoBets] = useState(true);

  // Changes the UI based on whether the user is logged in or not
  /**
   * Initially it is false, if user logs in then set this state to true
   */
  const [connected, setConnected] = useState(false);

  // Alert boxes
  const [showAlertSuccess, setShowAlertSuccess] = useState(true);
  const [showAlertFail, setShowAlertFail] = useState(true);
  const [showAlertNoSync, setShowAlertNoSync] = useState(true);

  // Checks if screen is for small devices (mobile) or not
  /**
   * It makes changes to different UI parts and functionalities based on screen size
   */
  const isMobile = useMediaQuery("(max-width: 500px)");

  // Gets the url and query params
  const { search, pathname } = useLocation();

  useEffect(() => {
    /**
     * If navbar is opened in mobile, disable the scroll of page (overflow: hidden)
     */
    if (isMobile && showNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Just for example, when body is clicked, hide the alerts
    const hideAlerts = () => {
      setShowAlertSuccess(false);
      setShowAlertFail(false);
      setShowAlertNoSync(false);
    }
    document.body.addEventListener("click", hideAlerts);
    if(!showAlertSuccess && !showAlertFail && !showAlertNoSync) {
      document.body.removeEventListener("click", hideAlerts);
    }
  }, [showNavbar, isMobile]);

  // Construct an object of query params
  const params = new URLSearchParams(search);
  let paramObj = {};
  for (var value of params.keys()) {
    paramObj[value] = params.get(value);
  }

  return (
    <>
      <div className="main-wrapper">
      {/* Navbars for different routes (desktop and above) */}
        {!isMobile && (
          <NavbarContext.Provider value={{ setCollapseNavbar }}>
            <Routes>
              <Route
                path="/"
                element={
                  <Navbar
                    setCollapse={setCollapseNavbar}
                    collapse={collapseNavbar && true}
                  />
                }
              />
              <Route
                path="/live"
                element={
                  <LiveNavbar
                    setCollapse={setCollapseNavbar}
                    collapse={collapseNavbar && true}
                  />
                }
              />
              <Route
                path="/favourites"
                element={
                  <FavNavbar
                    isMobile={isMobile}
                    forMobile={true}
                    showNavbar={showNavbar}
                    setCollapse={setCollapseNavbar}
                    collapse={collapseNavbar && true}
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
        {/* Header sections for different routes (desktop and above) */}
          <HeaderContext.Provider
            value={{
              setNoCryptoBets,
              setNoSportsBets,
              isMobile,
              showNavbar,
              setShowNavbar,
              showBetsContainer,
              setShowBetsContainer,
              collapseNavbar,
              setCollapseNavbar,
              isConnected: connected,
              setConnected,
              setShowBetsOnMobile,
            }}
          >
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/favourites" element={<Header />} />
              <Route
                path="/live"
                element={<Header removeCollapseToggle={true} />}
              />
              <Route
                path="/crypto/all"
                element={<Header removeCollapseToggle={true} />}
              />
              <Route
                path="/crypto/:coin"
                element={<Header removeCollapseToggle={true} />}
              />
              <Route
                path="/leaderboard"
                element={
                  <Header removeCollapseToggle={true} isLeaderboard={true} />
                }
              />
              <Route
                path="/my-bets"
                element={<Header removeCollapseToggle={true} isMyBets={true} />}
              />
            </Routes>
          </HeaderContext.Provider>
          <div className="content-wrapper">
          {/* Navbars for different routes (mobile) */}
            <div
              className="navbar--mobile"
              style={{
                width: isMobile && showNavbar ? "100%" : 0,
                overflow: showNavbar ? "visible" : "hidden",
              }}
            >
              <NavbarContext.Provider
                value={{
                  setCollapseNavbar,
                  isMobile,
                  setShowNavbar,
                  setShowBetsOnMobile,
                }}
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
                    path="/live"
                    element={
                      <LiveNavbar
                        isMobile={isMobile}
                        forMobile={true}
                        showNavbar={showNavbar}
                      />
                    }
                  />
                  <Route
                    path="/favourites"
                    element={
                      <FavNavbar
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
                  <Route
                    path="/my-bets"
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

           {/* **************************************************** */}

            <div
              className="content"
              style={{
                pointerEvents: showNavbar ? "none" : "",
                paddingBottom: showNavbar ? "0" : "",
              }}
            >
            {/* Renders bets container (mobile) */}
              {showBetsOnMobile ? (
                <BetsContainer
                  isMobile={isMobile}
                  showBetsOnMobile={showBetsOnMobile}
                  setShowBetsOnMobile={setShowBetsOnMobile}
                  isConnected={connected}
                  showNavbar={showNavbar}
                  noSportsBets={noSportsBets}
                  noCryptoBets={noCryptoBets}
                  setNoSportsBets={setNoSportsBets}
                  setNoCryptoBets={setNoCryptoBets}
                />
              ) : (
                <>
                {/* Content sections for different routes */}
                <ContentRoutesContext.Provider
                  value={{ showBetsContainer, isMobile, showBetsOnMobile }}
                >
                  <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                      path="/live"
                      element={<Live showBetsContainer={showBetsContainer} />}
                    />
                    <Route
                      path="/favourites"
                      element={
                        <Favourites showBetsContainer={showBetsContainer} />
                      }
                    />
                    <Route
                      path="/crypto/all"
                      element={
                        <Crypto
                          cryptoActiveOrExpired={cryptoActiveOrExpired}
                          showBetsContainer={showBetsContainer}
                        />
                      }
                    />
                    <Route
                      path="/crypto/:coin"
                      element={
                        <Crypto
                          cryptoActiveOrExpired={cryptoActiveOrExpired}
                          showBetsContainer={showBetsContainer}
                        />
                      }
                    />
                    <Route path="/leaderboard" element={<LeaderBoard />} />
                    <Route
                      path="/my-bets"
                      element={<MyBetsPage isMobile={isMobile} />}
                    />
                  </Routes>
                </ContentRoutesContext.Provider>
                </>
              )}
            </div>

            {/* **************************************************** */}

           {/* Renders bets container (desktop and above) */}
            {showBetsContainer && !isMobile && (
              <BetsContainer
                isConnected={connected}
                showNavbar={showNavbar}
                noSportsBets={noSportsBets}
                noCryptoBets={noCryptoBets}
                setNoSportsBets={setNoSportsBets}
                setNoCryptoBets={setNoCryptoBets}
              />
            )}
          </div>
        </div>

        {/* Shows fixed-nav (mobile) */}
        {isMobile && !showBetsOnMobile && (
          <NavLinks
            isFixed={true}
            setShowNavbar={setShowNavbar}
            showBetsOnMobile={showBetsOnMobile}
            setShowBetsOnMobile={setShowBetsOnMobile}
            setCollapseNavbar={setCollapseNavbar}
            connected={connected}
          />
        )}

        {/* Button on mobile for rendering bets container (mobile)*/}
        {/**
            Shows the button on some specific routes/pages
         */}
        {isMobile &&
          !showBetsOnMobile &&
          (pathname === "/" ||
            pathname === "/live" ||
            pathname === "/favourites" ||
            pathname.startsWith("/crypto")) && (
            <div className="show-hide-bets-container">
              <Button
                type="secondary"
                onClick={() => {
                  setShowBetsOnMobile(!showBetsOnMobile);
                  setShowNavbar(false);
                }}
              >
                <SVGIcons.Bets />
              </Button>
              <div className="bets-notifs">
                <p>3</p>
              </div>
            </div>
          )}

          {/* Alert boxes*/}
         {showAlertSuccess && <Alert type="success"/>}
          {showAlertFail && <Alert type="fail"/>}
          {showAlertNoSync && <Alert type="nosync" />}

        {/* Sets the body background based on page url */}
        {((pathname==="/" || pathname ==="/favourites") && paramObj.hasOwnProperty("sport") && !paramObj.hasOwnProperty("tour")) && (
          <>
            <img
              className="page-bg"
              src={require(`../assets/page-backgrounds/football-page-bg.png`)}
              alt=""
            />
            {/* Use this line to add bg images dynamically by getting sport name from url and then fetching the image with same name from assets */}
            {/* <img className="page-bg" src={require(`../assets/page-backgrounds/${paramObj.sport}-page-bg.png`)} alt="" /> */}
          </>
        )}
        {(pathname==="/" || pathname ==="/favourites") && paramObj.hasOwnProperty("tour") && (
         <img className="page-bg" src={require(`../assets/page-backgrounds/tour-page-bg.png`)} alt="" />
        )}
      </div>
    </>
  );
};

export default Main;
