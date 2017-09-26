//main game scene

var play = function() {

};

play.prototype.update = function(g) {
    /*
    updates play scene

    Arges:
        g: game class
    */

    g.player.update();
    g.enemies.update(g.player);
};

play.prototype.draw = function(g) {
    /*
    draws play scene

    Arges:
        g: game class
    */

    g.player.draw();
    g.enemies.draw();
};


var play = new play();
