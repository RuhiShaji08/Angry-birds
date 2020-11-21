// namespacing 
const Engine = Matter.Engine
const World =  Matter.World
const Bodies = Matter.Bodies

var engine, myWorld, ground;
var box1 

function setup() {
  createCanvas(1200,600);

  // Creating the engine
  engine = Engine.create();

  myWorld = engine.world;

   box1 = new Box(750,540,80,80);
   box2 = new Box(1050,540,80,80);
   box3 = new Box(820, 400, 80,80);
   box4 = new Box(1000,400, 80, 80);
  
   ground = new Ground(600,570,1200,20);

   pig = new Pig(890,540,50,50);
   pig2 = new Pig(890, 400,50,50);

   log = new Log(910,450,400,90);  
   log2 = new Log(910, 350, 400,90);
}

function draw() {
  background("black");  
  Engine.update(engine) 
  
 box1.display();
 box2.display();
 box3.display();
 box4.display();

 ground.display();

 pig.display();
 pig2.display();

 log.display();
 log2.display();
}