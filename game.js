function preload() {

}

function setup() {
    var canvasDiv = document.getElementById('game-holder');
    var width = canvasDiv.offsetWidth;
    var canvas = createCanvas(width, 400);
    canvas.parent('game-holder');
}

function windowResized(){
    var canvasDiv = document.getElementById('game-holder');
    var width = canvasDiv.offsetWidth;
    resizeCanvas(width, 400);
}

function draw() {
    background(0);
}