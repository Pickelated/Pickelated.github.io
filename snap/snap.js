thecheck = 0;
theothercheck = 0;

const cling = new Audio("cling.mp3"); // put your sound file here
cling.volume = 1;

document.addEventListener('keydown', (event) => {
    if (event.repeat) {
      return;
    }
    console.log(`Key pressed: ${event.key}`);
    console.log(thecheck);
    console.log(theothercheck);


    if ((event.key.length <= 1) && (event.key === "s" || event.key === "n" || event.key === "a" || event.key === "p")) {
      thecheck++;
    }
    if ((event.key.length <= 1) && !(event.key === "s" || event.key === "n" || event.key === "a" || event.key === "p")) {
      theothercheck++;
    }
    if (thecheck === 4 && theothercheck === 0) { //if SNAP is held down
      
    }

    console.log(thecheck);
    console.log(theothercheck);
});

document.addEventListener("keyup", (eventup) => {
    console.log("Key up: " + eventup.key);

    if ((event.key.length <= 1) && (eventup.key === "s" || eventup.key === "n" || eventup.key === "a" || eventup.key === "p")) {
      thecheck--;
    }
    if ((event.key.length <= 1) && !(eventup.key === "s" || eventup.key=== "n" || eventup.key === "a" || eventup.key === "p")) {
      theothercheck--;
    }
});


// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
    Body = Matter.Body;

// create an engine
var engine = Engine.create();
engine.enableSleeping = false;

var width = window.innerWidth;
var height = window.innerHeight;
var thickness = 50; // wall thickness

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        background: "transparent",
        width: width,
        height: height
    }
});

render.canvas.width = width;
render.canvas.height = height;
render.options.width = width;
render.options.height = height;


function createWalls() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    return [
        Bodies.rectangle(width / 2, -10 + -thickness / 2, width, thickness, { isStatic: true, render: { fillStyle: "transparent" } }), // top
        Bodies.rectangle(width / 2, -10 + height + thickness / 2, width, thickness, { isStatic: true, render: { fillStyle: "transparent" } }), // bottom
        Bodies.rectangle(-5 + -thickness / 2, height / 2, thickness, height, { isStatic: true, render: { fillStyle: "transparent" } }), // left
        Bodies.rectangle(-5 + width + thickness / 2, height / 2, thickness, height, { isStatic: true, render: { fillStyle: "transparent" } }) // right
    ];
}

// initial walls
var walls = createWalls();
// create two boxes and a ground
var boxA = Bodies.rectangle(400, 100, 80, 80, {
    restitution: 0.8,
    friction: 0.05,
    render: {
        sprite: {
            texture: "weathered.webp", // 
            xScale: 0.078,
            yScale: 0.078
        }
    }
});
var boxEvil = Bodies.rectangle(500, 100, 80, 80, {
    restitution: 0.8,
    friction: 0.05,
    render: {
        sprite: {
            texture: "evilweathered.webp", // 
            xScale: 0.078,
            yScale: 0.078
        }
    }
});
var boxGreen = Bodies.rectangle(600, 100, 80, 80, {
    restitution: 0.8,
    friction: 0.05,
    render: {
        sprite: {
            texture: "greenweathered.webp", // 
            xScale: 0.078,
            yScale: 0.078
        }
    }
});
var boxMauve = Bodies.rectangle(500, 100, 80, 80, {
    restitution: 0.8,
    friction: 0.05,
    render: {
        sprite: {
            texture: "mauveweathered.webp", // 
            xScale: 0.078,
            yScale: 0.078
        }
    }
});
var boxB = Bodies.rectangle(450, 400, 80, 80, { restitution: 0.8, friction: 0.05, render: {fillStyle: "#219ebc"} });
var boxC = Bodies.rectangle(1100, 400, 120, 120, { restitution: 0.8, friction: 0.05 });
var boxD = Bodies.rectangle(810, 100, 180, 80, { restitution: 0.8, friction: 0.05 });
var circle = Bodies.circle(400, 300, 50, { restitution: 0.8, friction: 0.05, render: {fillStyle: "#f4a261"}});
var circle2 = Bodies.circle(800, 300, 100, { restitution: 0.8, friction: 0.05, render: {fillStyle: "#EFA9AE"} });
var pent = Bodies.polygon(200, 300, 5, 80, { restitution: 0.8, friction: 0.05, render: {fillStyle: "#e9c46a"}});
var tent = Bodies.polygon(600, 300, 3, 120, { restitution: 0.8, friction: 0.05, render: {fillStyle: "#15616d"}});
var sent = Bodies.polygon(400, 300, 6, 120, { restitution: 0.8, friction: 0.05, render: {fillStyle: "#bc4749"}});
var zoid = Bodies.trapezoid(600, 300, 150, 80, 0.5, { restitution: 0.8, friction: 0.05, render: {fillStyle: "#ee6c4d"}});
var circle3 = Bodies.circle(800, 300, 100, { restitution: 0.8, friction: 0.05, render: {fillStyle: "#98c1d9"} });

