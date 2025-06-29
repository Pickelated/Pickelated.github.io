const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 200;
let y = 200;
const speed = 4;
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
  // speed = 4;
  // if (keys["k"] || keys["x"]) {
  //   speed = 2;
  // }
  
  if ((keys["arrowup"] || keys["w"]) && y > 0) {
    y -= speed;
  }
  if ((keys["arrowdown"] || keys["s"]) && y + 24 < canvas.height) { // spriteHeight (24) <
    y += speed;
  }
  if ((keys["arrowleft"] || keys["a"]) && x > 0) {
    x -= speed;
  }
  if ((keys["arrowright"] || keys["d"]) && x + 24 < canvas.width) { // spriteWidth (24) <
    x += speed;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(sprite, x, y, 24, 24); // Draw sprite at (x, y) with width & height
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

sprite.onload = () => {
  gameLoop();
};
