let z = 1; //main menu z
let x = 1; //loadout menu x (top)
let xx = 1; //loadout equipmenut menu x (weap armor1 armor2)
let offset = 0; //equipmenu offset
let yoffset = 0; //guess
let xoffset = 0; // guess
let soulx = 1; //default soul x pos
let souly = 1; //default soul y pos
let menuing = false; //playerequip
let menuingg = false; //equip
let menuinggg = false; //equip equip
let mainmenu = true;
let loadoutmenu = false;

const audMove = new Audio("assets/menumove.wav");
const audSelect = new Audio("assets/menuselect.wav");
const bossMusic = new Audio("assets/knife.mp3");


class charEquip {

  constructor(weapon, armor1, armor2) {
    this.weapon = weapon;
    this.armor1 = armor1;
    this.armor2 = armor2;
  }

  setWeapon(weapon) {
    this.weapon = weapon;
  }

  setArmor1(armor1) {
    this.armor1 = armor1;
  }

  setArmor2(armor2) {
    this.armor2 = armor2;
  }

  returnWeapon() {
    return this.weapon;
  }

  returnArmor1() {
    return this.armor1;
  }

  returnArmor2() {
    return this.armor2;
  }
}

class equipment {

  constructor(name, atk, def, mag) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.mag = mag;
  }

  returnName() {
    return this.name;
  }

  returnAtk() {
    return this.atk;
  }

  returnDef() {
    return this.def;
  }

  returnMag() {
    return this.mag;
  }
}

const placeholder = new equipment("...", 0, 0, 0);
const WoodBlade = new equipment("WoodBlade", 1, 0, 0);
const ManeAx = new equipment("ManeAx", 0, 0, 0);
const RedScarf = new equipment("RedScarf", 0, 0, 0);

const kris = new charEquip(WoodBlade, placeholder, placeholder);
const susie = new charEquip(ManeAx, placeholder, placeholder);
const ralsei = new charEquip(RedScarf, placeholder, placeholder);

const Spookysword = new equipment("Spookysword", 2, 0 ,0);
const BounceBlade = new equipment("BounceBlade", 2, 1, 0);
const Trefoil = new equipment("Trefoil", 4, 0, 0);
const MechaSaber = new equipment("MechaSaber", 4, 0, 0);
const Saber10 = new equipment("Saber10", 6, 0, 0);
const TwistedSwd = new equipment("TwistedSwd", 16, 0, 0); //odd

const BraveAx = new equipment("BraveAx", 2, 0, 0);
const AutoAxe = new equipment("AutoAxe", 0, 0, 0);
const Devilsknife = new equipment("Devilsknife", 5, 0, 4); // -10 tp rude buster
const ToxicAxe = new equipment("ToxicAxe", 6, 0, 0); //odd

const Ragger = new equipment("Ragger", 2, 0, 0);
const DaintyScarf = new equipment("DaintyScarf", 0, 0, 2);
const FiberScarf = new equipment("FiberScarf", 2, 0, 2);
const FlexScarf = new equipment("FlexScarf", 4, 0, 1);
const Ragger2 = new equipment("Ragger2", 5, 0, -1);
const PuppetScarf = new equipment("PuppetScarf", 10, 0, -6); //odd

const Mannequin = new equipment("Mannequin", 0, 0, 0); // ???
const AmberCard = new equipment("AmberCard", 0, 1, 0);
const SpikeBand = new equipment("SpikeBand", 2, 1, 0);
const DiceBrace = new equipment("DiceBrace", 0, 2, 0);
const GlowWrist = new equipment("GlowWrist", 0, 2, 0);
const SilverWatch = new equipment("SilverWatch", 0, 2, 0); // +10% graze time buff
const SilverCard = new equipment("SilverCard", 0, 2, 0); // +$
const WhiteRibbon = new equipment("WhiteRibbon", 0, 2, 0);
const PinkRibbon = new equipment("PinkRibbon", 0, 1, 0); // +44% graze area, -20% graze tp
const TwinRibbon = new equipment("TwinRibbon", 0, 3, 0); // +56.25% graze area, -25% graze tp
const BlueRibbon = new equipment("BlueRibbon", 0, 1, 1);
const IronShackle = new equipment("IronShackle", 1, 2, 0);
const MouseToken = new equipment("MouseToken", 0, 1, 2);
const FrayedBowtie = new equipment("FrayedBowtie", 1, 1, 1); // ???
const BShotBowtie = new equipment("B.ShotBowtie", 0, 2, 1);
const LodeStone = new equipment("LodeStone", 0, 2, 0); // +5% tp
const ChainMail = new equipment("ChainMail", 0, 3, 0);
const GingerGuard = new equipment("GingerGuard", 0, 3, 0);
const RoyalPin = new equipment("RoyalPin", 0, 3, 1);
const Jevilstail = new equipment("Jevilstail", 2, 2, 2);
const TensionBow = new equipment("TensionBow", 0, 2, 0); // +10% graze tp
const TennaTie = new equipment("TennaTie", 0, 5, -2);
const Dealmaker = new equipment("Dealmaker", 0, 5, 5); // +$$$
const ShadowMantle = new equipment("ShadowMantle", 0, 3, 0); // -66% dark/star dmg

