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
};

function main() {
	the_game.update(mx, my);
	the_game.draw();
}

mx = canvas.width / 2; //mouse x
my = canvas.height / 2; //mouse y

//player class
var the_player = new player(canvas.width / 2, canvas.height / 2);
var the_enemies = new enemies();
var the_game = new game(the_player, the_enemies);

setInterval(main, 30);
//1000 = 1 second
//main loops 33.33 times a second
