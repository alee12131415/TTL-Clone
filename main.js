var canvas = document.getElementById('mygame');
var context = canvas.getContext("2d");

canvas.addEventListener('mousemove', updateMouse);

function updateMouse(e) {
	/*
	Changes mx and my when mouse moves. From event listener
	
	Args:
		e: mouse information
	*/
	mx = e.clientX;
	my = e.clientY;
}

function update() {
	new_player.update(mx, my);
	
	new_enemies.update(new_player);
}

function draw() {
	canvas.width = canvas.width;
	context.strokeStyle = "black";
	context.strokeRect(0, 0, canvas.width, canvas.height);
	
	new_player.draw();
	new_enemies.draw();
}

function main() {
	update();
	draw();
}

mx = canvas.width / 2; //mouse x
my = canvas.height / 2; //mouse y

//player class
var new_player = new player(canvas.width / 2, canvas.height / 2);
var new_enemies = new enemies();

setInterval(main, 30);
//1000 = i second
//main loops 33.33 times a second