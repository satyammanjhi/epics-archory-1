const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var PlayerBase,ComputerBase,ComputerPlayer,backgroundImg,backgroundImg2,ComputerPlayerImg,player,playerImg;

function preload(){

  backgroundImg = loadImage("base2.png");
  backgroundImg2 = loadImage("base1.png");
  ComputerPlayerImg = loadImage("player.png");
  playerImg = loadImage("player.png");

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   PlayerBase=new playerBase(300,random(450,height-300),180,150);
   ComputerBase=new computerBase(300,random(450,height-300),180,150);
   ComputerPlayer=new computerPlayer(300,random(450,height-300),180,150);
   player=new Player(300,random(450,height-300),180,150);

 }

function draw() {

  background(180);

  image(backgroundImg, width-500, height-200, width/4, height/4);
  image(backgroundImg2, width-1300, height-200, width/4, height/4);
  image(ComputerPlayerImg, width-400, height-500, width/10, height/2);
  image(playerImg, width-1200, height-500, width/10, height/2);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   PlayerBase.display();
   ComputerBase.display();
   ComputerPlayer.display();
   player.display();

   //display Player and computerplayer


}
