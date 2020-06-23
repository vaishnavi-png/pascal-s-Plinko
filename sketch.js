const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos=[];
var divisions = [];
var ground;
var division;

var divisionHeight=150;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,590,1200,20);

  for(var v=40; v<= width; v= v+50){
    plinkos.push(new Plinko(v , 75));
  }

  for(var v=15; v<= width; v= v+50){
    plinkos.push(new Plinko(v , 125));
  }

  for(var v=40; v<= width; v= v+50){
    plinkos.push(new Plinko(v , 175));
  }

  for(var v=15; v<= width; v= v+50){
    plinkos.push(new Plinko(v , 225));
  }

  
  for(var v=40; v<= width; v= v+50){
    plinkos.push(new Plinko(v , 275));
  }

  for(var v=15; v<= width; v= v+50){
    plinkos.push(new Plinko(v , 325));
  }

  for(var v=40; v<= width; v= v+50){
    plinkos.push(new Plinko(v , 375));
  }

  for(var v=15; v<= width; v= v+50){
    plinkos.push(new Plinko(v , 425));
  }

  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
}

function draw() {
  if(frameCount % 60 === 0){
    particle = new Particle(random(100, 700), 0, 7, random(0, 360));
    particles.push(particle);
  }

  background(0,0,0);  
  Engine.update(engine);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for(var v = 0; v<plinkos.length;v++){
    plinkos[v].display();
  }

  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
 }
  ground.display();
}