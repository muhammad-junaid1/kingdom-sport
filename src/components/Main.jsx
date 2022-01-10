import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import BetsContainer from "./BetsContainer";
import "../css/Main.css";

const Main = () => {
  return (
    <>
      <div className="main-wrapper">
        <Navbar />
        <div className="section">
          <Header />
          <div className="content-wrapper">
            <div className="content">
              <h1>Content here</h1>
            </div>
            <BetsContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
