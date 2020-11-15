const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper_ball;
var dustbin1,dustbin2,dustbin3;
var ground;

function setup() {
	createCanvas(800,400);
	background("black");

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20)

	dustbin1 = new Dustbin(400,380,190,20);
	dustbin2 = new Dustbin(300,345,20,90);
	dustbin3 = new Dustbin(500,345,20,90);
  paper_ball = new PaperBall(100,380,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper_ball.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:45,y:-45});
  }
}



