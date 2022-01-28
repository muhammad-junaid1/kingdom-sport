import React from "react";
import AllMatches from "./components/AllMatches";
import sampleData from "../../sampleData";
import "./css/Homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
  const renderSlides = () =>
    [1, 2, 3, 4].map((num) => (
      <div className={`slide${num}`}>
        <div className="slide__container">
          <h3>Slide Slide Slide Slide Slide Slide Slide{num}</h3>
        </div>
      </div>
    ));

//  document.addEventListener("DOMContentLoaded", () => {
//   if (document.querySelector(".home__slider")) {
//       const slider = document.querySelector(".home__slider");
//       const homeBody = document.querySelector(".home__body");
//       const sliderHeight = getComputedStyle(slider).getPropertyValue("height");
//       homeBody.style.marginTop = sliderHeight;
//   }
// });

  return (
    <div className="home">
      <div className="slider__wrapper">
        <Slider
          dots={false}
          infinite={true}
          slidesToShow={1}
          centerMode={true}
          variableWidth={true}
        >
          {renderSlides()}
        </Slider>
      </div>
      <div className="home__body">
        <AllMatches
          icon="Soccer"
          sport="FOOTBALL"
          liveData={sampleData.matchData}
          upcomingData={sampleData.matchData2}
          topBetsData={sampleData.matchData3}
        />
        <AllMatches
          icon="Basketball"
          sport="BASKETBALL"
          liveData={sampleData.matchData}
          upcomingData={sampleData.matchData2}
          topBetsData={sampleData.matchData3}
        />
      </div>
    </div>
  );
};

export default Homepage;
