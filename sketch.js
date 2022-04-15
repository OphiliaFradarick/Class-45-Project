var database;
var gamestate;

function preload() {
	bgImg = loadImage("assets/IMG-5584.PNG");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	database = firebase.database();
	game = new Game();
	game.start();



}


function draw() {
	background(bgImg);


	drawSprites();

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

