const random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const userdata = document.querySelector(".guesses");
const guessSLOT = document.querySelector("#guessfield");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const stratOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playgame = true;
if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert("please enetr a valid number");
  } else if (guess < 1) {
    alert("please enetr a  number more than 1");
  } else if (guess > 100) {
    alert("please enetr a number lessthan 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displayMessage(`game over.random number was ${random}`);
      endgame();
    } else {
      displayMessage(guess);
      checkguess(guess);
    }
  }
  //
}

function checkguess(guess) {
  //
}

function displayguess(guess) {
  //
}
function displayMessage(message) {
  //
}

function endgame() {}
function newgame() {}
