const milkDiv = document.getElementById("milkdiv");
const milkRowArray = milkDiv.children;
let alternate = 0;
let delay = 30000;

function animationLoop() {
    for (const milkRow of milkRowArray) {
        if (alternate % 2 == 0) {
            animateLeft(milkRow);
        }
        else {
            animateRight(milkRow);
        }
        alternate++;
    }
}

function animateLeft(milkRow) {
    milkRow.animate(
        [
            { transform: "translateX(600px)" },
            { transform: "translateX(-600px)" }
        ],
        {
            duration: delay,
            easing: "cubic-bezier(0.37, 0, 0.63, 1)",
            direction: "alternate",
            iterations: Infinity
        }
    );
}

function animateRight(milkRow) {
    milkRow.animate(
        [
            { transform: "translateX(-600px)" },
            { transform: "translateX(600px)" }
        ],
        {
            duration: delay,
            easing: "cubic-bezier(0.37, 0, 0.63, 1)",
            direction: "alternate",
            iterations: Infinity
        }
    );
}

window.onload = animationLoop();

const day = document.getElementById("daycount");
function calculateDays() {
    const today = new Date();
    // const then = new Date(1706428800);

    const present = (today.getTime() / 1000) - 1706428800; // unix timestamp of 1/28/24 00:00 PST

    const dayCount = Math.ceil(((present / 60) / 60) / 24)

    for (i = Math.floor(Math.log10(dayCount)) + 1; i >= 1; i--) {
       createDays(dayCount, i);
    }
}

function createDays(dayCount, i) {
    const digit = document.createElement("p");
    console.log(Math.floor((dayCount % (10 ** i)) / (10 ** (i-1))));
    digit.textContent = Math.floor((dayCount % (10 ** i)) / (10 ** (i-1)))
    day.appendChild(digit);
}

window.onload = calculateDays();

const letters = document.getElementById("letters");
const lettersArray = letters.children;
const dayArray = day.children;
const dayDiv = document.getElementById("today");
const mainText = document.getElementById("maintext");
async function animateDays() {
    while (true) {
        animateOthers();
        for (const letter of lettersArray) {
            letter.classList.add("jump");
            await sleep(400);
            letter.classList.remove("jump");
            await sleep(200);
        }
        for (const day of dayArray) {
            day.classList.add("jump");
            await sleep(400);
            day.classList.remove("jump");
            await sleep(200);
        }
        await sleep(200);
        mainText.classList.add("jump");
        await sleep(400);
        mainText.classList.remove("jump");
        await sleep(1000);
        console.log(reduceMotion);
        if (reduceMotion === true) {
            break;
        }
    }
}

const wave = document.getElementById("wave");
async function animateOthers() {
    await sleep(1500);
    if (wave.classList.contains("jump")) {
        wave.classList.remove("jump");
        milkDiv.classList.remove("jump");
    }
    else {
        wave.classList.add("jump");
        milkDiv.classList.add("jump");
    }
}

window.onload = animateDays();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const calendar = document.getElementById("calendar");
const todayis = document.getElementById("todayis");
const warning = document.getElementById("warningbox");

calendar.addEventListener('mouseenter', function(event) {
    warning.style.opacity = 1;
});

todayis.addEventListener('mouseenter', function(event) {
    warning.style.opacity = 1;
});

calendar.addEventListener('mouseleave', function(event) {
    warning.style.opacity = 0;
});

todayis.addEventListener('mouseleave', function(event) {
    warning.style.opacity = 0;
});

const motion = document.getElementById("motion");
const boxText = document.getElementById("boxtext");

motion.addEventListener('mouseenter', function(event) {
    redbox.style.opacity = 1;
});

motion.addEventListener('mouseleave', function(event) {
    redbox.style.opacity = 0;
});

let reduceMotion = false;
motion.addEventListener('mouseup', function(event) {
    if (cooldowncheck === false) {
        if (motion.classList.contains("flip")) {
            motion.classList.remove("flip");
            reduceMotion = false;
            animateDays();
            boxText.innerText = "on cooldown";
            cooldown(10000);
        }
        else {
            motion.classList.add("flip");
            reduceMotion = true;
            boxText.innerText = "on cooldown";
            cooldown(10000);
        }
    }
});

let cooldowncheck = false;
async function cooldown(delay) {
    cooldowncheck = true;
    await sleep (delay);
    cooldowncheck = false;
    boxText.innerText = "reduce motion";
}