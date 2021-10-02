const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var bow;

function preload() {
  backgroundImg = loadImage("background.png");
  baseimage = loadImage("base.png");
  playerimage = loadImage("player.png");
  bowimage = loadImage("baa.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);


 var options = {
 isStatic : true
 


 }
  //create player base body
 playerBase  = Bodies.rectangle(160, 350, 160, 310,options);
 World.add(world,playerBase)
  //create player body
 player = Bodies.rectangle(600,450,200,310,options)
 World.add(world,player)
 
 bow = Bodies.rectangle(600,450,200,310,options)
 World.add(world,bow)
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage,240,155,80,150)

  //show the playerbase image using image() function
  image(baseimage,200,295,170,130)

  image(bowimage,220,155,170,130)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
