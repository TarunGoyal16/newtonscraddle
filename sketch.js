
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bar,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:true
	}
	bar=Bodies.rectangle(400,100,200,30,options)
	World.add(world,bar)
	bob1= new Bob(480,600)
	bob2=new Bob(440,600)
	bob3=new Bob(400,600)
	bob4=new Bob(360,600)
	bob5=new Bob(320,600)

	rope1=new Rope(bob1.body,this.bar,{x:80,y:0})
	rope2=new Rope(bob2.body,this.bar,{x:40,y:0})
	rope3=new Rope(bob3.body,this.bar,{x:0,y:0})
	rope4=new Rope(bob4.body,this.bar,{x:-40,y:0})
	rope5=new Rope(bob5.body,this.bar,{x:-80,y:0})

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  rectMode(CENTER);
  rect(bar.position.x,bar.position.y,200,30)
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

 
}



