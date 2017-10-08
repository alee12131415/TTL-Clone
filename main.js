var canvas = document.getElementById('mygame');
var context = canvas.getContext("2d");

//mouse listener
canvas.addEventListener('mousemove', updateMouse);
canvas.addEventListener('click', reset);

function updateMouse(e) {
	/*
	Changes mx and my when mouse moves. From event listener

	Args:
		e: mouse information
	*/
	mx = e.clientX - canvas.offsetLeft;
	my = e.clientY - canvas.offsetTop;
};

var stime = Date.now();
function reset() {
	stime = Date.now();
}

//init values
mx = canvas.width / 2; //mouse x
my = canvas.height / 2; //mouse y

//1000 = 1 second
//update loops 33.33 times a second

//declare
var player = new player(mx, my);
var enemies = new enemies();
var game = new game(player, enemies);

//new style
setInterval(function(){game.update();}, 30);
game.draw();

//debug
/*
var frames = 0;
var timestart = Date.now();
function getfr() {
	if (frames <= 0) return;
	var timepassed = Date.now() - timestart;
	var fps = Math.round(1000/(timepassed/frames)*100)/100;
	console.log(fps);
}

setInterval(getfr, 1000);
*/
