const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 200;
let y = 200;
const speed = 2;
const keys = {};

const sprite = new Image();
sprite.src = "soul.png";

document.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

function update() {
  if (keys["arrowup"] || keys["w"]) y -= speed;
  if (keys["arrowdown"] || keys["s"]) y += speed;
  if (keys["arrowleft"] || keys["a"]) x -= speed;
  if (keys["arrowright"] || keys["d"]) x += speed;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(sprite, x, y, 32, 32); // Draw sprite at (x, y) with width & height
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
