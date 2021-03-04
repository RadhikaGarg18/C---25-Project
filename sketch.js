
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;
var dustbinImg, dustbinSprite;

function preload(){
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1000, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,620,1000,20);
	dustbinObj=new dustbin(width/2,600);

	dustbinSprite = createSprite(width/2, 480,200,150)
	dustbinSprite.addImage(dustbinImg);
	dustbinSprite.scale = 0.9
	
	paper = new Paper(width/2,0,100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
 
  groundObject.display();
  
  paper.display();
  dustbinObj.display();
drawSprites();
  

}

