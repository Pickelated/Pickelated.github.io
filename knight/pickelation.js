let z = 1; //main menu z
let x = 1; //loadout menu x (top)
let soulx = 1; //default soul x pos
let souly = 1; //default soul y pos
let mainmenu = true;
let loadoutmenu = false;

const audMove = new Audio("assets/menumove.wav");
const audSelect = new Audio("assets/menuselect.wav");
const bossMusic = new Audio("assets/knife.mp3");

document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  console.log(`Key code: ${event.code}`);

  mainMenu();
  loadoutMenu();

});

function mainMenu() {
  if (mainmenu == true) {
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
    document.getElementById("loadout").style.display = "block";
    document.getElementById("soul").style.display = "inline";
    mainmenu = false;
    loadoutmenu = true;
    audSelect.play();
    audSelect.currentTime = 0;
    souly = 52; //px
    soulx = 230; //px
  }
  if ((event.key === "z" || event.key === "j") && z == 1) {
    alert("WHAT");
    audSelect.play();
    audSelect.currentTime = 0;
    bossMusic.play();
    bossMusic.currentTime = 0;
  }
}
}

function loadoutMenu() {
  if (loadoutmenu == true) {
    if (event.key === 'x' || event.key === 'k') {
      loadoutmenu = false;
      mainmenu = true;
      document.getElementById("title").style.display = "block";
      document.getElementById("loadout").style.display = "none";
      audSelect.play();
      audSelect.currentTime = 0;
    }

    if ((event.key === 'ArrowRight' || event.key === 'd') && x < 3) {
      soulx += 380;
      x++;
      document.getElementById("ssoul").style.left = soulx + "px";              // TOP menu header thingy kris susie ralsei
    }
    if ((event.key === 'ArrowLeft' || event.key === 'a') && x > 1) {
      soulx -= 380;
      x--;
      document.getElementById("ssoul").style.left = soulx + "px";
    }


  }
}