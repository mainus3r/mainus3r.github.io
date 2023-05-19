var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y){
      
      var hitZoneSize = 20; 
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      sawBladeHitZone.addChild(obstacleImage);
    }
    

    function createEnemy(x, y){
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50,  "red");
    redSquare.x =-25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -3;
    //enemy.velocityY = -1;
    enemy.rotationalVelocity = 10;
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-15);
    };
    enemy.onProjectileCollision = function () {
      game.increaseScore(100);
      enemy.fadeOut();
      shrink(10);
    }
    }
    function createReward(x, y){
      var reward = game.createGameItem("reward", 25);
      var yellowSquare = draw.rect(50, 50,  "yellow");
      yellowSquare.x =-25;
      yellowSquare.y = -25;
      reward.addChild(yellowSquare);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.velocityX = -3;
      //enemy.velocityY = -1;
      reward.rotationalVelocity = 10;
      reward.onPlayerCollision = function () {
        game.changeIntegrity(15);
        reward.fadeOut();
      };
      reward.onProjectileCollision = function () {
        game.increaseScore(15);
        reward.fadeOut();
        shrink(10);
      }
      }
      function createMarker(x, y){
        var marker = game.createGameItem("marker", 25);
        var blueSquare = draw.rect(50, 50,  "blue");
        blueSquare.x =-25;
        blueSquare.y = -25;
        marker.addChild(blueSquare);
        marker.x = x;
        marker.y = y;
        game.addGameItem(marker);
        marker.velocityX = -3;
        marker.rotationalVelocity = 10;
        marker.onPlayerCollision = function () {
          startLevel();
        };
        reward.onProjectileCollision = function () {
          startLevel();
        }
        }

        
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      for (var i = 0; i < levelObjects.length; i++){
          if(levelObjects[i].type === "sawblade"){
            createSawBlade(levelObjects[i].x, levelObjects[i].y);
          }
          if(levelObjects[i].type === "enemy"){
            createEnemy(levelObjects[i].x, levelObjects[i].y);
          }
          if(levelObjects[i].type === "reward"){
            createReward(levelObjects[i].x, levelObjects[i].y);
          }
          if(levelObjects[i].type === "marker"){
            createMarker(levelObjects[i].x, levelObjects[i].y);
          }
      }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
