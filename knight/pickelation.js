let z = 1; //main menu z
let x = 1; //loadout menu x (top)
let xx = 1; //loadout equipmenut menu x (weap armor1 armor2)
let offset = 0; //equipmenu offset
let soulx = 1; //default soul x pos
let souly = 1; //default soul y pos
let menuing = false; //playerequip
let menuingg = false; //equip
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
    if ((event.key === 'x' || event.key === 'k') && menuing == false) { // exit loadout
      loadoutmenu = false;
      mainmenu = true;

      document.getElementById("title").style.display = "block";
      document.getElementById("loadout").style.display = "none";
      document.getElementById("ssoul").style.top = "53px";
      document.getElementById("ssoul").style.left = "92px";

      audSelect.play();
      audSelect.currentTime = 0;
    }
    else if ((event.key === 'x' || event.key === 'k') && menuing == true && x == 1) { //krs leave
      menuing = false;
      menuingg = false;
      souly -= 85 + offset;
      soulx -= 305;
      xx = 1;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";
      offset = 0;
      document.getElementById("krisThumb").style.filter = "grayscale(0)";
      document.getElementById("susieThumb").style.filter = "grayscale(0)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(0)";
    }
    else if ((event.key === 'x' || event.key === 'k') && menuing == true && x == 2) { //sus leave
      menuing = false;
      menuingg = false;
      souly -= 85 + offset;
      soulx += 75;
      xx = 1;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";
      offset = 0;
      document.getElementById("krisThumb").style.filter = "grayscale(0)";
      document.getElementById("susieThumb").style.filter = "grayscale(0)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(0)";
    }
    else if ((event.key === 'x' || event.key === 'k') && menuing == true && x == 3) { //ral leave
      menuing = false;
      menuingg = false;
      souly -= 85 + offset;
      soulx += 455;
      xx = 1;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";
      offset = 0;
      document.getElementById("krisThumb").style.filter = "grayscale(0)";
      document.getElementById("susieThumb").style.filter = "grayscale(0)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(0)";
    }

    if ((event.key === 'ArrowRight' || event.key === 'd') && x < 3 && menuing == false && menuingg == false) {
      soulx += 380;
      x++;
      audMove.play();
      audMove.currentTime = 0;
      document.getElementById("ssoul").style.left = soulx + "px";              // TOP menu header thingy kris susie ralsei
    }
    if ((event.key === 'ArrowLeft' || event.key === 'a') && x > 1 && menuing == false && menuingg == false) { // same ^
      soulx -= 380;
      x--;
      audMove.play();
      audMove.currentTime = 0;
      document.getElementById("ssoul").style.left = soulx + "px";
    }
    if ((event.key === "z" || event.key === "j") && menuingg == false && x == 1) { //krs select
      
      menuing = true;
      menuingg = true;
      document.getElementById("susieThumb").style.filter = "grayscale(1)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(1)";
      document.getElementById("playerHud").src="assets/krisHud.png";

      souly += 85;
      soulx += 305;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";

      audSelect.play();
      audSelect.currentTime = 0;
    }
    if ((event.key === "z" || event.key === "j") && menuingg == false && x == 2) { //sus select
      
      menuing = true;
      menuingg = true;
      document.getElementById("krisThumb").style.filter = "grayscale(1)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(1)";
      document.getElementById("playerHud").src="assets/susieHud.png";

      souly += 85;
      soulx -= 75;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";

      audSelect.play();
      audSelect.currentTime = 0;
    }
    if ((event.key === "z" || event.key === "j") && menuingg == false && x == 3) { //ral select
      
      menuing = true;
      menuingg = true;
      document.getElementById("krisThumb").style.filter = "grayscale(1)";
      document.getElementById("susieThumb").style.filter = "grayscale(1)";
      document.getElementById("playerHud").src="assets/ralseiHud.png";
    
      souly += 85;
      soulx -= 455;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";
      
      audSelect.play();
      audSelect.currentTime = 0;
    }

    equipmentMenu();
  }
}

function equipmentMenu() {
  if (menuingg == true) {
    if ((event.key === 'ArrowDown' || event.key === 's') && xx < 3) {
    souly += 49;
    offset += 49;
    document.getElementById("ssoul").style.top = souly + "px";
    xx++;

    audMove.play();
    audMove.currentTime = 0;
  }
  else if ((event.key === 'ArrowUp' || event.key === 'w') && xx > 1) {
    souly -= 49;
    offset -= 49;
    document.getElementById("ssoul").style.top = souly + "px";
    xx--;

    audMove.play();
    audMove.currentTime = 0;
  }
  }
}