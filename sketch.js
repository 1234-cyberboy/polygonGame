const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5;
var p;
var c;
var score = 0;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(800,height,600,20);
    box1 = new Box(700,200,70,70);
    box2 = new Box(700,300,70,70);
    box3 = new Box(700,350,70,70);
    box4 = new Box(800,300,70,70);
    box5 = new Box(800,350,70,70);
    p = new P(200,30);
    c = new Chain(p.body,{x:200, y:30});
}

function draw(){
    background(80);
    
    text("Score  " + score, width-300, 50);

    Engine.update(engine);
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    ground.display();
    p.display();
    c.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(p.body, {x: mouseX , y: mouseY}); 
}

function mouseReleased(){
    c.FVH()
}

function keyPressed(){
    console.log(" key.qdj,e0sxp;k./");
    if(keyCode === 32){
      console.log(".qdj,e0sxp;k./");
        c.STS(p.body);
      
    }
}
