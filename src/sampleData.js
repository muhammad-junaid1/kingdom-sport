const data = {
  // used in crypto navbar
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
  // Data showed in dropdowns of navbar for each sport
  dropDownsData: [
    {
      icon: "Soccer",
      text: "Football",
      number: 34,
      dropdownItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      icon: "Basketball",
      text: "Basketball",
      number: 34,
      dropdownItems: [11, 12],
    },
    {
      icon: "MMA",
      text: "MMA",
      number: 34,
      dropdownItems: [13],
    },
    {
      icon: "Tennis",
      text: "Tennis",
      number: 34,
      dropdownItems: [14, 15],
    },
    {
      icon: "Icehockey",
      text: "Icehockey",
      number: 34,
      dropdownItems: [16],
    },
  ],

  // Favourite items showing in navbar
  favNavbarData: [
    {
      icon: "Soccer",
      text: "Football",
      number: 34,
      dropdownItems: [1],
    },
    {
      icon: "Tennis",
      text: "Tennis",
      number: 34,
      dropdownItems: [15],
    },
  ],
  // Used in bets container
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
          time: ["Half 2", "83"],
          ratios: [],
        },
        {
          team: {
            left: { name: "Napoli", icon: "logo", score: 3 },
            right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
          time: ["Half 2", "83"],
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
          time: ["Half 2", "83"],
          ratios: [],
        },
        {
          team: {
            left: { name: "Chulalongkorn University", icon: "logo", score: 61 },
            right: { name: "University Bangkok", icon: "logo1", score: 30 },
          },
          tour: { icon: "logo-1", name: "CHAMPIONSHIP OF THAILAND WOMEN" },
          time: ["Half 2", "83"],
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
          time: ["Half 2", "83"],
          ratios: [],
        },
        {
          team: {
            left: { name: "Napoli", icon: "logo", score: 3 },
            right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
          time:"Quarter 4`83",
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
          time: ["Half 2", "83"],
          ratios: [],
        },
        {
          team: {
            left: { name: "Napoli", icon: "logo", score: 3 },
            right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: { icon: "logo", name: "UEFA EUORUPA LEAGUE" },
          time: ["Half 2", "83"],
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

  // All filters/countries for tours
  toursFilters: [
    {
      filterId: 1,
      filter: "international",
      icon: "international",
    },
    {
      filterId: 2,
      filter: "algeria",
      icon: "algeria",
    },
    {
      filterId: 3,
      filter: "australia",
      icon: "australia",
    },
    {
      filterId: 4,
      filter: "belgium",
      icon: "belgium",
    },
    {
      filterId: 5,
      filter: "brazil",
      icon: "australia",
    },
    {
      filterId: 6,
      filter: "hongkong",
      icon: "algeria",
    },
    {
      filterId: 7,
      filter: "italy",
      icon: "belgium",
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
      filterId: 1,
      filter: "international",
      numbers: 18,
    },
    {
      id: 2,
      sport: "football",
      text: "Laliga",
      icon: "logo-1",
      isFav: false,
      filterId: 1,
      filter: "international",
      numbers: 23,
    },
    {
      id: 3,
      sport: "football",
      text: "UEFA Europa",
      icon: "logo",
      isFav: false,
      filterId: 1,
      filter: "International",
      numbers: 1,
    },
    {
      id: 5,
      sport: "football",
      text: "Example Tour",
      icon: "logo",
      isFav: false,
      filterId: 1,
      filter: "international",
      numbers: 62,
    },
    {
      id: 9,
      sport: "football",
      text: "Championship of Algeria",
      icon: "logo",
      isFav: false,
      international: false,
      filterId: 2,
      filter: "algeria",
      numbers: 51,
    },
    {
      id: 10,
      sport: "football",
      text: "Championship of Algeria",
      icon: "logo",
      isFav: false,
      international: false,
      filterId: 2,
      filter: "algeria",
      numbers: 51,
    },
    {
      id: 11,
      sport: "basketball",
      text: "World Basketball",
      icon: "logo-1",
      isFav: false,
      filterId: 1,
      filter: "international",
      numbers: 51,
    },
    {
      id: 12,
      sport: "basketball",
      text: "World Basketball",
      icon: "logo-1",
      isFav: false,
      filterId: 1,
      filter: "international",
      numbers: 51,
    },
    {
      id: 13,
      sport: "mma",
      text: "MMA Premier League",
      icon: "logo",
      isFav: false,
      filterId: 1,
      filter: "international",
      numbers: 51,
    },
    {
      id: 14,
      sport: "tennis",
      text: "Tennis Women Cup",
      icon: "logo",
      isFav: false,
      filterId: 1,
      filter: "international",
      numbers: 51,
    },
    {
      id: 15,
      sport: "tennis",
      text: "Tennis Men Cup",
      icon: "logo",
      isFav: true,
      filterId: 1,
      filter: "international",
      numbers: 51,
    },
    {
      id: 16,
      sport: "icehockey",
      text: "Icehockey Cup",
      icon: "logo",
      isFav: false,
      filterId: 1,
      filter: "international",
      numbers: 51,
    },
  ],
  // Used for all favourite items on fav page
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
              time: ["Half 2", "83"],
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["Half 2", "83"],
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
          id: 1,
          name: "Premier League",
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
      icon: "Basketball",
      text: "Basketball",
      tours: [
        {
          id: 15,
          name: "World Basketball",
          icon: "logo-1",
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

  // Live matches for each sport (on home/fav pages)
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
              time: ["Half 2", "83"],
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["Half 2", "83"],
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
              time: ["Half 2", "83"],
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["Half 2", "83"],
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
      icon: "Basketball",
      text: "Basketball",
      tours: [
        {
          id: 11,
          name: "World Basketball",
          isFav: true,
          icon: "logo-1",
          isLive: true,
          matchData: [
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 2 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["Half 2", "83"],
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time:"Quarter 4`83",
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
          id: 12,
          name: "World Basketball",
          isFav: true,
          icon: "logo-1",
          isLive: true,
          matchData: [
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 2 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time:"Quarter 4`83",
              ratios: [],
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["Half 2", "83"],
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
  // Prematches data for each sport (on home/fav pages)
  preMatches: [
    {
      icon: "Soccer",
      text: "Football",
      tours: [
        {
          id: 1,
          name: "Premier League",
          isFav: true,
          icon: "logo",
          isLive: false,
          matchData: [
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 2 },
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
              moreRatios: 23,
            },
            {
              team: {
                left: { name: "Napoli", icon: "logo", score: 3 },
                right: { name: "Leicester City", icon: "logo1", score: 2 },
              },
              time: ["DEC 12", "09:00"],
              ratios: [],
              moreRatios: 384,
            },
          ],
        },
      ],
    },
    {
      icon: "Basketball",
      text: "Basketball",
      tours: [
        {
          id: 11,
          name: "World Basketball",
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
              ratios: [
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
                ["1x", 1.91],
              ],
              moreRatios: 23,
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
              ratios: [],
              moreRatios: 384,
            },
          ],
        },
      ],
    },
  ],

  // Match data template for live items (on home page)
  matchData: [
    {
      team: {
        left: { name: "Napoli", icon: "logo", score: 1 },
        right: { name: "Leicester City", icon: "logo1", score: 4 },
      },
      tour: { id: 1, icon: "logo", name: "Premier League" },
      time: ["Half 2", "83"],
      ratios: [],
    },
    {
      team: {
        left: { name: "Napoli", icon: "logo", score: 3 },
        right: { name: "Leicester City", icon: "logo1", score: 2 },
      },
      tour: { id: 1, icon: "logo", name: "Premier League" },
      time: ["Half 2", "83"],
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
  // Match data template for upcoming (not held yet) items (on homepage)
  matchData2: [
    {
      team: {
        left: { name: "Napoli", icon: "logo", score: 1 },
        right: { name: "Leicester City", icon: "logo1", score: 4 },
      },
      tour: { id: 1, icon: "logo", name: "Premier League" },
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
      tour: { id: 1, icon: "logo", name: "Premier League" },
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
      tour: { id: 2, icon: "logo-1", name: "Laliga" },
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
      tour: { id: 2, icon: "logo-1", name: "Laliga" },
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
      tour: { id: 1, icon: "logo", name: "Premier League" },
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
  // Match data template for top bets (on homepage)
  matchData3: [
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
        details: function () {
          return `${this.text} touch ${this.price} by ${this.date}`;
        },
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35",
        },
        rekt: {
          value: 1.91,
          pool: "1,035.35",
        },
      },
      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62",
      },
    },
    {
      coin: {
        icon: "BUSD",
        price: "$100,000",
        date: "Sep 24",
        text: "BUSD",
        details: function () {
          return `${this.text} touch ${this.price} by ${this.date}`;
        },
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35",
        },
        rekt: {
          value: 1.91,
          pool: "1,035.35",
        },
      },
      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62",
      },
    },
    {
      coin: {
        icon: "ETH",
        price: "$100,000",
        date: "Sep 24",
        text: "ETH",
        details: function () {
          return `${this.text} touch ${this.price} by ${this.date}`;
        },
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35",
        },
        rekt: {
          value: 1.91,
          pool: "1,035.35",
        },
      },

      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62",
      },
    },
    {
      coin: {
        icon: "BNB",
        price: "$100,000",
        date: "Sep 24",
        text: "BNB",
        details: function () {
          return `${this.text} touch ${this.price} by ${this.date}`;
        },
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35",
        },
        rekt: {
          value: 1.91,
          pool: "1,035.35",
        },
      },

      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62",
      },
    },
    {
      coin: {
        icon: "MATIC",
        price: "$100,000",
        date: "Sep 24",
        text: "MATIC",
        details: function () {
          return `${this.text} touch ${this.price} by ${this.date}`;
        },
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35",
        },
        rekt: {
          value: 1.91,
          pool: "1,035.35",
        },
      },

      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62",
      },
    },
    {
      coin: {
        icon: "REP",
        price: "$100,000",
        date: "Sep 24",
        text: "REP",
        details: function () {
          return `${this.text} touch ${this.price} by ${this.date}`;
        },
      },
      endTime: ["08:00 AM", "JUNE 24, 2021"],
      bet: {
        moon: {
          value: 1.91,
          pool: "1,035.35",
        },
        rekt: {
          value: 1.91,
          pool: "1,035.35",
        },
      },

      prices: {
        locked: "$35,937.62",
        closed: "$35,937.62",
      },
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
      withdrawl: "Transferred to pool",
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
      withdrawl: "Transferred to pool",
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
      withdrawl: "Transferred to pool",
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
      withdrawl: "Transferred to pool",
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
      withdrawl: "Transferred to pool",
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
      withdrawl: "Transferred to pool",
    },
  ],
  accordions: [
    {
      text: "Match winner",
      items: [
        {
          text: "Queens Parker Range",
          numbers: 1.91,
        },
        {
          text: "Draw",
          numbers: 1.91,
        },
        {
          text: "AFC Bournemouth",
          numbers: 1.91,
        },
      ],
    },
    {
      text: "Will score next (2 goal)",
      items: [
        {
          text: "Queens Parker Range",
          numbers: 1.91,
        },
        {
          text: "Draw",
          numbers: 1.91,
        },
        {
          text: "AFC Bournemouth",
          numbers: 1.91,
        },
      ],
    },
    {
      text: "Handicap",
      items: [
        {
          text: "Queens Parker Range",
          numbers: 1.91,
        },
        {
          text: "AFC Bournemouth",
          numbers: 1.91,
        },
        {
          text: "Queens Parker Range",
          numbers: 1.91,
        },
        {
          text: "AFC Bournemouth",
          numbers: 1.91,
        },
        {
          text: "Queens Parker Range",
          numbers: 1.91,
        },
        {
          text: "AFC Bournemouth",
          numbers: 1.91,
        },
        {
          text: "Queens Parker Range",
          numbers: 1.91,
        },
        {
          text: "AFC Bournemouth",
          numbers: 1.91,
        },
        {
          text: "Queens Parker Range",
          numbers: 1.91,
        },
        {
          text: "AFC Bournemouth",
          numbers: 1.91,
        },
      ],
    },
    {
      text: "Total",
      items: [
        { text: "Over 1.5", numbers: 1.91 },
        { text: "Under 1.5", numbers: 1.91 },
        { text: "Over 1.5", numbers: 1.91 },
        { text: "Under 1.5", numbers: 1.91 },
        { text: "Over 1.5", numbers: 1.91 },
        { text: "Under 1.5", numbers: 1.91 },
        { text: "Over 1.5", numbers: 1.91 },
        { text: "Under 1.5", numbers: 1.91 },
        { text: "Over 1.5", numbers: 1.91 },
        { text: "Under 1.5", numbers: 1.91 },
      ],
    },
    {
      text: "Queens Park Rangers total",
      items: [
        { text: "Over 1.5", numbers: 1.91 },
        { text: "Under 1.5", numbers: 1.91 },
        { text: "Over 1.5", numbers: 1.91 },
        { text: "Under 1.5", numbers: 1.91 },
      ],
    },
    {
      text: "AFC Bournemouth total",
      items: [
        { text: "Over 1.5", numbers: 1.91 },
        { text: "Under 1.5", numbers: 1.91 },
        { text: "Over 1.5", numbers: 1.91 },
        { text: "Under 1.5", numbers: 1.91 },
      ],
    },
    {
      text: "Double change",
      items: [],
    },
    {
      text: "Total even/odd",
      items: [],
    },
    {
      text: "Correct score",
      items: [],
    },
    {
      text: "Match result and total",
      items: [],
    },
  ],
};

export default data;
