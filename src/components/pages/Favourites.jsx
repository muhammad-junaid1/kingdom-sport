import { React, useState, useEffect } from "react";
import sampleData from "../../sampleData";
import Match from "./components/Match";
import SVGIcons from "../SvgIcons";
import Slider from "react-slick";
import "./css/Favourites.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";
import Sport from "../Sport";
import TourPage from "../TourPage";

const Favourites = ({showBetsContainer}) => {
  const { search } = useLocation();
  const [allParams, setAllParams] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(search);
    let paramObj = {};
    for (var value of params.keys()) {
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
      <div className="favourites">
        <div className="slider__wrapper">
          <Slider
            dots={false}
            infinite={true}
            centerMode={true}
            slidesToShow={1}
            slidesToScroll={1}
            variableWidth={true}
            responsive={[
              {
                breakpoint: 500,
                settings: {
                  dots: true,
                  arrows: false,
                  centerPadding: "0",
                },
              },
            ]}
          >
             <div className={`slide1`}>
        <div className="slide__container">
          {/* <h1>The data of slide 1 here..</h1> */}
        </div>
      </div>
            <div className={`slide2`}>
        <div className="slide__container">
          {/* <h1>The data of slide 2 here..</h1> */}
        </div>
      </div>
            <div className={`slide3`}>
        <div className="slide__container">
          {/* <h1>The data of slide 3 here..</h1> */}
        </div>
      </div>
            <div className={`slide4`}>
        <div className="slide__container">
          {/* <h1>The data of slide 4 here..</h1> */}
        </div>
      </div>
          </Slider>
        </div>
        <div className="favourites__body">
        {Object.keys(allParams).length === 0 ? (
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
                  {item.tours.map((tour, index) => {
                    return (
                      <Match
                      key={index}
                        isLive={tour.isLive}
                        data={tour.matchData}
                        tourId={tour.id}
                         tourName={tour.name}
                        tourIcon={tour.icon}
                        isTour={true}
                        isFavPage={true}
                      />
                    );
                  })}
                </>
              );
            })}
          </div>
        ) : (
          <Sport sportName={allParams.sport} page="fav" />
        )}
      </div>
      </div>
    }
    </>
  );
};

export default Favourites;
