import React, {useState, useEffect} from "react";
import AllMatches from "./components/AllMatches";
import sampleData from "../../sampleData";
import "./css/Homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useLocation} from "react-router-dom";
import Sport from "../Sport";
import TourPage from "../TourPage";

const Homepage = ({showBetsContainer}) => {
    const {search} = useLocation();
    const [allParams, setAllParams] = useState({});

     useEffect(() => {
        const params = new URLSearchParams(search);
        let paramObj = {};
        for(var value of params.keys()) {
             paramObj[value] = params.get(value);
         }
         setAllParams(paramObj);
     }, [search]);
  return (
    <>
    {/* For tours page */}
    {allParams.tour && <TourPage showBetsContainer={showBetsContainer} tourId={allParams.tour} sportName={allParams.sport}/>}


  {/* For specific sport */}
    {!allParams.tour &&
    <div className="home">
      <div className="slider__wrapper">
        <Slider
          dots={false}
          infinite={true}
          centerMode={true}
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth={true}
          responsive={[{
      breakpoint: 500,
      settings: {
        dots: true,
        arrows: false,
        centerPadding: "0"
      }}]}
        >
            <div className={`slide1`}>
        <div className="slide__container">
          <h1>The data of slide 1 here..</h1>
        </div>
      </div>
            <div className={`slide2`}>
        <div className="slide__container">
          <h1>The data of slide 2 here..</h1>
        </div>
      </div>
            <div className={`slide3`}>
        <div className="slide__container">
          <h1>The data of slide 3 here..</h1>
        </div>
      </div>
            <div className={`slide4`}>
        <div className="slide__container">
          <h1>The data of slide 4 here..</h1>
        </div>
      </div>
        </Slider>
      </div>
      <div className="home__body">
      {Object.keys(allParams).length === 0 ?
      <>
        <AllMatches
          icon="Soccer"
          sport="FOOTBALL"
          liveData={sampleData.matchData}
          upcomingData={sampleData.matchData2}
          topBetsData={sampleData.matchData2.slice(0, 2)}
        />
        <AllMatches
          icon="Basketball"
          sport="BASKETBALL"
          liveData={sampleData.matchData}
          upcomingData={sampleData.matchData2}
          topBetsData={sampleData.matchData3}
        />
        </>
      : <Sport sportName={allParams.sport} page="home"/>}
      </div>
    </div>
    }
    </>
  );
};

export default Homepage;
