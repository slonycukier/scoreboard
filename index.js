let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let newGame = document.getElementById("new-game");
let score = 0;
let scoreG = 0;

function addOneH() {
  score += 1;
  scoreHome.textContent = score;
  highlightWinner();
}

function addTwoH() {
  score += 2;
  scoreHome.textContent = score;
  highlightWinner();
}

function addThreeH() {
  score += 3;
  scoreHome.textContent = score;
  highlightWinner();
}

function addOneG() {
  scoreG += 1;
  scoreGuest.textContent = scoreG;
  highlightWinner();
}

function addTwoG() {
  scoreG += 2;
  scoreGuest.textContent = scoreG;
  highlightWinner();
}

function addThreeG() {
  scoreG += 3;
  scoreGuest.textContent = scoreG;
  highlightWinner();
}

function highlightWinner() {
  scoreHome.classList.remove("winning");
  scoreGuest.classList.remove("winning");

  if (score > scoreG) {
    scoreHome.classList.add("winning");
  } else if (scoreG > score) {
    scoreGuest.classList.add("winning");
  } else if (score === scoreG) {
    scoreHome.classList.add("winning");
    scoreGuest.classList.add("winning");
  }
}

function addNewGame() {
  scoreHome.classList.remove("winning");
  scoreGuest.classList.remove("winning");
  score = 0;
  scoreG = 0;
  scoreHome.textContent = score;
  scoreGuest.textContent = scoreG;
}
