
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;
	ball = new paper (100,680,50);
	bp1 = new basket (1100,780,30,200);
	bp2 = new basket (900,780,30,200);
	bp3 = new basket (1000,840,200,30); 
	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
	background(0);
    Engine.update(engine);
  rectMode(CENTER);

 ball.display();
bp1.display();
bp2.display();
bp3.display();
ground.display();
  drawSprites();
 
}

function KeyPressed (){
if (keydown === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position, {x:85,y:-85});


}
}

