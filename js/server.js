var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

// create a Matter.js engine
// FIXME
var engine = Engine.create(document.body);

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
// TODO Engine start?
//Engine.run(engine);

Engine.update(engine, delta, correction);

// TODO output position of boxes
