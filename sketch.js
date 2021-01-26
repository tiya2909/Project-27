
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	
	bob1 = new Bob(200,300);
	
	bob2 = new Bob(250,300);

	bob3 = new Bob(300,300);

	bob4 = new Bob(350,300);

	bob5 = new Bob(400,300);

	roof = new Roof(300,100,250,30);

	rope1 = new Rope(bob1,roof,200,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();

  drawSprites();
 
}



