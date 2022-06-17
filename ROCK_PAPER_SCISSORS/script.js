const choises = ["rock", "paper", "scissors"];

const computerDisplay = document.querySelector("#computer_choise");
const playerButtons = document.querySelectorAll("button");
const playerDisplay = document.querySelector("#player_choise");
const resultDisplay = document.querySelector("#result");

playerButtons.forEach((button) => {
  button.addEventListener("click", ({ target }) => {
    const playerChoise = target.id;
    const computerChoiseIndex = Math.floor(Math.random() * 3);
    const computerChoise = choises[computerChoiseIndex];

    displayGameData(playerChoise, computerChoise);
  });
});

function displayGameData(playerChoise, computerChoise) {
  computerDisplay.innerHTML = computerChoise;
  playerDisplay.innerHTML = playerChoise;

  getWinner(playerChoise, computerChoise);
}

function getWinner(player, computer) {
  if (player === computer) {
    resultDisplay.innerHTML = "The game is draw :)";
  }

  if (player === choises[0] && computer === choises[1])
    resultDisplay.innerHTML = "Computer won";

  if (player === choises[0] && computer === choises[2])
    resultDisplay.innerHTML = "Well done! you won :)";

  if (computer === choises[0] && player === choises[1])
    resultDisplay.innerHTML = "Well done! you won :)";

  if (computer === choises[0] && player === choises[2])
    resultDisplay.innerHTML = "computer won";

  if (computer === choises[1] && player === choises[2])
    resultDisplay.innerHTML = "Well done! you won :)";

  if (computer === choises[2] && player === choises[1])
    resultDisplay.innerHTML = "computer won :)";
}
