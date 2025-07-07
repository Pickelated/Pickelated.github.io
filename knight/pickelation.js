let z = 1;
const audMove = new Audio("assets/menumove.wav");
const audSelect = new Audio("assets/menuselect.wav");
const bossMusic = new Audio("assets/knife.mp3");

document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  console.log(`Key code: ${event.code}`);

  
  if (((event.key === 'ArrowDown' || event.key === 's') && z == 1) || ((event.key === 'ArrowUp' || event.key === 'w') && z == 1)) {
    document.getElementById("soul").style.top = "50px";
    z = 2;
    audMove.play();
    audMove.currentTime = 0;
  }
  else if (((event.key === 'ArrowUp' || event.key === 'w') && z == 2) || ((event.key === 'ArrowDown' || event.key === 's') && z == 2)) {
    document.getElementById("soul").style.top = "5px";
    z = 1;
    audMove.play();
    audMove.currentTime = 0;
  }

  if ((event.key === "z" || event.key === "j") && z == 2) {
    document.getElementById("title").style.display = "none";
    audSelect.play();
    audSelect.currentTime = 0;
  }
  if ((event.key === "z" || event.key === "j") && z == 1) {
    alert("WHAT");
    audSelect.play();
    audSelect.currentTime = 0;
    bossMusic.play();
    bossMusic.currentTime = 0;
  }
});
