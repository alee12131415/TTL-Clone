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

game.prototype.update = function() {
	/*
	updates all game elements
	*/
	switch(this.state) {
		case 'play':
			//temp
			//this.player.update();
			//this.enemies.update();
			play.update(this);
			break;
		default:
			break;
	}
};

game.prototype.draw = function() {
	//https://stackoverflow.com/questions/22039180/failed-to-execute-requestanimationframe-on-window-the-callback-provided-as
	//new style
	requestAnimationFrame(this.draw.bind(this));

	//reset game frame
	canvas.width = canvas.width;
	context.strokeStyle = "black";
	context.strokeRect(0, 0, canvas.width, canvas.height);

	switch(this.state) {
		case 'play':
			//temp
			//this.player.draw();
			//this.enemies.draw();
			play.draw(this);
			break;
		default:
			break;
	}

	//debug
	//frames += 1;
};
