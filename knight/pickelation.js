let z = 1; //main menu z
let x = 1; //loadout menu x (top)
let soulx = 1; //default soul x pos
let souly = 1; //default soul y pos
let menuing = false;
let mainmenu = true;
let loadoutmenu = false;

const audMove = new Audio("assets/menumove.wav");
const audSelect = new Audio("assets/menuselect.wav");
const bossMusic = new Audio("assets/knife.mp3");

document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  console.log(`Key code: ${event.code}`);

  loadoutMenu();
  mainMenu();

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
    document.getElementById("krisThumb").style.filter = "grayscale(0)";
    document.getElementById("susieThumb").style.filter = "grayscale(0)";
    document.getElementById("ralseiThumb").style.filter = "grayscale(0)";
    mainmenu = false;
    loadoutmenu = true;
    x = 1;
    audSelect.play();
    audSelect.currentTime = 0;
    souly = 53; //px
    soulx = 92; //px
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
    if ((event.key === 'x' || event.key === 'k') && menuing == false) {
      loadoutmenu = false;
      mainmenu = true;
      document.getElementById("title").style.display = "block";
      document.getElementById("loadout").style.display = "none";
      document.getElementById("ssoul").style.top = "53px";
      document.getElementById("ssoul").style.left = "92px";
      audSelect.play();
      audSelect.currentTime = 0;
    }
    else if ((event.key === 'x' || event.key === 'k') && menuing == true) {
      menuing = false;
      document.getElementById("krisThumb").style.filter = "grayscale(0)";
      document.getElementById("susieThumb").style.filter = "grayscale(0)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(0)";
    }

    if ((event.key === 'ArrowRight' || event.key === 'd') && x < 3 && menuing == false) {
      soulx += 380;
      x++;
      audMove.play();
      audMove.currentTime = 0;
      document.getElementById("ssoul").style.left = soulx + "px";              // TOP menu header thingy kris susie ralsei
    }
    if ((event.key === 'ArrowLeft' || event.key === 'a') && x > 1 && menuing == false) {
      soulx -= 380;
      x--;
      audMove.play();
      audMove.currentTime = 0;
      document.getElementById("ssoul").style.left = soulx + "px";
    }
    if ((event.key === "z" || event.key === "j") && x == 1) { //krs
      
      menuing = true;
      document.getElementById("susieThumb").style.filter = "grayscale(1)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(1)";

      souly += 300;
      document.getElementById("ssoul").style.top = souly + "px";

      audSelect.play();
      audSelect.currentTime = 0;
    }
    if ((event.key === "z" || event.key === "j") && x == 2) { //sus
      
      menuing = true;
      document.getElementById("krisThumb").style.filter = "grayscale(1)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(1)";

      audSelect.play();
      audSelect.currentTime = 0;
    }
    if ((event.key === "z" || event.key === "j") && x == 3) { //ral
      
      menuing = true;
      document.getElementById("krisThumb").style.filter = "grayscale(1)";
      document.getElementById("susieThumb").style.filter = "grayscale(1)";

      audSelect.play();
      audSelect.currentTime = 0;
    }

  }
}