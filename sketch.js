
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var stone;
var mango1,mango2,mango3,mango4;
var ground;
var boy;
function preload()
{
boyImage = loadImage("images/boy.png");	
treeImage = loadImage("images/tree.png")
}

function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;
  // tree = new Tree(600,100)
	//ground = new Ground(100,500,800,20)
    stone = new Stone(300,400,20) 
    //boy = new Boy(300,500)
	mango1 = new Mango(1036,273,30)
	mango2 = new Mango(1154,140,30)
	mango3 = new Mango(1283,190,30)
	mango4 = new Mango(1363,263,30)
	chain= new Chain(stone.body,{x:332,y:536})
	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(0);
  
  image(treeImage,1200,375,600,700)
  image(boyImage,400,600,200,300)

  stone.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  chain.display()
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  
  drawSprites();
 text(mouseX+" , "+mouseY,mouseX,mouseY)
}


function mouseDragged (){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased (){
    chain.fly()
}
function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.body.setStatic(lmango.body,false);
  }
}


