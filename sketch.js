const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var sling;
var polygon_img;
var gameState = "linked"

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(450,300,250,10);
  stand2 = new Stand(760,200,200,10);
  polygon = new Polygon(150,200,20);
  sling = new Slingshot(polygon.body, {x:100,y:200})

  //level one
  block1 = new Block(360,275,30,40);
  block2 = new Block(390,275,30,40);
  block3 = new Block(420,275,30,40);
  block4 = new Block(450,275,30,40);
  block5 = new Block(480,275,30,40);
  block6 = new Block(510,275,30,40);
  block7 = new Block(540,275,30,40);

  //level two
  block8 = new Block(390,235,30,40);
  block9 = new Block(420,235,30,40);
  block10 = new Block(450,235,30,40);
  block11 = new Block(480,235,30,40);
  block12 = new Block(510,235,30,40);

  //level three
  block13 = new Block(420,195,30,40);
  block14 = new Block(450,195,30,40);
  block15 = new Block(480,195,30,40);

  //top
  block16 = new Block(450,155,30,40);

  //level one on second stand
  block17 = new Block(700,175,30,40)
  block18 = new Block(730,175,30,40)
  block19 = new Block(760,175,30,40)
  block20 = new Block(790,175,30,40)
  block21 = new Block(820,175,30,40)

  //level two on second stand
  block22 = new Block(730,145,30,40)
  block23 = new Block(760,145,30,40)
  block24 = new Block(790,145,30,40)

  //level three on second stand
  block25 = new Block(760,115,30,40)


}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  polygon.display();
  sling.display();

  strokeWeight(2);
  stroke(15);

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block25.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block22.display();
  block23.display();
  block24.display();
  
  fill("grey");
  block16.display();
 

}

function mouseDragged(){
  if(gameState === "linked") {
      Matter.Body.setPosition(polygon.body, {x: mouseX, y:mouseY});
  }
}


function mouseReleased(){
  sling.fly();
  gameState = "released"
}
