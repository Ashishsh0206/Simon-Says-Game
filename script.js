let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "purple", "red"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function () {
    // console.log("game started")
    if (started == false) {
        console.log("Game is Started")
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 300);
}

function levelUp() {
    userSeq = []
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)


    gameSeq.push(randColor);
    console.log(gameSeq)

    gameFlash(randBtn)
}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = ` Oops Game Over!! Your Score was ${level}
        </b> <br> Press Any key to Start`;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundcolor = "red"
        }, 200)
        reset();
    }
}

function btnPress() {
    // console.log(this)
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id")
    // console.log(userColor)
    userSeq.push(userColor)

    checkAns(userSeq.length - 1);
};

let allBtns = document.querySelectorAll(".btn")
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
};