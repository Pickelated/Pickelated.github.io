let z = 1; //main menu z
let mainsouly = 5; //main Souly 
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
let arrHorizontal = 0; // [0][]
let arrVertical = 0; // [][0]
let arrStat = 0; // ARR STAT INVETORY
let check = 0; //HATE
let sfxcheck = true; //sfx check WHATT
let musiccheck = true; //guess
let shiftexit = false;
let mainmenu = true;
let playmenu = false;
let loadoutmenu = false;
let inventorymenu = false;

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

class consumable {

  constructor(name, desc, stat) {
    this.name = name;
    this.desc = desc;
    this.stat = stat;
  }

  returnName() {
    return this.name;
  }

  returnDesc() {
    return this.desc;
  }

  returnStat() {
    return this.stat;
  }
}

const placeholder = new equipment("...", 0, 0, 0);
const WoodBlade = new equipment("WoodBlade", 1, 0, 0);
const ManeAx = new equipment("ManeAx", 0, 0, 0);
const RedScarf = new equipment("RedScarf", 0, 0, 0);

const kris = new charEquip(WoodBlade, placeholder, placeholder);
const susie = new charEquip(ManeAx, placeholder, placeholder);
const ralsei = new charEquip(RedScarf, placeholder, placeholder);

let inventory = [];

const Spookysword = new equipment("Spookysword", 2, 0 ,0);
const BounceBlade = new equipment("BounceBlade", 2, 1, 0);
const Trefoil = new equipment("Trefoil", 4, 0, 0);
const MechaSaber = new equipment("MechaSaber", 4, 0, 0);
const Saber10 = new equipment("Saber10", 6, 0, 0);
const TwistedSwd = new equipment("TwistedSwd", 16, 0, 0); 

const BraveAx = new equipment("BraveAx", 2, 0, 0);
const AutoAxe = new equipment("AutoAxe", 4, 0, 0);
const Devilsknife = new equipment("Devilsknife", 5, 0, 4); // -10 tp rude buster
const ToxicAxe = new equipment("ToxicAxe", 6, 0, 0); 

const Ragger = new equipment("Ragger", 2, 0, 0);
const DaintyScarf = new equipment("DaintyScarf", 0, 0, 2);
const FiberScarf = new equipment("FiberScarf", 2, 0, 2);
const FlexScarf = new equipment("FlexScarf", 4, 0, 1);
const Ragger2 = new equipment("Ragger2", 5, 0, -1);
const PuppetScarf = new equipment("PuppetScarf", 10, 0, -6); 

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
const MouseToken = new equipment("MouseToken", 0, 1, 2); //unused but IDCCCCCCCC makes menu Look Nice
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

const LightCandy = new consumable("LightCandy", "HP: +120", 120);
const DarkCandy = new consumable("DarkCandy", "HP: +40", 40);
const Darkburger = new consumable("Darkburger", "HP: +70", 70);
const CDBagel = new consumable("CDBagel", "HP: +80", 80);
const ButlerJuice = new consumable("ButlerJuice", "HP: +100", 100);
const FlatSoda = new consumable("FlatSoda", "HP: +20", 20);
const TVSlop = new consumable("TVSlop", "HP: +80", 80);
const TVDinner = new consumable("TVDinner", "HP: +100", 100);
const DeluxeDinner = new consumable("DeluxeDinner", "HP: +140", 140);
const SpaghettiCode = new consumable("SpaghettiCode", "HP: +30 to all", 30);
const ClubsSandwich = new consumable("ClubsSandwich", "HP: +70 to all", 70);
const ExecBuffet = new consumable("ExecBuffet", "HP: +100 to all", 100);
const TopCake = new consumable("TopCake", "HP: +160 to all", 160);
const TensionBit = new consumable("TensionBit", "TP: +32%", 32);
const TensionGem = new consumable("TensionGem", "TP: +50%", 50);
const TensionMax = new consumable("TensionMax", "TP: +100%", 100);
const ReviveDust = new consumable("ReviveDust", "Heals all downed to 25%", 10); //+10 hp alive
const ReviveMint = new consumable("ReviveMint", "Heals downed to max", 0.5); // 50% of max hp alive

