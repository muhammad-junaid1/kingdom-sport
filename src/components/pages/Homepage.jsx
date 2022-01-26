import React from "react";
import AllMatches from "./components/AllMatches";
import sampleData from "../../sampleData";
import "./css/Homepage.css";

const Homepage = () => {
  return (
      <div className="home">
          <div className="home__body">
            <AllMatches icon="Soccer" sport="FOOTBALL" liveData={sampleData.matchData} upcomingData={sampleData.matchData2} topBetsData={sampleData.matchData3}/>
            <AllMatches icon="Basketball" sport="BASKETBALL" liveData={sampleData.matchData} upcomingData={sampleData.matchData2} topBetsData={sampleData.matchData3}/>
          </div>
      </div>
  );
};

export default Homepage;
