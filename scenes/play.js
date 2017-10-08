//main game scene

var play = function() {
    this.difficulty = 0; //for later
    //this.level = new easy_level();
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

play.prototype.start = function(d) {
    switch (d) {
        case 0:
            this.level = new easy_level();
            break;
        default:
            break;
    }
};

var play = new play();