const arrKrisWeapon = [[]];
const arrSusieWeapon = [[]];
const arrRalseiWeapon = [[]];
const arrEquipment = [[],[],[]];

const arrConsumables = [[],[],[]];

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

arrConsumables[0][0] = LightCandy;
arrConsumables[0][1] = DarkCandy;
arrConsumables[0][2] = Darkburger;
arrConsumables[0][3] = CDBagel;
arrConsumables[0][4] = ButlerJuice;
arrConsumables[0][5] = FlatSoda;

arrConsumables[1][0] = TVSlop;
arrConsumables[1][1] = TVDinner;
arrConsumables[1][2] = DeluxeDinner;
arrConsumables[1][3] = SpaghettiCode;
arrConsumables[1][4] = ClubsSandwich;
arrConsumables[1][5] = ExecBuffet;

arrConsumables[2][0] = TopCake;
arrConsumables[2][1] = TensionBit;
arrConsumables[2][2] = TensionGem;
arrConsumables[2][3] = TensionMax;
arrConsumables[2][4] = ReviveDust;
arrConsumables[2][5] = ReviveMint;

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

function updateKrisStats() {
  document.getElementById("playerAtk").innerHTML = 
  "ATK: " + (kris.returnWeapon().returnAtk() + kris.returnArmor1().returnAtk() + kris.returnArmor2().returnAtk() + 14);
  document.getElementById("playerDef").innerHTML = 
  "DEF: " + (kris.returnWeapon().returnDef() + kris.returnArmor1().returnDef() + kris.returnArmor2().returnDef() + 2);
  document.getElementById("playerMag").innerHTML = 
  "MAG: " + (kris.returnWeapon().returnMag() + kris.returnArmor1().returnMag() + kris.returnArmor2().returnMag());

}

function updateSusieStats() {
  document.getElementById("playerAtk").innerHTML = 
  "ATK: " + (susie.returnWeapon().returnAtk() + susie.returnArmor1().returnAtk() + susie.returnArmor2().returnAtk() + 18);
  document.getElementById("playerDef").innerHTML = 
  "DEF: " + (susie.returnWeapon().returnDef() + susie.returnArmor1().returnDef() + susie.returnArmor2().returnDef() + 2);
  document.getElementById("playerMag").innerHTML = 
  "MAG: " + (susie.returnWeapon().returnMag() + susie.returnArmor1().returnMag() + susie.returnArmor2().returnMag() + 2);
}

function updateRalseiStats() {
  document.getElementById("playerAtk").innerHTML = 
  "ATK: " + (ralsei.returnWeapon().returnAtk() + ralsei.returnArmor1().returnAtk() + ralsei.returnArmor2().returnAtk() + 12);
  document.getElementById("playerDef").innerHTML = 
  "DEF: " + (ralsei.returnWeapon().returnDef() + ralsei.returnArmor1().returnDef() + ralsei.returnArmor2().returnDef() + 2);
  document.getElementById("playerMag").innerHTML = 
  "MAG: " + (ralsei.returnWeapon().returnMag() + ralsei.returnArmor1().returnMag() + ralsei.returnArmor2().returnMag() + 11);

}

