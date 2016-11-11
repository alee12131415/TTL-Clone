/*
enemy organization class

holds array of enemy

draws all enemy

handles spawns
*/

var enemies = function() {
	this.enemy_array = new Array;
}

enemies.prototype.spawn = function(type) {
	/*
	Spawns type of enemy
	
	Args:
		type: string type of enemy
	*/
	
	if (type == "") type = "hunter";
	
	//filler
	if (type == "hunter") this.spawnHunter();
	else {
		console.log("No such type " + type)
	}
}

enemies.prototype.spawnHunter = function() {
	this.enemy_array.push(new enemy(Math.random() * canvas.width, Math.random() * canvas.height, "hunter"));
}

enemies.prototype.update = function(player) {
	/*
	Updates enemy x, y coordinated depending on its state
	
	Args:
		state: string state of the enemy
	*/
	for (var i = 0; i < this.enemy_array.length; i++) {
		var temp = this.enemy_array[i];
		if (temp.state == "") temp.state = "hunter";
		if (temp.state == "hunter") temp.stateHunter(player);
	}
	
}

enemies.prototype.draw = function() {
	for (var i = 0; i < this.enemy_array.length; i++) {
		temp = this.enemy_array[i];
		context.fillStyle = 'red';
		context.beginPath();
		context.arc(temp.x, temp.y, 3, Math.PI * 2, false);
		context.stroke();
		context.fill();
	}
}

