
//unused
function getDistance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

var player = function(x, y) {
	/*
	This is the main player class

	Args:
		x: x coordinate of player
		y: y coordinate of player
	*/
	this.x = x;
	this.y = y;
	this.state = "";//for ceratin powerups
};

player.prototype.update = function(mx, my) {
	/*
	Updates player's x, y coordinates to move according to mouse position

	Args:
		mx: mouse x coordinate
		my: mouse y coordinate
	*/

	if (Math.round(this.x) == Math.round(mx) && Math.round(this.y) == Math.round(my)) {
		console.log('not moving!');
		return; //does this even work?
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
	context.arc(this.x, this.y, 3, Math.PI * 2, false);
	context.stroke();
	context.fill();
};
