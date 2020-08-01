const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var Dustbin,Paper,Base;


function setup(){
    var canvas = createCanvas(1000,400);

   engine = Engine.create();
   world = engine.world;

    Dustbin = new dustbin(750,250,200,230);
    Paper = new paper(150,300,80,80);
    Base = new BaseClass(500,340,1000,20);
  
}

function draw(){
    background("white");
   
    Engine.update(engine);

    Dustbin.display();
    Paper.display();
    Base.display();

     
}