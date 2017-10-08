//loader

//make sure main is last in array
var scripts = ['scenes/play', 'player', 'enemy', 'enemies', 'game', 'main'];

function load(index = 0) {
    if (index >= scripts.length) return;
    let element = document.createElement('script');
    document.body.appendChild(element);
    element.onload = function(){load(index + 1);};
    element.src = scripts[index] + '.js';
}

load();