let arrKrisWeapon = [[]];
let arrSusieWeapon = [[]];
let arrRalseiWeapon = [[]];
let arrEquipment = [[],[],[]];

arrKrisWeapon[0][0] = WoodBlade;
arrKrisWeapon[0][1] = Spookysword;
arrKrisWeapon[0][2] = BounceBlade;
arrKrisWeapon[0][3] = Trefoil;
arrKrisWeapon[0][4] = MechaSaber;
arrKrisWeapon[0][5] = Saber10;
arrKrisWeapon[0][6] = TwistedSwd;

arrSusieWeapon[0][0] = ManeAx;
arrSusieWeapon[0][1] = BraveAx;
arrSusieWeapon[0][2] = AutoAxe;
arrSusieWeapon[0][3] = Devilsknife;
arrSusieWeapon[0][4] = ToxicAxe;

arrRalseiWeapon[0][0] = RedScarf;
arrRalseiWeapon[0][1] = Ragger;
arrRalseiWeapon[0][2] = DaintyScarf;
arrRalseiWeapon[0][3] = FiberScarf;
arrRalseiWeapon[0][4] = FlexScarf;
arrRalseiWeapon[0][5] = Ragger2;
arrRalseiWeapon[0][6] = PuppetScarf;

arrEquipment[0][0] = Mannequin;
arrEquipment[0][1] = AmberCard;
arrEquipment[0][2] = SpikeBand;
arrEquipment[0][3] = DiceBrace;
arrEquipment[0][4] = GlowWrist;
arrEquipment[0][5] = SilverWatch;
arrEquipment[0][6] = SilverCard;
arrEquipment[0][7] = IronShackle;

arrEquipment[1][0] = WhiteRibbon;
arrEquipment[1][1] = PinkRibbon;
arrEquipment[1][2] = TwinRibbon;
arrEquipment[1][3] = BlueRibbon;
arrEquipment[1][4] = MouseToken;
arrEquipment[1][5] = FrayedBowtie;
arrEquipment[1][6] = BShotBowtie;
arrEquipment[1][7] = LodeStone;

arrEquipment[2][0] = ChainMail;
arrEquipment[2][1] = GingerGuard;
arrEquipment[2][2] = RoyalPin;
arrEquipment[2][3] = Jevilstail;
arrEquipment[2][4] = TensionBow;
arrEquipment[2][5] = TennaTie;
arrEquipment[2][6] = Dealmaker;
arrEquipment[2][7] = ShadowMantle;

function showKrisWeapons() {
  resetEquipment();
  document.getElementsByClassName("reset").innerHTML = "...";
  for (let i = 0; i < arrKrisWeapon[0].length; i++) {
    document.getElementById("0" + i).innerHTML = arrKrisWeapon[0][i].returnName();
  }
}

function showSusieWeapons() {
  resetEquipment();
  document.getElementsByClassName("reset").innerHTML = "...";
  for (let i = 0; i < arrSusieWeapon[0].length; i++) {
    document.getElementById("0" + i).innerHTML = arrSusieWeapon[0][i].returnName();
  }
}

function showRalseiWeapons() {
  resetEquipment();
  document.getElementsByClassName("reset").innerHTML = "...";
  for (let i = 0; i < arrRalseiWeapon[0].length; i++) {
    document.getElementById("0" + i).innerHTML = arrRalseiWeapon[0][i].returnName();
  }
}

function showEquipment() {
  resetEquipment();
  for (let i = 0; i < arrEquipment.length; i++) {
    for (let j = 0; j < arrEquipment[i].length; j++) {
      document.getElementById(i.toString() + j).innerHTML = arrEquipment[i][j].returnName();
    }
  }
}

function resetEquipment() {
  const reset = document.getElementsByClassName("reset");
  for (let l = 0; l < reset.length; l++) {
    reset[l].innerHTML = "...";
  }
}


function krisSetEquipmentNames() {
  document.getElementById("weapon").innerHTML = kris.returnWeapon().returnName();
  document.getElementById("armor1").innerHTML = kris.returnArmor1().returnName();
  document.getElementById("armor2").innerHTML = kris.returnArmor2().returnName();
}

