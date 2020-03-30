let ball = document.getElementById("top");
let bar = document.getElementById("seki");
let barX = 0;
let BallX = 0;
let BallY = 0;
let dx = 5;
let dy = 5;
let t = 0;

document.getElementById("xal").innerHTML = `Xal:` + t;

let interval = setInterval(ballMove, 40);

document.onkeydown = Key;

function Key(e) {
    e = e || window.event;

    if (e.keyCode == "37") {
        if (barX > 0) {
            barX -= 10;
        }
    }

    if (e.keyCode == "39") {
        if (barX < 700) {
            barX += 10;
        }
    }

    barMove();
}

function barMove() {
    bar.style.left = barX + "px";
}

function ballMove() {

    if (BallX < 0 || BallX > 750) {
        dx *= -1;
    }
    if (BallY < 0) {
        dy *= -1;
    } else if ((BallY > 550) && (BallX >= barX - 25) && (BallX <= barX + 100)) {
        t++;
        document.getElementById("xal").innerHTML = `Xal:` + t;
        dx += 2;
        dy += 2;
        dy *= -1;


    } else if (BallY > 550) {
        document.getElementById("umumi").style.opacity = .7;
        document.getElementById("umumi").innerHTML = `<p>` + "OYUN BİTTİ!!!" + `<br />` + `<br />` + `Toplanılan xal =` + t + `<br />` + `<br />` + `<a href="index.htm">TƏKRAR OYNA</a>` + `</p>`;

    }

    BallX += dx;
    BallY += dy;
    ball.style.left = BallX + "px";
    ball.style.top = BallY + "px";
}