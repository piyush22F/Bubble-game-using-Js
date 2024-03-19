let timer = 60;
let score = 0;
let counter;

function crateBubble() {
  let clutter = "";
  for (let i = 1; i <= 160; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer() {
  let tm = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").innerHTML = timer;
    } else {
      clearInterval(tm);
      document.querySelector(".pbtm").innerHTML = `<h1>Game Over!</h1>`;
    }
  }, 1000);
}

function getRnHit() {
  counter = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = counter;
}

function increseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click", function (dets) {
  let clickedNum = Number(dets.target.textContent);

  if (clickedNum === counter) {
    increseScore();
    crateBubble();
    getRnHit();
  }
});

document.querySelector(".start button").addEventListener("click", function () {
  document.querySelector(".container").style.display = "inline-block";
  document.querySelector(".start").style.display = "none";
  runTimer();
});

getRnHit();
crateBubble();
