import React, { useState, useEffect } from "react";
import AllMatches from "./components/AllMatches";
import sampleData from "../../sampleData";
import "./css/Homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";
import SliderItem from "./components/SliderItem";
import Sport from "../Sport";
import TourPage from "../TourPage";

const Homepage = ({ showBetsContainer }) => {
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
      {allParams.tour && (
        <TourPage
          showBetsContainer={showBetsContainer}
          tourId={allParams.tour}
          sportName={allParams.sport}
        />
      )}

      {/* For specific sport */}
      {!allParams.tour && (
        <div className="home">
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
              {/* // All slides here */}
              <SliderItem
                bets={{
                  data: [["1x", "1.91"], ["1x", "1.91"],["1x", "1.91"],],
                  moreBets: 253,
                }}
                isLive={true}
                tourLogo="tour1-full-logo"
                bgColor="#00005D"
                bgImg="slider-item-bg"
                winningTeam={"a"}
                teams={{
                  a: {
                    text: "Napoli",
                    percent: "70%",
                    logo: "logo",
                  },
                  b: {
                    text: "Leicester city",
                    percent: "37.7%",
                    logo: "logo1",
                  },
                }}
              />
              <SliderItem
                bets={{
                  data: [["1x", "1.91"], ["1x", "1.91"],["1x", "1.91"],],
                  moreBets: 253,
                }}
                isLive={false}
                date={"19:00 TODAY"}
                tourLogo="tour2-full-logo"
                bgColor="#911026"
                winningTeam={"a"}
                teams={{
                  a: {
                    text: "Napoli",
                    percent: "70%",
                    logo: "logo",
                  },
                  b: {
                    text: "Leicester city",
                    percent: "37.7%",
                    logo: "logo1",
                  },
                }}
              />
              <SliderItem
                bets={{
                  data: [["1x", "1.91"], ["1x", "1.91"],["1x", "1.91"],],
                  moreBets: 253,
                }}
                isLive={true}
                tourLogo="tour1-full-logo"
                bgColor="#00005D"
                bgImg="slider-item-bg"
                winningTeam={"a"}
                teams={{
                  a: {
                    text: "Napoli",
                    percent: "70%",
                    logo: "logo",
                  },
                  b: {
                    text: "Leicester city",
                    percent: "37.7%",
                    logo: "logo1",
                  },
                }}
              />
              <SliderItem
                bets={{
                  data: [["1x", "1.91"], ["1x", "1.91"],["1x", "1.91"]],
                  moreBets: 253,
                }}
                isLive={true}
                tourLogo="tour1-full-logo"
                bgColor="#00005D"
                bgImg="slider-item-bg"
                winningTeam={"a"}
                teams={{
                  a: {
                    text: "Napoli",
                    percent: "70%",
                    logo: "logo",
                  },
                  b: {
                    text: "Leicester city",
                    percent: "37.7%",
                    logo: "logo1",
                  },
                }}
              />
             <SliderItem
                bets={{
                  data: [["1x", "1.91"], ["1x", "1.91"],["1x", "1.91"],],
                  moreBets: 253,
                }}
                isLive={false}
                date={"19:00 TODAY"}
                tourLogo="tour2-full-logo"
                bgColor="#911026"
                winningTeam={"a"}
                teams={{
                  a: {
                    text: "Napoli",
                    percent: "70%",
                    logo: "logo",
                  },
                  b: {
                    text: "Leicester city",
                    percent: "37.7%",
                    logo: "logo1",
                  },
                }}
              />
            </Slider>
          </div>
          <div className="home__body">
            {Object.keys(allParams).length === 0 ? (
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
            ) : (
              <Sport sportName={allParams.sport} page="home" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
