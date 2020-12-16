const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var base;
var polygon;
var slingshot;
var boxImg;
var score = 0;

function preload(){
boxImg = loadImage("rectangle.png");
}

function setup() {
  createCanvas(1000,400)

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  box1 = new Box(780,235,30,40);
  box2 = new Box(810,235,30,40);
  box3 = new Box(840,235,30,40);
  box4 = new Box(870,235,30,40);
  box5 = new Box(900,235,30,40);
  box6 = new Box(810,195,30,40);
  box7 = new Box(840,195,30,40);
  box8 = new Box(870,195,30,40);
  box9 = new Box(846,155,30,40);

  base = new Ground(840,300,200,25);

  polygon = new Hexagon(840,125);

  slingshot = new SlingShot(polygon.body,{x : 176, y : 100});
}

function draw() {
  background(0);  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  base.display();

  polygon.display();

  slingshot.display();

  textSize(36);
  text("Score : " + score,800,75);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();

}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(polygon.body);               
  }
}