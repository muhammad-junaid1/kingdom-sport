import React, {useEffect} from "react";
import AllMatches from "./components/AllMatches";
import sampleData from "../../sampleData";
import "./css/Homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
  const renderSlides = () =>
  [1, 2, 3, 4, 5].map(num => (
    <div>
      <h3>Slide {num}</h3>
    </div>
  ));


  useEffect(() =>{
    
    document.querySelector(".home__slider").style.width = document.querySelector(".section").scrollWidth - 50 + "px";
  }, []);
  return (
      <div className="home">
      <div className="home__slider">
      <Slider
        dots={false}
        slidesToShow={2}
        slidesToScroll={2}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
      </div>
          <div className="home__body">
            <AllMatches icon="Soccer" sport="FOOTBALL" liveData={sampleData.matchData} upcomingData={sampleData.matchData2} topBetsData={sampleData.matchData3}/>
            <AllMatches icon="Basketball" sport="BASKETBALL" liveData={sampleData.matchData} upcomingData={sampleData.matchData2} topBetsData={sampleData.matchData3}/>
          </div>
      </div>
  );
};

export default Homepage;
