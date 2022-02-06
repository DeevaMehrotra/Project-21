
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, bin1, bin2;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,500,20,ball_options);
 	World.add(world,ball)

	ground = new Ground(750,650,1500,20);

	bin1 = new Ground(1100,580,20,120)
	bin2 = new Ground(1400,580,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ground.display();
  bin1.display();
  bin2.display();
  ellipse(ball.position.x,ball.position.y,20,20);
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});

	}
}