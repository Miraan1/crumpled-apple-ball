
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,left1,right1,ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,640,800,10)

	right1 = new Ground(740,560,15,150)
	left1 = new Ground(510,560,15,150)
	var ballOptions = {
		restitution:0.8
	}
	ball = Bodies.circle(100,500,20,ballOptions)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display()
 right1.display()
 left1.display()
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.05,y:-0.05})

	}

}