function susieSetEquipmentNames() {
  document.getElementById("weapon").innerHTML = susie.returnWeapon().returnName();
  document.getElementById("armor1").innerHTML = susie.returnArmor1().returnName();
  document.getElementById("armor2").innerHTML = susie.returnArmor2().returnName();
}

function ralseiSetEquipmentNames() {
  document.getElementById("weapon").innerHTML = ralsei.returnWeapon().returnName();
  document.getElementById("armor1").innerHTML = ralsei.returnArmor1().returnName();
  document.getElementById("armor2").innerHTML = ralsei.returnArmor2().returnName();
}

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
    equipmentMenu();
    if ((event.key === 'x' || event.key === 'k') && menuing == false) { // exit loadout
      loadoutmenu = false;
      mainmenu = true;

      document.getElementById("title").style.display = "block";
      document.getElementById("loadout").style.display = "none";
      document.getElementById("ssoul").style.top = "53px";
      document.getElementById("ssoul").style.left = "92px";

      document.getElementById("playerHud").src="assets/krisHud.png";
      document.getElementById("weapon").innerHTML = "...";
      document.getElementById("armor1").innerHTML = "...";
      document.getElementById("armor2").innerHTML = "...";

      audSelect.play();
      audSelect.currentTime = 0;
    }
    else if ((event.key === 'x' || event.key === 'k') && menuing == true && menuingg == false && x == 1) { //krs leave
      menuing = false;
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
    else if ((event.key === 'x' || event.key === 'k') && menuing == true && menuingg == false && x == 2) { //sus leave
      menuing = false;
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
    else if ((event.key === 'x' || event.key === 'k') && menuing == true && menuingg == false && x == 3) { //ral leave
      menuing = false;
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

    if ((event.key === 'ArrowRight' || event.key === 'd') && x < 3 && menuing == false) {
      soulx += 380;
      x++;
      audMove.play();
      audMove.currentTime = 0;
      document.getElementById("ssoul").style.left = soulx + "px";              // TOP menu header thingy kris susie ralsei
    }
    if ((event.key === 'ArrowLeft' || event.key === 'a') && x > 1 && menuing == false) { // same ^
      soulx -= 380;
      x--;
      audMove.play();
      audMove.currentTime = 0;
      document.getElementById("ssoul").style.left = soulx + "px";
    }
    if ((event.key === "z" || event.key === "j") && menuing == false && x == 1) { //krs select
      
      menuing = true;
      document.getElementById("susieThumb").style.filter = "grayscale(1)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(1)";
      document.getElementById("playerHud").src="assets/krisHud.png";

      souly += 85;
      soulx += 305;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";

      krisSetEquipmentNames();

      audSelect.play();
      audSelect.currentTime = 0;
    }
    if ((event.key === "z" || event.key === "j") && menuing == false && x == 2) { //sus select
      
      menuing = true;
      document.getElementById("krisThumb").style.filter = "grayscale(1)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(1)";
      document.getElementById("playerHud").src="assets/susieHud.png";

      souly += 85;
      soulx -= 75;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";

      susieSetEquipmentNames();

      audSelect.play();
      audSelect.currentTime = 0;
    }
    if ((event.key === "z" || event.key === "j") && menuing == false && x == 3) { //ral select
      
      menuing = true;
      document.getElementById("krisThumb").style.filter = "grayscale(1)";
      document.getElementById("susieThumb").style.filter = "grayscale(1)";
      document.getElementById("playerHud").src="assets/ralseiHud.png";
    
      souly += 85;
      soulx -= 455;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";

      ralseiSetEquipmentNames();
      
      audSelect.play();
      audSelect.currentTime = 0;
    }
  }
}

function equipmentMenu() {
  if (menuing == true && menuingg == false) {
    equipmentMenuMenu();
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

function equipmentMenuMenu() {
  if (menuing == true && menuingg == false) {
    if (event.key === 'z' || event.key === 'j') {
      if (xx == 1 && x == 1) {
        showKrisWeapons();
        equipmentMenuMenuing();
      }
      else if (xx == 1 && x == 2) {
        showSusieWeapons();
        equipmentMenuMenuing();
      }
      else if (xx == 1 && x == 3) {
        showRalseiWeapons();
        equipmentMenuMenuing();
      }
      if (!(xx == 1)) {
        showEquipment();
        equipmentMenuMenuing();
      }
    }
  }
}

function equipmentMenuMenuing() {
  menuing = false;
  menuingg = true;
  souly += 77 - offset;
  yoffset += 200;
  soulx -= 598;
  xoffset += 200;
  document.getElementById("ssoul").style.top = souly + "px";
  document.getElementById("ssoul").style.left = soulx + "px";
}


document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  console.log(`Key code: ${event.code}`);

  loadoutMenu();
  mainMenu();

});