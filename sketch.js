
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ball,ball1,ball2,ball3,ball4;
var slingshot
var top;
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

//create bodies here
top.createSprite(370,50,350,30)
 ball  = new Ball(300,390,50)
 ball1 = new Ball1(355,390,50)
 ball2 = new Ball2(240,390,50)
 ball3 = new Ball3(410,390,50)
 ball4 = new Ball4(470,390,50)
 line  = new Line (300,200,3,340)
 line1 = new Line1(355,200,3,340)
 line2 = new Line2(240,200,3,340)
 line3 = new Line3(410,200,3,340)
 line4 = new Line4(470,200,3,340)

	Engine.run(engine);



}

function draw() { 

  rectMode(CENTER);
  background("red");

  ball.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  line.display()
  line1.display()
  line2.display()
  line3.display()
  line4.display()
 
  drawSprites();

 
}
function keyPressed () {
  if(keyCode === UP_ARROW){
          Matter.Body.applyForce(ball4.body,ball4.body.position,{x:90,y:-609});
  }
}


