import React,{useState, useEffect} from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import NavLinks from "./NavLinks";
import BetsContainer from "./BetsContainer";
import "../css/Main.css";

const Main = () => {
  const [showBetsContainer, setShowBetsContainer] = useState(false);
  const [collapseNavbar, setCollapseNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBets, setShowBets] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  })
  useEffect(() =>{
    if(screenSize < 500) setIsMobile(true);
  }, [screenSize]);

  return (
    <>
      <div className="main-wrapper">
      {(!isMobile) &&
        <Navbar collapse={collapseNavbar && true}/>
      }
        <div className="section">
          <Header isMobile={isMobile} showNavbar={showNavbar} setShowNavbar={setShowNavbar} showBetsContainer={showBetsContainer} setShowBetsContainer={setShowBetsContainer} collapseNavbar={collapseNavbar} setCollapseNavbar={setCollapseNavbar} collapse={collapseNavbar}/>
          <div className="content-wrapper">
          {showNavbar && <Navbar isMobile={isMobile}/>}
          {/* ************* */}

          {showBets ? <BetsContainer isMobile={isMobile} showBets={showBets} setShowBets={setShowBets}/> :
            <div className="content">
              <h1>Content here</h1>
            </div>

          }
            {/* ********** */}
           {(showBetsContainer && !isMobile) && <BetsContainer isConnected={false}/>} 
          </div>
        </div>
        {(isMobile && !showBets) &&
        <NavLinks isFixed={true} showBets={showBets} setShowBets={setShowBets}/>
        }
      </div>
    </>
  );
};

export default Main;
