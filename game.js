/*
hold game information and directs game scene

state:
	menu
	play
*/

var game = function(player, enemies) {
	/*
	contains game information

	Args:
		player: main player class
		enemies: main enemies class
	*/
	this.player = player;
	this.enemies = enemies;
	this.state = 'play';
};

game.prototype.update = function(mx, my) {
	/*
	updates all game elements

	Args:
		mx: mouse x
		my: mouse y
	*/
	switch(this.state) {
		case 'play':
			//temp
			this.player.update(mx, my);
			this.enemies.update();
			break;
		default:
			break;
	}
};

game.prototype.draw = function() {
	canvas.width = canvas.width;
	context.strokeStyle = "black";
	context.strokeRect(0, 0, canvas.width, canvas.height);

	switch(this.state) {
		case 'play':
			//temp
			this.player.draw();
			this.enemies.draw();
			break;
		default:
			break;
	}
};
