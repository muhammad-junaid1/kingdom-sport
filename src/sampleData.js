const data = {
  cryptoItems: [
    {
      text: "BTC",
      icon: "BTC",
      number: 3,
    },
    {
      text: "BUSD",
      icon: "BUSD",
      number: 3,
    },
    {
      text: "ETH",
      icon: "ETH",
      number: 3,
    },
    {
      text: "BNB",
      icon: "BNB",
      number: 3,
    },
    {
      text: "MATIC",
      icon: "MATIC",
      number: 3,
    },
    {
      text: "REP",
      icon: "REP",
      number: 3,
    },
  ],
  dropDownsData: [
    {
      icon: "Soccer",
      text: "Football",
      number: 34,
      dropdownItems: [
        {
          icon: "logo",
          text: "Premier League",
          number: 20,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
      ],
    },
    {
      icon: "Basketball",
      text: "Basketball",
      number: 34,
      dropdownItems: [
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
      ],
    },
    {
      icon: "MMA",
      text: "MMA",
      number: 34,
      dropdownItems: [
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
      ],
    },
    {
      icon: "Tennis",
      text: "Tennis",
      number: 34,
      dropdownItems: [
        {
          icon: "logo",
          text: "Premier League",
          number: 20,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
      ],
    },
    {
      icon: "Icehockey",
      text: "Icehockey",
      number: 34,
      dropdownItems: [
        {
          icon: "logo",
          text: "Premier League",
          number: 20,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
      ],
    },
  ],

  // Favourite items showing in navbar
  favNavbarData: [
    {
      icon: "Soccer",
      text: "Football",
      number: 34,
      dropdownItems: [
        {
          icon: "logo",
          text: "Premier League",
          number: 20,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
      ],
    },
        {
      icon: "Tennis",
      text: "Tennis",
      number: 34,
      dropdownItems: [
        {
          icon: "logo",
          text: "Premier League",
          number: 20,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 20,
        },
        {
          icon: "logo",
          text: "Premier League",
          number: 14,
        },
      ],
    },
  ],
  matchWinners: [
    {
      team1: "First",
      team2: "Second",
      winner: "First",
      activity: 5.2,
    },
    {
      team1: "First",
      team2: "Second",
      winner: "First",
      activity: 5.2,
    },
    {
      team1: "First",
      team2: "Second",
      winner: "First",
      activity: 5.2,
    },
  ],
  // Items showed on navbar of live page
  liveNavItems: [
    {
      icon: "Soccer",
      text: "Football",
      isFav: false,
      number: 2,
      matchData: [
        {
          team: {
            left: { name: "Napoli", icon: "logo", score: 2 },
            right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
          time: [4, 83],
          ratios: [],
        },
        {
          team: {
            left: { name: "Napoli", icon: "logo", score: 3 },
            right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
          time: [4, 81],
          ratios: [
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
          ],
          moreRatios: 384,
        },
      ],
    },
    {
      icon: "Tennis",
      text: "Tennis",
      number: 2,
      isFav: false,
      matchData: [
        {
          team: {
            left: { name: "Chulalongkorn University", icon: "logo", score: 61 },
            right: { name: "University Bangkok", icon: "logo1", score: 30 },
          },
          tour: { icon: "logo-1", name: "CHAMPIONSHIP OF THAILAND WOMEN" },
          time: [4, 83],
          ratios: [],
        },
        {
          team: {
            left: { name: "Chulalongkorn University", icon: "logo", score: 61 },
            right: { name: "University Bangkok", icon: "logo1", score: 30 },
          },
          tour: { icon: "logo-1", name: "CHAMPIONSHIP OF THAILAND WOMEN" },
          time: [4, 83],
          ratios: [
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
          ],
          moreRatios: 543,
        },
      ],
    },
    {
      icon: "Basketball",
      text: "Basketball",
      number: 2,
      isFav: false,
      matchData: [
        {
          team: {
            left: { name: "Napoli", icon: "logo", score: 1 },
            right: { name: "Leicester City", icon: "logo1", score: 4 },
          },
          tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
          time: [4, 83],
          ratios: [],
        },
        {
          team: {
            left: { name: "Napoli", icon: "logo", score: 3 },
            right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
          time: [4, 81],
          ratios: [
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
          ],
          moreRatios: 384,
        },
      ],
    },
    {
      icon: "MMA",
      text: "MMA",
      isFav: false,
      number: 2,
      matchData: [
        {
          team: {
            left: { name: "Napoli", icon: "logo", score: 1 },
            right: { name: "Leicester City", icon: "logo1", score: 4 },
          },
          tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
          time: [4, 83],
          ratios: [],
        },
        {
          team: {
            left: { name: "Napoli", icon: "logo", score: 3 },
            right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
          time: [4, 81],
          ratios: [
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
            ["1x", 1.91],
          ],
          moreRatios: 384,
        },
      ],
    },
  ],

  // All tournaments
  allTours: [
    {
      id: 1,
      sport: "football",
      text: "Premier League",
      icon: "logo",
      isFav: true,
      filter: "international",
      numbers: 18
    },
    {
      id: 2,
      sport: "football",
      text: "Laliga",
      icon: "logo-1",
      isFav: false,
      filter: "international",
      numbers: 23
    },
    {
      id: 3,
      sport: "football",
      text: "UEFA Europa",
      icon: "logo",
      isFav: false,
     filter: "international",
      numbers: 1
    },
    {
      id: 4,
      sport: "football",
      text: "Fourth Tour",
      icon: "logo-1",
      isFav: false,
      filter: "international" ,
      numbers :50
    },
    {
      id: 5,
      sport: "football",
      text: "Fifth Tour",
      icon: "logo",
      isFav: false,
      filter: "international",
      numbers: 62
    },
    {
      id: 6,
      sport: "football",
      text: "Sixth Tour",
      icon: "logo",
      isFav: false,
      filter: "international",
      numbers: 98
    },
    {
      id: 7,
      sport: "football",
      text: "Seventh Tour",
      icon: "logo",
      isFav: false,
      filter: "international",
      numbers: 18
    },
    {
      id: 8,
      sport: "football",
      text: "Eighth Tour",
      icon: "logo",
      isFav: false,
      filter: "international",
      numbers: 18
    },
  {
      id: 9,
      sport: "football",
      text: "Championship of Algeria",
      icon: "logo",
      isFav: false,
      international: false,
      filter: "Algeria",
      numbers: 23

    },
    {
      id: 10,
      sport: "football",
      text: "Championship of Algeria",
      icon: "logo",
      isFav: false,
      international: false,
      filter: "Algeria",
      numbers: 51
    },
  ]
,
  // Used for all favourite items
  favItemsData: [
    {
      icon: "Soccer",
      text: "FOOTBALL",
      tours: [
        {
          id: 1,
          name: "Premier League",
          icon: "logo",
          isLive: true,
          matchData: [
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 2 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: [4, 83],
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: [4, 81],
              ratios: [
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
              ],
              moreRatios: 384,
            },
          ],
        },
        {
          id: 2,
          name: "Laliga",
          icon: "logo-1",
          isLive: false,
          matchData: [
            {
              team: {
                left: {
                  name: "Chulalongkorn University",
                  icon: "logo",
                  score: 2,
                },
                right: { name: "University Bangkok", icon: "logo1", score: 2 },
              },
              time: ["DEC 12", "09:00"],
              ratios: [],
            },
            {
              team: {
                left: {
                  name: "Chulalongkorn University",
                  icon: "logo",
                  score: 3,
                },
                right: { name: "University Bangkok", icon: "logo1", score: 2 },
              },
              time: ["DEC 12", "09:00"],
              ratios: [
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
              ],
              moreRatios: 384,
            },
          ],
        },
        {
          id: 2,
          name: "Laliga",
          icon: "logo",
          matchData: [
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 2 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["June 8", "07:00"],
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["June 8", "07:00"],
              ratios: [
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
              ],
              moreRatios: 384,
            },
          ],
        },
      ],
    },
    {
      icon: "Tennis",
      text: "TENNIS",
      tours: [
        {
          id: 1,
          name: "Premier League",
          icon: "logo",
          isLive: false,
          matchData: [
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 2 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["23 Jan", "02:00"],
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["23 Jan", "02:00"],
              ratios: [
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
              ],
              moreRatios: 384,
            },
          ],
        },
      ],
    },
  ],

  // Used when specific sport item is toggled on home and favs pages
  liveToursData: [
    {
      icon: "Soccer",
      text: "Football",
      tours: [
        {
          id: 1,
          name: "Premier League",
          isFav: true,
          icon: "logo",
          isLive: true,
          matchData: [
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 2 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: [4, 83],
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: [4, 81],
              ratios: [
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
              ],
              moreRatios: 384,
            },
          ],
      },
        {
          id: 2,
          name: "Laliga",
          isFav: false,
          icon: "logo-1",
          isLive: true,
          matchData: [
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 2 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: [4, 83],
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: [4, 81],
              ratios: [
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
              ],
              moreRatios: 384,
            },
          ],
      },
      ],
    },
  ],
  preMatches: [
    {
      icon: "Soccer",
      text: "Football",
      tours: [
        {
          id: 1,
          name: "Premier League",
          isFav: true,
          icon: "logo-1",
          isLive: false,
          matchData: [
            {
              team: {
                left: { name: "Chulalongkorn University", icon: "logo", score: 2 },
                right: { name: "University Bangkok", icon: "logo1", score: 2 },
              },
              time: ["DEC 12", "09:00"],
              ratios: [["1x", 1.91],
              ["1x", 1.91],
              ["1x", 1.91],
              ["1x", 1.91],
              ["1x", 1.91],
              ["1x", 1.91],
              ["1x", 1.91],
            ],
            moreRatios: 23
            },
            {
              team: {
                left: { name: "Chulalongkorn University", icon: "logo", score: 3 },
                right: { name: "University Bangkok", icon: "logo1", score: 2 },
              },
              time: ["DEC 12", "09:00"],
              ratios: [],
              moreRatios: 384,
            },
          ],
      },
        {
          id: 1,
          name: "Premier League",
          isFav: false,
          icon: "logo",
          isLive: false,
          matchData: [
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 2 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["DEC 12", "09:00"],
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["DEC 12", "09:00"],
              ratios: [
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
              ],
              moreRatios: 384,
            },
          ],
      },
      ],
    },
  ],

  // Matchdata template for live items
  matchData: [
    {
      team: {
        left: { name: "Napoli", icon: "logo", score: 1 },
        right: { name: "Leicester City", icon: "logo1", score: 4 },
      },
      tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
      time: [4, 83],
      ratios: [],
    },
    {
      team: {
        left: { name: "Napoli", icon: "logo", score: 3 },
        right: { name: "Leicester City", icon: "logo1", score: 2 },
      },
      tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
      time: [4, 81],
      ratios: [
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
      ],
      moreRatios: 384,
    },
  ],
  // Match data template for upcoming (not held yet) items
  matchData2: [
    {
      team: {
        left: { name: "Napoli", icon: "logo", score: 1 },
        right: { name: "Leicester City", icon: "logo1", score: 4 },
      },
      tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
      time: ["DEC 12", "09:00"],
      ratios: [
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
      ],
      moreRatios: 384,

    },
    {
      team: {
        left: { name: "Napoli", icon: "logo", score: 3 },
        right: { name: "Leicester City", icon: "logo1", score: 2 },
      },
      tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
      time: ["DEC 12", "09:00"],
      ratios: [
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
      ],
      moreRatios: 384,
    },
    {
      team: {
        left: { name: "Napoli", icon: "logo", score: 3 },
        right: { name: "Leicester City", icon: "logo1", score: 2 },
      },
      tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
      time: ["DEC 12", "09:00"],
      ratios: [
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
      ],
      moreRatios: 384,
    },
    {
      team: {
        left: { name: "Napoli", icon: "logo", score: 3 },
        right: { name: "Leicester City", icon: "logo1", score: 2 },
      },
      tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
      time: ["DEC 12", "09:00"],
      ratios: [
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
      ],
      moreRatios: 384,
    },
    {
      team: {
        left: { name: "Napoli", icon: "logo", score: 3 },
        right: { name: "Leicester City", icon: "logo1", score: 2 },
      },
      tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
      time: ["DEC 12", "09:00"],
      ratios: [
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
        ["1x", 1.91],
      ],
      moreRatios: 384,
    },
  ],
  leaderBoard: [
    {
      avatar: "avatar_1",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_2",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_3",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_4",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_5",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_1",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_2",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_3",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_4",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_5",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_1",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_2",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_3",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_4",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_5",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_1",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_2",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_3",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_4",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_5",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_1",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_2",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_3",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_4",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    {
      avatar: "avatar_5",
      userID: "0xe1B233535...5c00",
      bestBet: "2,342,400.00 DBSC",
      won: 188,
      lose: 31,
      result: "2,342,400.00 DBSC",
      resultPercent: "9437.29%",
    },
    
  ],
  cryptoTable: [
    {
      coin: {
        icon: "BTC",
        price: "$100,000",
        date: "Sep 24",
        text: "BTC",
        details: function() { return `${this.text} touch ${this.price} by ${this.date}`}
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35"
        }, 
        rekt: {
          value: 1.91,
          pool: "1,035.35"
        }
      },
      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62"
      }
    },
    {
      coin: {
        icon: "BUSD",
        price: "$100,000",
        date: "Sep 24",
        text: "BUSD",
        details: function() { return `${this.text} touch ${this.price} by ${this.date}`}
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35"
        }, 
        rekt: {
          value: 1.91,
          pool: "1,035.35"
        }
      },
      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62"
      }
    },
    {
      coin: {
        icon: "ETH",
        price: "$100,000",
        date: "Sep 24",
        text: "ETH",
        details: function() { return `${this.text} touch ${this.price} by ${this.date}`}
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35"
        }, 
        rekt: {
          value: 1.91,
          pool: "1,035.35"
        }
      },
      
      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62"
      }
    },
    {
      coin: {
        icon: "BNB",
        price: "$100,000",
        date: "Sep 24",
        text: "BNB",
        details: function() { return `${this.text} touch ${this.price} by ${this.date}`}
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35"
        }, 
        rekt: {
          value: 1.91,
          pool: "1,035.35"
        }
      },
      
      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62"
      }
    },
    {
      coin: {
        icon: "MATIC",
        price: "$100,000",
        date: "Sep 24",
        text: "MATIC",
        details: function() { return `${this.text} touch ${this.price} by ${this.date}`}
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35"
        }, 
        rekt: {
          value: 1.91,
          pool: "1,035.35"
        }
      },
      
      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62"
      }
    },
    {
      coin: {
        icon: "REP",
        price: "$100,000",
        date: "Sep 24",
        text: "REP",
        details: function() { return `${this.text} touch ${this.price} by ${this.date}`}
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35"
        }, 
        rekt: {
          value: 1.91,
          pool: "1,035.35"
        }
      },
      
      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62"
      }
    },
  ],
  yourBetsTable: [
    {
      id: 36141,
      result: "win",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
        withdrawl: "Transferred to pool"
      },
    {
      id: 36141,
      result: "lose",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
      },
    {
      id: 36141,
      result: "active",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
      },
    {
      id: 36141,
      result: "lose",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
      },
    {
      id: 36141,
      result: "win",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
        withdrawl: "Transferred to pool"
      },
    {
      id: 36141,
      result: "win",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
        withdrawl: "Transferred to pool"
      },
    {
      id: 36141,
      result: "lose",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
      },
    {
      id: 36141,
      result: "active",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
      },
      {
        id: 36141,
        result: "lose",
        amount: ["100.00 DBSC", "247.00 DBSC"],
        winloseAmount: "100.00 DBSC",
        match: {
          teamA: "Philadelphia 76ers",
          teamB: "Utah Jazz",
        },
          coef: 2.47,
          dateTime: ["08:00:04", "DEC 08, 2021"],
        },
    {
      id: 36141,
      result: "win",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
      
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
        withdrawl: "Transferred to pool"
      },
    {
      id: 36141,
      result: "win",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
        withdrawl: "Transferred to pool"
      },
    {
      id: 36141,
      result: "lose",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
      },
    {
      id: 36141,
      result: "active",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
      },
    {
      id: 36141,
      result: "lose",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
      },
      {
        id: 36141,
        result: "lose",
        amount: ["100.00 DBSC", "247.00 DBSC"],
        winloseAmount: "100.00 DBSC",
        match: {
          teamA: "Philadelphia 76ers",
          teamB: "Utah Jazz",
        },
          coef: 2.47,
          dateTime: ["08:00:04", "DEC 08, 2021"],
        },
    {
      id: 36141,
      result: "win",
      amount: ["100.00 DBSC", "247.00 DBSC"],
      winloseAmount: "100.00 DBSC",
      match: {
        teamA: "Philadelphia 76ers",
        teamB: "Utah Jazz",
      },
        coef: 2.47,
        dateTime: ["08:00:04", "DEC 08, 2021"],
        withdrawl: "Transferred to pool"
      },
  ]
};

export default data;
