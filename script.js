const inputField = document.querySelector(".inputField");
const submitBtn = document.querySelector(".submitBtn");

const guesses = document.querySelector(".guesses");
const finalResults = document.querySelector(".finalResults");
const lowOrHigh = document.querySelector(".lowOrHigh");
const results = document.querySelectorAll(".results p");

let randomNum = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;
let restartGameButton;

function checkGuess() {
  const userGuess = Number(inputField.value);

  if (guessCount === 1) {
    guesses.textContent = "Your guesses ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNum) {
    finalResults.textContent = "Congratulations!!!";
    finalResults.style.color = "green";
    lowOrHigh.textContent = "";

    gameOver();
  } else if (guessCount === 10) {
    finalResults.textContent = "!Game Over";
    finalResults.style.color = "yellow";
    lowOrHigh.textContent = "";
    gameOver();
  } else {
    finalResults.textContent = "!WRONG GUESS";
    finalResults.style.color = "red";

    if (userGuess < randomNum) {
      lowOrHigh.textContent = "YOU GUESS LOW NUMBER";
    }
    if (userGuess > randomNum) {
      lowOrHigh.textContent = "YOU GUESS HIGH NUMBER";
    }
  }

  guessCount++;
  inputField.value = "";
  inputField.focus();
}

submitBtn.addEventListener("click", checkGuess);

function gameOver() {
  inputField.disabled = true;
  submitBtn.disabled = true;

  restartGameButton = document.createElement("button");
  restartGameButton.textContent = "Start A New Game";

  document.body.appendChild(restartGameButton);

  restartGameButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  for (const res of results) {
    res.textContent = "";
  }

  restartGameButton.parentNode.removeChild(restartGameButton);

  inputField.disabled = false;
  submitBtn.disabled = false;

  inputField.value = "";
  inputField.focus();

  randomNum = Math.floor(Math.random() * 100) + 1;
}