function updateItemStats() {
  if (xx > 1) {
    if ((arrEquipment[arrHorizontal][arrVertical].returnAtk() == 0)) {
      document.getElementById("itemAtk").style.display = "none";
    }
    else {
      document.getElementById("itemAtk").style.display = "block";
      document.getElementById("itemAtk").innerHTML = "ATK: " + (arrEquipment[arrHorizontal][arrVertical].returnAtk());
    }
    if ((arrEquipment[arrHorizontal][arrVertical].returnDef() == 0)) {
      document.getElementById("itemDef").style.display = "none";
    }
    else {
      document.getElementById("itemDef").style.display = "block";
      document.getElementById("itemDef").innerHTML = "DEF: " + (arrEquipment[arrHorizontal][arrVertical].returnDef());
    }
    if ((arrEquipment[arrHorizontal][arrVertical].returnMag() == 0)) {
      document.getElementById("itemMag").style.display = "none";
    }
    else {
      document.getElementById("itemMag").style.display = "block";
      document.getElementById("itemMag").innerHTML = "MAG: " + (arrEquipment[arrHorizontal][arrVertical].returnMag());
    }
  }
  else {
    if (x == 1) {
      if ((arrKrisWeapon[arrHorizontal][arrVertical].returnAtk() == 0)) {
      document.getElementById("itemAtk").style.display = "none";
      }
      else {
        document.getElementById("itemAtk").style.display = "block";
        document.getElementById("itemAtk").innerHTML = "ATK: " + (arrKrisWeapon[arrHorizontal][arrVertical].returnAtk());
      }
      if ((arrKrisWeapon[arrHorizontal][arrVertical].returnDef() == 0)) {
        document.getElementById("itemDef").style.display = "none";
      }
      else {
        document.getElementById("itemDef").style.display = "block";
        document.getElementById("itemDef").innerHTML = "DEF: " + (arrKrisWeapon[arrHorizontal][arrVertical].returnDef());
      }
      if ((arrKrisWeapon[arrHorizontal][arrVertical].returnMag() == 0)) {
        document.getElementById("itemMag").style.display = "none";
      }
      else {
        document.getElementById("itemMag").style.display = "block";
        document.getElementById("itemMag").innerHTML = "MAG: " + (arrKrisWeapon[arrHorizontal][arrVertical].returnMag());
      }
    }
    else if (x == 2) {
      if ((arrSusieWeapon[arrHorizontal][arrVertical].returnAtk() == 0)) {
      document.getElementById("itemAtk").style.display = "none";
      }
      else {
        document.getElementById("itemAtk").style.display = "block";
        document.getElementById("itemAtk").innerHTML = "ATK: " + (arrSusieWeapon[arrHorizontal][arrVertical].returnAtk());
      }
      if ((arrSusieWeapon[arrHorizontal][arrVertical].returnDef() == 0)) {
        document.getElementById("itemDef").style.display = "none";
      }
      else {
        document.getElementById("itemDef").style.display = "block";
        document.getElementById("itemDef").innerHTML = "DEF: " + (arrSusieWeapon[arrHorizontal][arrVertical].returnDef());
      }
      if ((arrSusieWeapon[arrHorizontal][arrVertical].returnMag() == 0)) {
        document.getElementById("itemMag").style.display = "none";
      }
      else {
        document.getElementById("itemMag").style.display = "block";
        document.getElementById("itemMag").innerHTML = "MAG: " + (arrSusieWeapon[arrHorizontal][arrVertical].returnMag());
      }
    }
    else if (x == 3) {
      if ((arrRalseiWeapon[arrHorizontal][arrVertical].returnAtk() == 0)) {
      document.getElementById("itemAtk").style.display = "none";
      }
      else {
        document.getElementById("itemAtk").style.display = "block";
        document.getElementById("itemAtk").innerHTML = "ATK: " + (arrRalseiWeapon[arrHorizontal][arrVertical].returnAtk());
      }
      if ((arrRalseiWeapon[arrHorizontal][arrVertical].returnDef() == 0)) {
        document.getElementById("itemDef").style.display = "none";
      }
      else {
        document.getElementById("itemDef").style.display = "block";
        document.getElementById("itemDef").innerHTML = "DEF: " + (arrRalseiWeapon[arrHorizontal][arrVertical].returnDef());
      }
      if ((arrRalseiWeapon[arrHorizontal][arrVertical].returnMag() == 0)) {
        document.getElementById("itemMag").style.display = "none";
      }
      else {
        document.getElementById("itemMag").style.display = "block";
        document.getElementById("itemMag").innerHTML = "MAG: " + (arrRalseiWeapon[arrHorizontal][arrVertical].returnMag());
      }
    }
  }
}

