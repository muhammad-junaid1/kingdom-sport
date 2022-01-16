const data = {
  cryptoItems: [
    {
      text: "BTC",
      icon: "Soccer",
      number: 3,
    },
    {
      text: "BUSD",
      icon: "Soccer",
      number: 3,
    },
    {
      text: "ETCH",
      icon: "Soccer",
      number: 3,
    },
    {
      text: "BNM",
      icon: "Soccer",
      number: 3,
    },
    {
      text: "MATIC",
      icon: "Soccer",
      number: 3,
    },
    {
      text: "REP",
      icon: "Soccer",
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
          icon: "Soccer",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "Soccer",
          text: "Item no 2",
          number: 14,
        },
        {
          icon: "Soccer",
          text: "Item no 3",
          number: 14,
        },
        {
          icon: "Soccer",
          text: "Item no 4",
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
          icon: "Basketball",
          text: "Item no 1",
          number: 20,
        }
      ],
    },
    {
      icon: "MMA",
      text: "MMA",
      number: 34,
      dropdownItems: [
        {
          icon: "MMA",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "MMA",
          text: "Item no 2",
          number: 14,
        },
        {
          icon: "MMA",
          text: "Item no 3",
          number: 14,
        },
        {
          icon: "MMA",
          text: "Item no 4",
          number: 14,
        },
        {
          icon: "MMA",
          text: "Item no 5",
          number: 14,
        },
        {
          icon: "MMA",
          text: "Item no 6",
          number: 14,
        },
        {
          icon: "MMA",
          text: "Item no 7",
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
          icon: "Tennis",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "Tennis",
          text: "Item no 2",
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
          icon: "Icehockey",
          text: "Item no 1",
          number: 20,
        },
        {
          icon: "Icehockey",
          text: "Item no 2",
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
      activity: 5.2
    },
    {
      team1: "First",
      team2: "Second",
      winner: "First",
      activity: 5.2
    },
    {
      team1: "First",
      team2: "Second",
      winner: "First",
      activity: 5.2
    },
  ], 
  liveNavItems: [
    {
      icon: "Soccer",
      text: "Football",
      number: 2,
      matchData: [
        {
          team: {
          left: { name: "Napoli", icon: "logo", score: 2 },
          right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: {icon: "logo", name: "UEFA EUORUPA LEAGUE"},
          time: [4, 83],
          ratios: []
        },
        {
          team: {
          left: { name: "Napoli", icon: "logo", score: 3 },
          right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: {icon: "logo", name: "UEFA EUORUPA LEAGUE"},
          time: [4, 81],
          ratios: [["1x", 1.91], ["1x", 1.91], ["1x", 1.91]],
          moreRatios: 384
        },
    ]
    }, {
      icon: "Tennis",
      text: "Tennis",
      number: 2,
      matchData: [
        {
          team: {
          left: { name: "Chulalongkorn University", icon: "logo", score: 61 },
          right: { name: "University Bangkok", icon: "logo1", score: 30 },
          },
          tour: {icon: "logo-1", name: "CHAMPIONSHIP OF THAILAND WOMEN"},
          time: [4, 83],
          ratios: []
        },
        {
          team: {
            left: { name: "Chulalongkorn University", icon: "logo", score: 61 },
            right: { name: "University Bangkok", icon: "logo1", score: 30 },
            },
            tour: {icon: "logo-1", name: "CHAMPIONSHIP OF THAILAND WOMEN"},
            time: [4, 83],
          ratios: [["1x", 1.91], ["1x", 1.91], ["1x", 1.91]],
          moreRatios: 543
        },
    ]
    }, {
      icon: "Basketball",
      text: "Basketball",
      number: 2,
      matchData: [
        {
          team: {
          left: { name: "Napoli", icon: "logo", score: 1 },
          right: { name: "Leicester City", icon: "logo1", score: 4 },
          },
          tour: {icon: "logo", name: "UEFA EUORUPA LEAGUE"},
          time: [4, 83],
          ratios: []
        },
        {
          team: {
          left: { name: "Napoli", icon: "logo", score: 3 },
          right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: {icon: "logo", name: "UEFA EUORUPA LEAGUE"},
          time: [4, 81],
          ratios: [["1x", 1.91], ["1x", 1.91], ["1x", 1.91]],
          moreRatios: 384
        },
    ]
    }
    , {
      icon: "MMA",
      text: "MMA",
      number: 2,
      matchData: [
        {
          team: {
          left: { name: "Napoli", icon: "logo", score: 1 },
          right: { name: "Leicester City", icon: "logo1", score: 4 },
          },
          tour: {icon: "logo", name: "UEFA EUORUPA LEAGUE"},
          time: [4, 83],
          ratios: []
        },
        {
          team: {
          left: { name: "Napoli", icon: "logo", score: 3 },
          right: { name: "Leicester City", icon: "logo1", score: 2 },
          },
          tour: {icon: "logo", name: "UEFA EUORUPA LEAGUE"},
          time: [4, 81],
          ratios: [["1x", 1.91], ["1x", 1.91], ["1x", 1.91]],
          moreRatios: 384
        },
    ]
    }
  ],

  matchData: [
      {
        team: {
        left: { name: "Napoli", icon: "logo", score: 1 },
        right: { name: "Leicester City", icon: "logo1", score: 4 },
        },
        tour: {icon: "logo", name: "UEFA EUORUPA LEAGUE"},
        time: [4, 83],
        ratios: []
      },
      {
        team: {
        left: { name: "Napoli", icon: "logo", score: 3 },
        right: { name: "Leicester City", icon: "logo1", score: 2 },
        },
        tour: {icon: "logo", name: "UEFA EUORUPA LEAGUE"},
        time: [4, 81],
        ratios: [["1x", 1.91], ["1x", 1.91], ["1x", 1.91]],
        moreRatios: 384
      },
  ]
};

export default data;
