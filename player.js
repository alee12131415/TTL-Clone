
//unused
function getDistance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

const PLAYER_RADIUS = 3;

var player = function(x, y) {
	/*
	This is the main player class
	*/
	this.radius = PLAYER_RADIUS;
	this.x = x;
	this.y = y;
	this.state = "";//for ceratin powerups
};

player.prototype.update = function() {
	/*
	Updates player's x, y coordinates to move according to mouse position
	*/

	if (Math.round(this.x) == Math.round(mx) && Math.round(this.y) == Math.round(my)) {
		return;
	}

	xmov = 0.05 * (mx - this.x);
	ymov = 0.05 * (my - this.y);
	if (xmov > 10) xmov = 10;
	if (ymov > 10) ymov = 10;
	if (xmov < -10) xmov = -10;
	if (ymov < -10) ymov = -10;
	this.x += xmov;
	this.y += ymov;

};

player.prototype.draw = function() {
	context.fillStyle = 'black';
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
	context.fill();
};
