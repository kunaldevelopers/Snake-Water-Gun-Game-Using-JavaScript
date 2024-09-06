let myCount = 0;
let computerCount = 0;

// Game Rule
function comparingBoth() {
  if (playerChoice === compData) {
    return "Its Tie";
  }

  if (
    (playerChoice === "snake" && compData === "water") ||
    (playerChoice === "water" && compData === "gun") ||
    (playerChoice === "gun" && compData === "snake")
  ) {
    myCount += 1;
    updateScore();
    return "You Win!";
  } else {
    computerCount += 1;
    updateScore();
    return "Computer Wins!";
  }
}

// Computer Logic
let computerSelector = ["snake", "water", "gun"];

let computerSelected = () => {
  let compScore = Math.floor(Math.random() * 3);
  console.log(computerSelector[compScore]);
  return computerSelector[compScore];
};

// let compData = computerSelected();

// My Self Playing
let snake = document.getElementById("snake");
let water = document.getElementById("water");
let gun = document.getElementById("gun");
let compData = "";

let playerChoice = "";
snake.addEventListener("click", () => {
  playerChoice = "snake";
  console.log("snake was clicked");
  playGame();
});

water.addEventListener("click", () => {
  playerChoice = "water";
  console.log("water was clicked");
  playGame();
});

gun.addEventListener("click", () => {
  playerChoice = "gun";
  console.log("gun was clicked");
  playGame();
});

function playGame() {
  compData = computerSelected();
  console.log(`Player chose: ${playerChoice}, Computer chose: ${compData}`);

  let result = comparingBoth();
  console.log(result);

  if (myCount >= 5) {
    alert("You Won🫡🫡");
    updateScore();
  } else if (computerCount >= 5) {
    alert("Computer Won🥲");
    updateScore();
  }
}

function updateScore() {
  let CScore = (document.getElementById("ComputerCount").textContent =
    computerCount);
  let PScore = (document.getElementById("MyCount").textContent = myCount);
}

let restart = document.getElementById("Restart");

restart.addEventListener("click", () => {
  location.reload();
});