function resetItemStats() {
  document.getElementById("itemAtk").style.display = "none";
  document.getElementById("itemDef").style.display = "none";
  document.getElementById("itemMag").style.display = "none";
}

function mainMenu() {
  if (mainmenu == true) {
    if (((event.key === 'ArrowDown' || event.key === 's') && z < 5)) { // menu nav
      mainsouly += 45;
      document.getElementById("soul").style.top = mainsouly + "px";
      z++;
      audMove.play();
      audMove.currentTime = 0;
    }
    else if (((event.key === 'ArrowUp' || event.key === 'w') && z > 1)) {
      mainsouly -= 45;
      document.getElementById("soul").style.top = mainsouly + "px";
      z--;
      audMove.play();
      audMove.currentTime = 0;
    }

    if (event.key === "z" || event.key === "j") {
      if (z == 2) { //loadout
        document.getElementById("title").style.display = "none";
        document.getElementById("loadout").style.display = "block";

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
        krisSetEquipmentNames();
      }
      else if (z == 1) { //play buton. it get real
        // alert("WHAT");
        mainmenu = false;
        playmenu = true;

        document.getElementById("title").style.display = "none";
        document.getElementById("play").style.display = "flex";

        audSelect.play();
        audSelect.currentTime = 0;

        bossMusic.loop = true;
        bossMusic.play();
        bossMusic.currentTime = 0;
      }
      else if (z == 4) { //sfx
        if (sfxcheck) {
          audMove.src = "";
          audSelect.src = "";
          sfxcheck = false;
          document.getElementById("sfx").innerHTML = "sfx: off";
        }
        else {
          audMove.src = "assets/menumove.wav";
          audSelect.src = "assets/menuselect.wav";
          audSelect.play();
          audSelect.currentTime = 0;
          sfxcheck = true;
          document.getElementById("sfx").innerHTML = "sfx: on";
        }
      }
      else if (z == 5) { //music
        if (musiccheck) {
          bossMusic.src = "";
          audSelect.play();
          audSelect.currentTime = 0;
          musiccheck = false;
          document.getElementById("music").innerHTML = "music: off";
        }
        else {
          bossMusic.src = "assets/knife.mp3";
          audSelect.play();
          audSelect.currentTime = 0;
          musiccheck = true;
          document.getElementById("music").innerHTML = "music: on";
        }
      }
      else if (z == 3) { // inventory
        document.getElementById("title").style.display = "none";
        document.getElementById("inventory").style.display = "block";

        soulx = 147;
        souly = 11;

        mainmenu = false;
        inventorymenu = true;

        document.getElementById("consumableStat").innerHTML = arrConsumables[arrHorizontal][arrVertical].returnDesc();
        
        audSelect.play();
        audSelect.currentTime = 0;
      }
    }
  }
}

function playMenu() {
  if (playmenu == true) {
    if (shiftexit == true && event.key == "Q") { //quit

      document.getElementById("play").style.display = "none";
      document.getElementById("title").style.display = "block";

      mainmenu = true;
      playmenu = false;

      bossMusic.pause();
      bossMusic.currentTime = 0;
      
      audSelect.play();
      audSelect.currentTime = 0;

    }
  }
}

