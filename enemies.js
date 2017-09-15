/*
enemy organization class

holds array of enemy

draws all enemy

handles spawns
*/

var enemies = function() {
	this.enemy_array = new Array;
};

enemies.prototype.spawn = function(type) {
	/*
	Spawns type of enemy

	Args:
		type: string type of enemy
	*/

	switch (type) {
		case 'hunter':
			this.spawnHunter();
			break;
		default:
			this.spawn('hunter');
			break;
	}

};

enemies.prototype.spawnHunter = function() {
	this.enemy_array.push(new enemy(Math.random() * canvas.width, Math.random() * canvas.height, "hunter"));
};

enemies.prototype.update = function(player) {
	/*
	Updates enemy x, y coordinated depending on its state

	Args:
		state: string state of the enemy
	*/
	
	this.enemy_array.forEach( function(e) {
		e.update();
	});
};

enemies.prototype.draw = function() {
	for (var i = 0; i < this.enemy_array.length; i++) {
		temp = this.enemy_array[i];
		context.fillStyle = 'red';
		context.beginPath();
		context.arc(temp.x, temp.y, 3, Math.PI * 2, false);
		context.stroke();
		context.fill();
	}
};
