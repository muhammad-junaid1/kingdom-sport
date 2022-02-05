import React, { useState, useEffect } from "react";

import Button from "./Button";
import SVGIcons from "./SvgIcons";
import MatchWinner from "./MatchWinner.jsx";
import MyBets from "./MyBets";
import MatchWinnersList from "./MatchWinnersList";

import "../css/BetsContainer.css";
import sampleData from "../sampleData";
import { useLocation } from "react-router-dom";

/**
 * 
 * This component is rendered on the right side (as sidebar on desktop)
 * Show/Close button in header controls its visibility
 * It contains all information about bets
 * Its content changes in different pages
 * On sports pages, its data is about sports 
 * And on crypto pages it shows data related to crypto items 
 * 
 */
const BetsContainer = ({
  isConnected,
  isMobile,
  showBetsOnMobile,
  setShowBetsOnMobile,
  showNavbar,
  noSportsBets,
  noCryptoBets,
  setNoSportsBets,
  setNoCryptoBets,
}) => {

  // Controls toggles for *Bets slip* and *My bets* buttons
  const [toggle, setToggle] = useState(false);

  // Controls toggles for *Single bet* and *Parlay* buttons
  const [toggle2, setToggle2] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setToggle2(!toggle);
  }, [toggle]);

  // If wallet is not connected
  if (!isConnected) {
    return (
      <>
        <div className={`bets`}>
          <div className="bets__header">
            {toggle ? (
              <Button onClick={() => setToggle(false)}>
                <SVGIcons.SaveAdd color="#48484A" /> Best slip
              </Button>
            ) : (
              <Button onClick={() => setToggle(false)} type="primary">
                <SVGIcons.SaveAdd /> Best slip
              </Button>
            )}
            {toggle ? (
              <Button type="primary" onClick={() => setToggle(true)}>
                <SVGIcons.Bets /> My bets
              </Button>
            ) : (
              <Button onClick={() => setToggle(true)}>
                <SVGIcons.Bets color="#48484A" /> My bets
              </Button>
            )}
          </div>
          <div className={`bets__body not-connected-wrapper`}>
            <div className={`bets__body-wrapper`}>
              <div className="not-connected">
                <span className="text-muted fw-bold">Choose the odds and</span>
                <a href="/" className="fw-bold">
                  Make your bank account great again
                </a>
                <hr />
                <p>
                  This wallet is not connected. <br /> Please read the{" "}
                  <a className="fw-bold" href="/">
                    instructions
                  </a>{" "}
                  or
                </p>
                <Button type="primary">
                  <SVGIcons.EmptyWallet /> Connect wallet now
                </Button>
              </div>
            </div>
          </div>
          <div className="bets__footer-wrapper">
            {isMobile ? (
              <div className={`bets__footer${!showNavbar ? " fixed" : ""}`}>
                <div className="left">
                  <p>
                    <SVGIcons.EmptyWallet /> <span>Settings</span>
                  </p>
                  <SVGIcons.ArrowUp />
                </div>
                <div className="right">
                  <Button
                    onClick={() => setShowBetsOnMobile(!showBetsOnMobile)}
                    type="secondary"
                    color="grey"
                  >
                    <SVGIcons.CloseMenuCircle />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bets__footer">
                <p>
                  <SVGIcons.EmptyWallet /> <span>Settings</span>
                </p>
                <SVGIcons.ArrowUp />
              </div>
            )}
          </div>
        </div>
      </>
    );
  } 
  // Bets container for crypto pages
  else if (isConnected && location.pathname.startsWith("/crypto")) {
    return (
      <>
        <>
          <div className={`bets`}>
            <div className="bets__header">
              {toggle ? (
                <Button onClick={() => setToggle(false)}>
                  <SVGIcons.SaveAdd color="#48484A" /> Best slip
                </Button>
              ) : (
                <Button onClick={() => setToggle(false)} type="primary">
                  <SVGIcons.SaveAdd /> Best slip
                </Button>
              )}
              {toggle ? (
                <Button type="primary" onClick={() => setToggle(true)}>
                  <SVGIcons.Bets /> My bets
                </Button>
              ) : (
                <Button onClick={() => setToggle(true)}>
                  <SVGIcons.Bets color="#48484A" /> My bets
                </Button>
              )}
            </div>

            {/* Check whether there are crypto bets or not */}
            {noCryptoBets && isConnected ? (
              <>
                <div className={`bets__body no-bets-container`}>
                  <div className={`bets__body-wrapper`}>
                    <div className="no-bets">
                      <span className="text-muted fw-bold">
                        Choose the odds and
                      </span>
                      <a href="/" className="fw-bold">
                        Make your bank account great again
                      </a>

                      {/****** For demonstration purpose only *******/}


                      <br />
                      <p
                        onClick={() => {
                          setNoCryptoBets(false);
                          setNoSportsBets(false);
                        }}
                      >
                        <u>
                          <big>Click me to add bets</big>
                        </u>
                      </p>


                      {/****** For demonstration purpose only *******/}
                      </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`bets__body`}>
                  {toggle ? (
                    <div className="bets__header">
                      {toggle2 ? (
                        <Button onClick={() => setToggle2(false)}>
                          <SVGIcons.SingleBet color="#48484A" /> Unsettled
                        </Button>
                      ) : (
                        <Button
                          onClick={() => setToggle2(false)}
                          type="secondary"
                          color="grey"
                        >
                          <SVGIcons.SingleBet /> Unsettled
                        </Button>
                      )}
                      {toggle2 ? (
                        <Button
                          type="secondary"
                          color="grey"
                          onClick={() => setToggle2(true)}
                        >
                          <SVGIcons.Save2 /> Settled
                        </Button>
                      ) : (
                        <Button onClick={() => setToggle2(true)}>
                          <SVGIcons.Save2 color="#48484A" /> Settled
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="bets__header">
                      {toggle2 ? (
                        <Button onClick={() => setToggle2(false)}>
                          <SVGIcons.SingleBet color="#48484A" /> Single bet
                        </Button>
                      ) : (
                        <Button
                          onClick={() => setToggle2(false)}
                          type="secondary"
                          color="grey"
                        >
                          <SVGIcons.SingleBet /> Single bet
                        </Button>
                      )}
                      {toggle2 ? (
                        <Button
                          type="secondary"
                          color="grey"
                          onClick={() => setToggle2(true)}
                        >
                          <SVGIcons.Save2 /> Parlay
                        </Button>
                      ) : (
                        <Button onClick={() => setToggle2(true)}>
                          <SVGIcons.Save2 color="#48484A" /> Parlay
                        </Button>
                      )}
                    </div>
                  )}
                  <div className="bets__content">
                    {!toggle ? (
                      [
                        toggle2 ? (
                          <>
                            {/* For parlay tab */}
                            <MatchWinner
                              crypto={{
                                details: "BTC touch $100,000 by Sep 24",
                                betType: "moon",
                                betValue: "1.9",
                              }}
                            />
                            <MatchWinner
                              crypto={{
                                details: "BUSD touch $100,000 by Sep 24",
                                betType: "rekt",
                                betValue: "1.9",
                              }}
                            />
                          </>
                        ) : (
                          <>
                            {/* For single bet tab */}
                            <p>Single bet</p>
                          </>
                        ),
                      ]
                    ) : (
                      <>
                        {toggle2 ? (
                          <>
                            {/* For settled tab */}
                            <MyBets
                              settled={true}
                              crypto={[
                                {
                                  details: "BTC touch $100,000 by Sep 24",
                                  betType: "moon",
                                  betValue: "1.9",
                                },
                              ]}
                              id="#6"
                              date="Dec 6 08:00AM"
                              betAmount="$100.0"
                              winAmount="$900.0"
                              loseBet={false}
                            />
                            <MyBets
                              settled={true}
                              crypto={[
                                {
                                  details: "BUSD touch $100,000 by Sep 24",
                                  betType: "rekt",
                                  betValue: "1.9",
                                },
                              ]}
                              id="#6"
                              date="Dec 6 08:00AM"
                              betAmount="$100.0"
                              winAmount="$900.0"
                              loseBet={true}
                            />
                          </>
                        ) : (
                          <>
                            {/* For Unsettled tab */}
                            <MyBets
                              settled={false}
                              crypto={[
                                {
                                  details: "BTC touch $100,000 by Sep 24",
                                  betType: "moon",
                                  betValue: "1.9",
                                },
                                {
                                  details: "BUSD touch $100,000 by Sep 24",
                                  betType: "rekt",
                                  betValue: "1.9",
                                },
                              ]}
                              id="#6"
                              date="Dec 6 08:00AM"
                              betAmount="$100.0"
                              winAmount="$900.0"
                            />
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </>
            )}

            <div className="bets__footer-wrapper">
              {isConnected && !noSportsBets && !toggle && (
                <>
                  <div className="min-max">
                    <div className="left">
                      <Button type="primary" size="small" color="violet">
                        Min
                      </Button>
                      <p>Bet amount</p>
                    </div>
                    <div className="right">
                      <p>BCR</p>
                      <Button type="primary" size="small" color="green">
                        Max
                      </Button>
                    </div>
                  </div>
                  <div className="place-bet">
                    <div className="place-bet__header">
                      <p>POSSIBLE WIN</p>
                      <p className="win">$0.00</p>
                    </div>
                    <Button type="primary">Place bet $0.00</Button>
                  </div>
                </>
              )}

              {isMobile ? (
                <div className={`bets__footer${!showNavbar ? " fixed" : ""}`}>
                  <div className="left">
                    <p>
                      <SVGIcons.EmptyWallet /> <span>Settings</span>
                    </p>
                    <SVGIcons.ArrowUp />
                  </div>
                  <div className="right">
                    <Button
                      onClick={() => setShowBetsOnMobile(!showBetsOnMobile)}
                      type="secondary"
                      color="grey"
                    >
                      <SVGIcons.CloseMenuCircle />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bets__footer">
                  <p>
                    <SVGIcons.EmptyWallet /> <span>Settings</span>
                  </p>
                  <SVGIcons.ArrowUp />
                </div>
              )}
            </div>
          </div>
        </>
      </>
    );

                
  } 
  // Bets container for sport pages
  else if (
    isConnected &&
    (location.pathname.startsWith("/"))
  ) {
    return (
      <>
        <div className={`bets`}>
          <div className="bets__header">
            {toggle ? (
              <Button onClick={() => setToggle(false)}>
                <SVGIcons.SaveAdd color="#48484A" /> Best slip
              </Button>
            ) : (
              <Button onClick={() => setToggle(false)} type="primary">
                <SVGIcons.SaveAdd /> Best slip
              </Button>
            )}
            {toggle ? (
              <Button type="primary" onClick={() => setToggle(true)}>
                <SVGIcons.Bets /> My bets
              </Button>
            ) : (
              <Button onClick={() => setToggle(true)}>
                <SVGIcons.Bets color="#48484A" /> My bets
              </Button>
            )}
          </div>

          {/* Bets container for sports pages */}
          {noSportsBets && isConnected ? (
            <>
              <div className={`bets__body no-bets-container`}>
                <div className={`bets__body-wrapper`}>
                  <div className="no-bets">
                    <span className="text-muted fw-bold">
                      Choose the odds and
                    </span>
                    <a href="/" className="fw-bold">
                      Make your bank account great again
                    </a>

                      {/****** For demonstration purpose only *******/}

                    <br />
                    <p
                      onClick={() => {
                        setNoCryptoBets(false);
                        setNoSportsBets(false);
                      }}
                    >
                      <u>
                        <big>Click me to add bets</big>
                      </u>
                    </p>

                      {/****** For demonstration purpose only *******/}
                      </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={`bets__body`}>
                {toggle ? (
                  <div className="bets__header">
                    {toggle2 ? (
                      <Button onClick={() => setToggle2(false)}>
                        <SVGIcons.SingleBet color="#48484A" /> Unsettled
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setToggle2(false)}
                        type="secondary"
                        color="grey"
                      >
                        <SVGIcons.SingleBet /> Unsettled
                      </Button>
                    )}
                    {toggle2 ? (
                      <Button
                        type="secondary"
                        color="grey"
                        onClick={() => setToggle2(true)}
                      >
                        <SVGIcons.Save2 /> Settled
                      </Button>
                    ) : (
                      <Button onClick={() => setToggle2(true)}>
                        <SVGIcons.Save2 color="#48484A" /> Settled
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="bets__header">
                    {toggle2 ? (
                      <Button onClick={() => setToggle2(false)}>
                        <SVGIcons.SingleBet color="#48484A" /> Single bet
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setToggle2(false)}
                        type="secondary"
                        color="grey"
                      >
                        <SVGIcons.SingleBet /> Single bet
                      </Button>
                    )}
                    {toggle2 ? (
                      <Button
                        type="secondary"
                        color="grey"
                        onClick={() => setToggle2(true)}
                      >
                        <SVGIcons.Save2 /> Parlay
                      </Button>
                    ) : (
                      <Button onClick={() => setToggle2(true)}>
                        <SVGIcons.Save2 color="#48484A" /> Parlay
                      </Button>
                    )}
                  </div>
                )}
                <div className="bets__content">
                  {!toggle ? (
                    [
                      toggle2 ? (
                        <>
                          {/* For parlay tab */}
                          <MatchWinnersList
                            Icon={SVGIcons["Soccer"]}
                            sport="FOOTBALL"
                            winnersData={sampleData.matchWinners}
                          />
                          <MatchWinnersList
                            Icon={SVGIcons["Basketball"]}
                            sport="BASKETBALL"
                            winnersData={sampleData.matchWinners}
                          />
                        </>
                      ) : (
                        <>
                          {/* For single bet tab */}
                          <p>Single bet</p>
                        </>
                      ),
                    ]
                  ) : (
                    <>
                      {toggle2 ? (
                        <>
                          {/* For settled tab */}
                          <MyBets
                            settled={true}
                            id="#6"
                            date="Dec 6 08:00AM"
                            loseBet={false}
                            activity={9}
                            betAmount="$100.0"
                            winAmount="$900.0"
                          />
                          <MyBets
                            settled={true}
                            id="#6"
                            date="Dec 6 08:00AM"
                            loseBet={true}
                            activity={9}
                            betAmount="$100.0"
                            winAmount="$900.0"
                          />
                        </>
                      ) : (
                        <>
                          {/* For Unsettled tab */}
                          <MyBets
                            settled={false}
                            id="#6"
                            date="Dec 6 08:00AM"
                            loseBet={false}
                            activity={9}
                            betAmount="$100.0"
                            winAmount="$900.0"
                          />
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </>
          )}

          <div className="bets__footer-wrapper">
            {isConnected && !noSportsBets && !toggle && (
              <>
                <div className="min-max">
                  <div className="left">
                    <Button type="primary" size="small" color="violet">
                      Min
                    </Button>
                    <p>Bet amount</p>
                  </div>
                  <div className="right">
                    <p>BCR</p>
                    <Button type="primary" size="small" color="green">
                      Max
                    </Button>
                  </div>
                </div>
                <div className="place-bet">
                  <div className="place-bet__header">
                    <p>POSSIBLE WIN</p>
                    <p className="win">$0.00</p>
                  </div>
                  <Button type="primary">Place bet $0.00</Button>
                </div>
              </>
            )}

            {isMobile ? (
              <div className={`bets__footer${!showNavbar ? " fixed" : ""}`}>
                <div className="left">
                  <p>
                    <SVGIcons.EmptyWallet /> <span>Settings</span>
                  </p>
                  <SVGIcons.ArrowUp />
                </div>
                <div className="right">
                  <Button
                    onClick={() => setShowBetsOnMobile(!showBetsOnMobile)}
                    type="secondary"
                    color="grey"
                  >
                    <SVGIcons.CloseMenuCircle />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bets__footer">
                <p>
                  <SVGIcons.EmptyWallet /> <span>Settings</span>
                </p>
                <SVGIcons.ArrowUp />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  else {
    return null;
  }
};

export default BetsContainer;
