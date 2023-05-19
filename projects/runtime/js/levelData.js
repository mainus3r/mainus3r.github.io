var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        currentLevel: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: 200 },
          { type: "sawblade", x: 1300, y: 200 },
          { type: "sawblade", x: 980, y: 95 },
          { type: "sawblade", x: 700, y: 160 },
          { type: "enemy", x: 2000, y: groundY - 45 },
          { type: "enemy", x: 800, y: groundY - 50},
          { type: "enemy", x: 1200, y: groundY - 50},
          { type: "reward", x: 400, y: groundY - 50},
          { type: "reward", x: 2400, y: groundY - 50},
          { type: "marker", x: 3000, y: 200 },
        ],
      },
      {
        name: "Robot Rampage",
        currentLevel: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: 200 },
          { type: "sawblade", x: 1300, y: 200 },
          { type: "sawblade", x: 980, y: 95 },
          { type: "sawblade", x: 700, y: 160 },
          { type: "enemy", x: 2000, y: groundY - 45 },
          { type: "enemy", x: 800, y: groundY - 50},
          { type: "enemy", x: 1200, y: groundY - 50},
          { type: "reward", x: 400, y: groundY - 50},
          { type: "reward", x: 2400, y: groundY - 50},
          { type: "marker", x: 3000, y: 200 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