Matter.Events.on(engine, 'beforeUpdate', function() {
    // apply upward force equal to gravity * mass
    const g = engine.gravity;
    Body.applyForce(
        circle3,
        circle3.position,
        {
            x: -circle3.mass * g.x * g.scale,
            y: -circle3.mass * g.y * g.scale
        }
    );
    Body.applyForce(
        tent,
        tent.position,
        {
            x: -tent.mass * g.x * g.scale,
            y: -tent.mass * g.y * g.scale
        }
    );
    Body.applyForce(
        pent,
        pent.position,
        {
            x: -pent.mass * g.x * g.scale,
            y: -pent.mass * g.y * g.scale
        }
    );
    Body.applyForce(
        boxC,
        boxC.position,
        {
            x: -boxC.mass * g.x * g.scale,
            y: -boxC.mass * g.y * g.scale
        }
    );
    Body.applyForce(
        boxD,
        boxD.position,
        {
            x: -boxD.mass * g.x * g.scale,
            y: -boxD.mass*0.98 * g.y * g.scale
        }
    );
    Body.applyForce(
        circle2,
        circle2.position,
        {
            x: -circle2.mass * g.x * g.scale,
            y: -circle2.mass*0.7 * g.y * g.scale
        }
    );
    Body.applyForce(
        circle,
        circle.position,
        {
            x: -circle.mass * g.x * g.scale,
            y: -circle.mass*0.5 * g.y * g.scale
        }
    );
    Body.applyForce(
        sent,
        sent.position,
        {
            x: -sent.mass * g.x * g.scale,
            y: -sent.mass * g.y * g.scale
        }
    );
});

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxEvil, boxGreen, boxMauve, boxB, boxC, boxD, circle, circle2, 
    circle3, pent, tent, sent, zoid, ...walls]);

const amigos = [boxEvil, boxGreen, boxMauve];

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

function pushInsideViewport(body) {
    var halfWidth = (body.bounds.max.x - body.bounds.min.x) / 2;
    var halfHeight = (body.bounds.max.y - body.bounds.min.y) / 2;

    var vx = 0;
    var vy = 0;

    if (body.bounds.max.x > window.innerWidth) vx = -20;
    else if (body.bounds.min.x < 0) vx = 20;

    if (body.bounds.max.y > window.innerHeight) vy = -20;
    else if (body.bounds.min.y < 0) vy = 20;

    if (vx !== 0 || vy !== 0) {
        Body.setVelocity(body, { x: vx, y: vy });
    }
}


window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    // update renderer size
    render.canvas.width = width;
    render.canvas.height = height;
    render.options.width = width;
    render.options.height = height;

    [boxA, boxB].forEach(pushInsideViewport);
    // remove old walls
    Composite.remove(engine.world, walls);

    // create new walls
    walls = createWalls();
    Composite.add(engine.world, walls);

    
});
function addMomentum(box, forceX = 0, forceY = 0) {
    // Matter.js uses force as fraction of mass
    const forceMagnitude = 0.001; // adjust strength
    Body.applyForce(box, box.position, {
        x: forceX * forceMagnitude,
        y: forceY * forceMagnitude
    });
    Body.setAngularVelocity(box, box.angularVelocity+forceX*0.0002);
}
let x = 1; //coords on mouse down
let y = 1;
let fx = 1; //coords on mouse up
let fy = 1; 
let mousestatus = false; //false is up, true is down
var ctx = render.context;
var prevMouse = null;
var currMouse = null;

