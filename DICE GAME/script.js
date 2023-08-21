const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const newHold = document.querySelector(".btn--new");
const diceImg = document.querySelector(".dice");

let score;
let currentScore;
let activePlayer;

const init = () => {
  score = [0, 0];
  currentScore = [0, 0];
  activePlayer = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");

  player0.classList.add("player--active");
  player1.classList.remove("player--active");

  document.querySelector("#score--1").textContent = 0;
  document.querySelector("#score--0").textContent = 0;

  document.querySelector("#current--1").textContent = 0;
  document.querySelector("#current--0").textContent = 0;
};

init();

const switchPlayer = () => {
  currentScore[activePlayer] = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore[activePlayer];

  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

roll.addEventListener("click", () => {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  diceImg.src = "./dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    currentScore[activePlayer] += diceNumber;

    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore[activePlayer];
  } else {
    switchPlayer();
  }
});

hold.addEventListener("click", () => {
  score[activePlayer] += currentScore[activePlayer];

  document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];

  if (score[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");

    currentScore[activePlayer] = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore[activePlayer];
  } else {
    switchPlayer();
  }
});

newHold.addEventListener("click", init);
