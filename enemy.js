/*
Enemy class/prototype

Contains update function for each state

states:
spawned
hunter
hunted
pong left
pong right
pong ball
up
down
left
right
*/

var enemy = function(x, y, state) {
	this.x = x;
	this.y = y;
	this.radius = 3;
	this.state = state;
};

enemy.prototype.update = function(player) {
	/*
	update enemy location

	Args:
		player: player of the game
	*/

	switch (this.state) {
		case 'hunter':
			this.hunter(player);
			break;
		default:
			break;
	}
};

enemy.prototype.hunter = function(player) {
	/*
	Enemy will slowly follow player

	Args:
		player: player of the game
	*/

	xdiff = player.x - this.x;
	ydiff = player.y - this.y;
	hypo = Math.sqrt(Math.pow(xdiff, 2) + Math.pow(ydiff, 2))
	xmov = xdiff / hypo;
	ymov = ydiff / hypo;
	this.x += xmov;
	this.y += ymov;
};