function inventoryMenu() {
  if (inventorymenu == true) {
    if ((event.key == "ArrowUp" || event.key == "w") && arrVertical > 0) {
      souly -= 45;
      document.getElementById("sssoul").style.top = souly + "px";

      arrVertical--;

      document.getElementById("consumableStat").innerHTML = arrConsumables[arrHorizontal][arrVertical].returnDesc();

      audMove.play();
      audMove.currentTime = 0;
    }
    if ((event.key == "ArrowDown" || event.key == "s") && arrVertical < 5) {
      souly += 45;
      document.getElementById("sssoul").style.top = souly + "px";

      arrVertical++;

      document.getElementById("consumableStat").innerHTML = arrConsumables[arrHorizontal][arrVertical].returnDesc();

      audMove.play();
      audMove.currentTime = 0;
    }
    if ((event.key == "ArrowLeft" || event.key == "a") && arrHorizontal > 0) {
      soulx -= 337;
      document.getElementById("sssoul").style.left = soulx + "px";

      arrHorizontal--;

      document.getElementById("consumableStat").innerHTML = arrConsumables[arrHorizontal][arrVertical].returnDesc();

      audMove.play();
      audMove.currentTime = 0;
    }
    if ((event.key == "ArrowRight" || event.key == "d") && arrHorizontal < 2) {
      soulx += 337;
      document.getElementById("sssoul").style.left = soulx + "px";

      arrHorizontal++;

      document.getElementById("consumableStat").innerHTML = arrConsumables[arrHorizontal][arrVertical].returnDesc();

      audMove.play();
      audMove.currentTime = 0;
    }
    if (event.key == "z" || event.key == "j") {
      if (arrStat < 12) {
        inventory[arrStat] = arrConsumables[arrHorizontal][arrVertical];

        document.getElementById("inv" + arrStat).innerHTML = inventory[arrStat].returnName();
        arrStat++;

        audSelect.play();
        audSelect.currentTime = 0;
      }
    }
    if (event.key == "x" || event.key == "k") {
      arrHorizontal = 0;
      arrVertical = 0;

      mainmenu = true;
      inventorymenu = false;
      document.getElementById("title").style.display = "block";
      document.getElementById("inventory").style.display = "none";

      document.getElementById("sssoul").style.top = 11 + "px";
      document.getElementById("sssoul").style.left = 147 + "px";

      audSelect.play();
      audSelect.currentTime = 0;
    }
    if (event.key == "c" || event.key == "l") {
      for (let i = 0; i < inventory.length; i++) {
        document.getElementById("inv" + i).innerHTML = "..."
      }
      inventory = [];
      arrStat = 0;

      audSelect.play();
      audSelect.currentTime = 0;
    }
  }
}

