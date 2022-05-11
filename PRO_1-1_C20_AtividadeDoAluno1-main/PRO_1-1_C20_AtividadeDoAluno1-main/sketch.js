const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var solo;
var bola;

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }
  
  var bola_options = {
    restitution: 1,
    frictionAir: 0.01
  }

  solo = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,solo);
  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  bola = Bodies.circle(250,10,20,bola_options);
  World.add(world,bola);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 rect(solo.position.x, solo.position.y, 200,20 );
 ellipse(bola.position.x, bola.position.y,20);
}

