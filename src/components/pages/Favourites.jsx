import React from "react";
import sampleData from "../../sampleData";
import Match from "./components/Match";
import SVGIcons from "../SvgIcons";
import Slider from "react-slick";
import "./css/Favourites.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Favourites = () => {
  const renderSlides = () =>
    [1, 2, 3, 4].map((num) => (
      <div className={`slide${num}`}>
        <div className="slide__container">
          <h3>Slide Slide Slide Slide Slide Slide Slide{num}</h3>
        </div>
      </div>
    ));
  return (
    <>
      <div className="favourites">
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
        arrows: false
      }}]}
        >
          {renderSlides()}
        </Slider>
        </div>
              <div className="matches-container">
        {sampleData.favItemsData.map((item) => {
          const Icon = SVGIcons[item.icon];
          return (
            <>
                <div className="match__header" style={{ marginBottom: 15 }}>
                  <p>
                    <Icon color="white" /> {item.text}
                  </p>
                </div>
                {item.tours.map((tour) => {
                  return (
                    <Match
                      isLive={tour.isLive}
                      data={tour.matchData}
                      FavIcon={SVGIcons["Heart"]}
                      tourName={tour.name}
                      tourIcon={tour.icon}
                      isFav={true}
                    />
                  );
                })}
            </>
          );
        })}
              </div>
      </div>
    </>
  );
};

export default Favourites;
