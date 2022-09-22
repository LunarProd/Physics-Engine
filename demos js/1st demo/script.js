// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// creating the engine
var engine = Engine.create();

// creating a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

render.canvas.width = window.innerWidth
render.canvas.height = window.innerHeight

// creating two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// running the renderer
Render.run(render);

// creating the runner
var runner = Runner.create();

// running the engine
Runner.run(runner, engine);