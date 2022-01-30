import React, {useState, useEffect} from "react";
import AllMatches from "./components/AllMatches";
import sampleData from "../../sampleData";
import "./css/Homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useLocation} from "react-router-dom";
import Sport from "../Sport";

const Homepage = () => {
  const items = [1, 2, 3, 4];
  const renderSlides = () =>
    items.map((num) => (
      <div className={`slide${num}`}>
        <div className="slide__container">
          <h3>Slide Slide Slide Slide Slide Slide Slide{num}</h3>
        </div>
      </div>
    ));

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
          {renderSlides()}
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
          topBetsData={sampleData.matchData2.slice(0, 2)}
        />
        </>
      : <Sport sportName={allParams.sport} page="home"/>}
      </div>
    </div>
  );
};

export default Homepage;
