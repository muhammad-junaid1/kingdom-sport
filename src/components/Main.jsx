import React,{useState} from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import BetsContainer from "./BetsContainer";
import "../css/Main.css";

const Main = () => {
  const [showBetsContainer, setShowBetsContainer] = useState(false);
  const [collapseNavbar, setCollapseNavbar] = useState(false);
  return (
    <>
      <div className="main-wrapper">
        <Navbar collapse={collapseNavbar && true}/>
        <div className="section">
          <Header showBetsContainer={showBetsContainer} setShowBetsContainer={setShowBetsContainer} collapseNavbar={collapseNavbar} setCollapseNavbar={setCollapseNavbar} collapse={collapseNavbar}/>
          <div className="content-wrapper">
            <div className="content">
              <h1>Content here</h1>
            </div>
           {showBetsContainer && <BetsContainer />} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
