
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5
var bobObject1,bobObject5,bobObject2,bobObject3,bobObject4
var roof1
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

roof1= new roof(400,200, 500, 30);

bobdiameter=40;

bobObject1 = new Bob(250,500,65);
bobObject2 = new Bob(314,500,65);
bobObject3 = new Bob(378,500,65);
bobObject4 = new Bob(442,500,65);
bobObject5 = new Bob(506,500,65);
	
Engine.run(engine);
  

rope1 = new rope(bobObject1.body,roof.body,150, -bobdiameter*2 , 0);
rope2 = new rope(bobObject2.body,roof.body,150, -bobdiameter*1 , 0);
rope3 = new rope(bobObject3.body,roof.body,150, 0, 0);
rope4 = new rope(bobObject4.body,roof.body,150, -bobdiameter*1 , 0);
rope5 = new rope(bobObject5.body,roof.body,150, -bobdiameter*2 , 0);

}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof1.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  //rope1.display();
// rope2.display();
  //rope3.display();
 // rope4.display();
 // rope5.display();

 drawSprites();
}