function getMousePos(event) {
    const rect = render.canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function getTouchPos(event) {
    const rect = render.canvas.getBoundingClientRect();
    const touch = event.touches[0] || event.changedTouches[0];

    return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
    };
}

function amigoMotion(amigo) {
    async function loop() {
        while (true) {

            const delay = 200 + Math.random() * 2000;
            await new Promise(r => setTimeout(r, delay));

            const forceX = -800 + Math.random() * 1600;
            const forceY = -800 + Math.random() * 1600;

            addMomentum(amigo, forceX, forceY);
        }
    }

    loop();
}

amigos.forEach(amigoMotion);

render.canvas.addEventListener('mousedown', function(event) {
    console.log('Mouse down');
    const pos = getMousePos(event);
    x = pos.x;
    y = pos.y;
    prevMouse = { x: x, y: y };
    currMouse = { x: pos.x, y: pos.y };
    mousestatus = true;
});
window.addEventListener('touchstart', function(event) {
    const pos = getTouchPos(event);

    x = pos.x;
    y = pos.y;

    prevMouse = { x: x, y: y };
    currMouse = { x: pos.x, y: pos.y };

    mousestatus = true;

    event.preventDefault();
});
window.addEventListener('mouseup', function(event) {
    console.log('Mouse up');
    const pos = getMousePos(event);
    fx = pos.x;
    fy = pos.y;
    addMomentum(boxA, x - fx, y - fy*1.2);
    mousestatus = false;
    prevMouse = null;
    currMouse = null;
});
window.addEventListener('touchend', function(event) {
    const pos = getTouchPos(event);

    fx = pos.x;
    fy = pos.y;

    addMomentum(boxA, x - fx, y - fy * 1.2);

    mousestatus = false;
    prevMouse = null;
    currMouse = null;

    event.preventDefault();
});

// store previous mouse position

    window.addEventListener('mousemove', function(event) {
        if (!mousestatus) return;

        const pos = getMousePos(event);
        currMouse = { x: pos.x, y: pos.y };
    });
    window.addEventListener('touchmove', function(event) {
    if (!mousestatus) return;

    const pos = getTouchPos(event);
    currMouse = { x: pos.x, y: pos.y };

    event.preventDefault();
});

Matter.Events.on(render, 'afterRender', function() {
    if (!mousestatus || !prevMouse || !currMouse) return;

    // calculate drag vector
    const dragX = currMouse.x - x; // mouse movement since mouse down
    const dragY = currMouse.y - y;

    // end point of the line (same as before)
    const endX = boxA.position.x - dragX * 0.5;
    const endY = boxA.position.y - dragY * 0.5;

    // control point for curve (midpoint shifted downward)
    const ctrlX = (boxA.position.x + endX) / 2;
    const ctrlY = (boxA.position.y + endY) / 2 - 50; // 50px up for curve

    ctx.setLineDash([3, 5, 3]); // dotted line

    // --- Outline (black) ---
    ctx.beginPath();
    ctx.moveTo(boxA.position.x, boxA.position.y);
    ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 7;
    ctx.stroke();

    // --- Inner line (white) ---
    ctx.beginPath();
    ctx.moveTo(boxA.position.x, boxA.position.y);
    ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 4;
    ctx.stroke();
});

Matter.Events.on(engine, "collisionStart", function(event) {
    event.pairs.forEach(pair => {
        // relative speed between bodies
        const relVelX = pair.bodyA.velocity.x - pair.bodyB.velocity.x;
        const relVelY = pair.bodyA.velocity.y - pair.bodyB.velocity.y;
        const impactSpeed = Math.sqrt(relVelX * relVelX + relVelY * relVelY);

        // convert speed -> volume (tweak numbers if needed)
        let volume = impactSpeed / 30; 
        volume = Math.max(0, Math.min(1, volume)); // clamp 0-1

        // play sound
        const s = cling.cloneNode(); // allows multiple hits quickly
        s.volume = volume;
        s.play();
    });
});
