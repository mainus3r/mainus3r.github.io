var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var plane;
        var buildings = [];
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var cityScreen = draw.rect(canvasWidth,groundY,'#081763');
            background.addChild(cityScreen);
            var bottomFill = draw.rect(canvasWidth, groundY, "#262626");
            bottomFill.y = canvasHeight - groundY;
            background.addChild(bottomFill);

            var bottomFillDetails = draw.rect(canvasWidth/2-400, groundY, "black");
            bottomFillDetails.y = canvasHeight - groundY + 150;
            background.addChild(bottomFillDetails);

            

            // TODO 2: - Add a moon and starfield
            for (var i = 0; i < 200; i++){
            var circle = draw.circle(3, "white", "LightGray", 2);
            circle.x = canvasWidth * Math.random();
            circle.y = groundY * Math.random();
            background.addChild(circle);

            var moon = draw.bitmap("img/moon.png");
            moon.x = 200;
            moon.y = 1;
            moon.scaleX = .4;
            moon.scaleY = .4;
            background.addChild(moon);
            
            
            }
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 15; ++i) {
                var buildingHeight = Math.random() * 250;
                var building = draw.rect(75, buildingHeight, "DarkGray", "Black", 1);
                building.x = 200 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
              }

              for (var i = 0; i < 15; ++i) {
                var buildingHeight = Math.random() * 250;
                var building = draw.rect(100, buildingHeight, "LightGray", "Black", 1);
                building.x = 200 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
              }
            
            // TODO 3: Part 1 - Add a tree
            plane = draw.bitmap("img/plane.png");
            plane.x = 1270;
            plane.y = 0.9;
            background.addChild(plane);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            plane.x = plane.x - 10;
            if (plane.x < -20000){
                plane.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++){
                var eachElement = buildings[i];

                eachElement.x = eachElement.x - 6;
                if (eachElement.x < -200){
                    eachElement.x = canvasWidth;
                }
            }
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