function loadoutMenu() {
  if (loadoutmenu == true) {
    if ((event.key === 'x' || event.key === 'k') && menuing == false && menuingg == false) { // exit loadout
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
      resetEquipment();
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
      resetEquipment();
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
      resetEquipment();
    }

    equipmentMenuingMenu();
    equipmentMenu();
    
    if ((event.key === 'ArrowRight' || event.key === 'd') && x < 3 && menuing == false && menuingg == false) {
      soulx += 380;
      x++;
      audMove.play();
      audMove.currentTime = 0;
      document.getElementById("ssoul").style.left = soulx + "px";              // TOP menu header thingy kris susie ralsei
      if (x == 2) {
        susieSetEquipmentNames();
        document.getElementById("playerHud").src="assets/susieHud.png";
        updateSusieStats();
      }
      else if (x == 3) {
        ralseiSetEquipmentNames();
        document.getElementById("playerHud").src="assets/ralseiHud.png";
        updateRalseiStats();
      }
    }
    if ((event.key === 'ArrowLeft' || event.key === 'a') && x > 1 && menuing == false && menuingg == false) { // same ^
      soulx -= 380;
      x--;
      audMove.play();
      audMove.currentTime = 0;
      document.getElementById("ssoul").style.left = soulx + "px";
      if (x == 1) {
        krisSetEquipmentNames();
        document.getElementById("playerHud").src="assets/krisHud.png";
        updateKrisStats();
      }
      else if (x == 2) {
        susieSetEquipmentNames();
        document.getElementById("playerHud").src="assets/susieHud.png";
        updateSusieStats();
      }
    }
    if ((event.key === "z" || event.key === "j") && menuing == false && menuingg == false && x == 1) { //krs select
      
      menuing = true;
      document.getElementById("susieThumb").style.filter = "grayscale(1)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(1)";
      

      souly += 85;
      soulx += 305;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";

      audSelect.play();
      audSelect.currentTime = 0;
    }
    if ((event.key === "z" || event.key === "j") && menuing == false && menuingg == false &&  x == 2) { //sus select
      
      menuing = true;
      document.getElementById("krisThumb").style.filter = "grayscale(1)";
      document.getElementById("ralseiThumb").style.filter = "grayscale(1)";
      

      souly += 85;
      soulx -= 75;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";


      audSelect.play();
      audSelect.currentTime = 0;
    }
    if ((event.key === "z" || event.key === "j") && menuing == false && menuingg == false &&  x == 3) { //ral select
      
      menuing = true;
      document.getElementById("krisThumb").style.filter = "grayscale(1)";
      document.getElementById("susieThumb").style.filter = "grayscale(1)";
    
      souly += 85;
      soulx -= 455;
      document.getElementById("ssoul").style.top = souly + "px";
      document.getElementById("ssoul").style.left = soulx + "px";

      audSelect.play();
      audSelect.currentTime = 0;
    }

    if (event.key === "c" || event.key === "l") { // reset
      if (x == 1) {
        kris.setWeapon(WoodBlade);
        kris.setArmor1(placeholder);
        kris.setArmor2(placeholder);
        krisSetEquipmentNames();
        updateKrisStats();
      }
      else if (x == 2) {
        susie.setWeapon(ManeAx);
        susie.setArmor1(placeholder);
        susie.setArmor2(placeholder);
        susieSetEquipmentNames();
        updateSusieStats();
      }
      else if (x == 3) {
        ralsei.setWeapon(RedScarf);
        ralsei.setArmor1(placeholder);
        ralsei.setArmor2(placeholder);
        ralseiSetEquipmentNames();
        updateRalseiStats();
      }
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
    if (check == 0) {
      if (event.key === 'z' || event.key === 'j') {
        if (xx == 1 && x == 1) {
          showKrisWeapons();
          equipmentMenuMenuing();
          document.getElementById("weapon").style.color = "yellow";
          audSelect.play();
          audSelect.currentTime = 0;
        }
        else if (xx == 1 && x == 2) {
          showSusieWeapons();
          equipmentMenuMenuing();
          document.getElementById("weapon").style.color = "yellow";
          audSelect.play();
          audSelect.currentTime = 0;
        }
        else if (xx == 1 && x == 3) {
          showRalseiWeapons();
          equipmentMenuMenuing();
          document.getElementById("weapon").style.color = "yellow";
          audSelect.play();
          audSelect.currentTime = 0;
        }
        if (!(xx == 1)) {
          showEquipment();
          equipmentMenuMenuing();
          audSelect.play();
          audSelect.currentTime = 0;

          if (xx == 2) {
            document.getElementById("armor1").style.color = "yellow";
          }
          else if (xx == 3) {
            document.getElementById("armor2").style.color = "yellow";
          }
        }
      }
    }
    else if (check == 1) {
      check = 0;
    }
  }
}

function equipmentMenuMenuing() {
    menuing = false;
    menuingg = true;
    souly += 161 - offset;
    yoffset += 161;
    soulx -= 292;
    xoffset -= 292;
    document.getElementById("ssoul").style.top = souly + "px";
    document.getElementById("ssoul").style.left = soulx + "px";
}

function equipmentMenuingMenu() {
  if (menuingg == true) {
    if ((event.key === 'ArrowDown' || event.key === 's') && arrVertical < 7) { // menu nav
      souly += 42;
      yoffset += 42;
      document.getElementById("ssoul").style.top = souly + "px";
      arrVertical++;
      updateItemStats();
      audMove.play();
      audMove.currentTime = 0;
    }
    else if ((event.key === 'ArrowUp' || event.key === 'w') && arrVertical > 0) { //menu nav
      souly -= 42;
      yoffset -= 42;
      document.getElementById("ssoul").style.top = souly + "px";
      arrVertical--;
      updateItemStats();
      audMove.play();
      audMove.currentTime = 0;
    }
    else if ((event.key === 'ArrowLeft' || event.key === 'a') && arrHorizontal > 0) { // menu nav
      soulx -= 292;
      xoffset -= 292;
      document.getElementById("ssoul").style.left = soulx + "px";
      arrHorizontal--;
      updateItemStats();
      audMove.play();
      audMove.currentTime = 0;
    }
    else if ((event.key === 'ArrowRight' || event.key === 'd') && arrHorizontal < 2) { // menu nav
      soulx += 292;
      xoffset += 292;
      document.getElementById("ssoul").style.left = soulx + "px";
      arrHorizontal++;
      updateItemStats();
      audMove.play();
      audMove.currentTime = 0;
    }

    if ((event.key === "x" || event.key === "k")) {
      soulx -= xoffset;
      souly -= yoffset - offset;
      document.getElementById("ssoul").style.left = soulx + "px";
      document.getElementById("ssoul").style.top = souly + "px";
      menuing = true;
      menuingg = false;
      xoffset = 0;
      yoffset = 0;
      arrHorizontal = 0;
      arrVertical = 0;
      resetItemStats();

      document.getElementById("weapon").style.color = "white";
      document.getElementById("armor1").style.color = "white";
      document.getElementById("armor2").style.color = "white";
    }


    if ((event.key === "z" || event.key === "j")) {
      if (x == 1) {
        if (xx == 1) {
          kris.setWeapon(arrKrisWeapon[arrHorizontal][arrVertical]);
        }
        else if (xx == 2) {
          kris.setArmor1(arrEquipment[arrHorizontal][arrVertical]);
        }
        else if (xx == 3) {
          kris.setArmor2(arrEquipment[arrHorizontal][arrVertical]);
        }
        krisSetEquipmentNames();
        updateKrisStats();
      }
      else if (x == 2) {
        if (xx == 1) {
          susie.setWeapon(arrSusieWeapon[arrHorizontal][arrVertical]);
        }
        else if (xx == 2) {
          susie.setArmor1(arrEquipment[arrHorizontal][arrVertical]);
        }
        else if (xx == 3) {
          susie.setArmor2(arrEquipment[arrHorizontal][arrVertical]);
        }
        susieSetEquipmentNames();
        updateSusieStats();
      }
      else if (x == 3) {
        if (xx == 1) {
          ralsei.setWeapon(arrRalseiWeapon[arrHorizontal][arrVertical]);
        }
        else if (xx == 2) {
          ralsei.setArmor1(arrEquipment[arrHorizontal][arrVertical]);
        }
        else if (xx == 3) {
          ralsei.setArmor2(arrEquipment[arrHorizontal][arrVertical]);
        }
        ralseiSetEquipmentNames();
        updateRalseiStats();
      }
      soulx -= xoffset;
      souly -= yoffset - offset;
      document.getElementById("ssoul").style.left = soulx + "px";
      document.getElementById("ssoul").style.top = souly + "px";
      menuing = true;
      menuingg = false;
      xoffset = 0;
      yoffset = 0;
      arrHorizontal = 0;
      arrVertical = 0;
      check = 1;
      document.getElementById("weapon").style.color = "white";
      document.getElementById("armor1").style.color = "white";
      document.getElementById("armor2").style.color = "white";
      resetItemStats();

      audSelect.play();
      audSelect.currentTime = 0;
    }
  }
}


document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  console.log(`Key code: ${event.code}`);

  if (event.key == "Shift") {
    shiftexit = true;
  }


  playMenu();
  inventoryMenu();
  loadoutMenu();
  mainMenu();

});

document.addEventListener("keyup", (eventup) => {
  if (eventup.key == "Shift") {
    shiftexit = false;
  }
  console.log("Key up: " + eventup.key);
});