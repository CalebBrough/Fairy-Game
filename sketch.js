var starImg, fairyImg, bgImg;
var fairy, fairyBody, fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

/*
var star_properties = {
	isStatic:true
}
*/

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5, {isStatic:true});
	World.add(world, starBody);

	fairyBody = Bodies.circle(130, 520, 25);
	
	Engine.run(engine);

	console.log(starBody);

}


function draw() {

	background(bgImg);

	Engine.update(engine);

	if (keyDown("RIGHT_ARROW")) {
		fairy.position.x+=5;
	}

	if (keyDown("LEFT_ARROW")) {
		fairy.position.x-=5;
	}

	if (keyDown("DOWN_ARROW")) {
		starBody.isStatic = false
	}

  	star.x=starBody.position.x;
  	star.y=starBody.position.y;

  	drawSprites();

}