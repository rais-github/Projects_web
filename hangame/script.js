//keyboard
const keyboard = document.querySelector(".keyboard");
let keyboardKey;
(function createBoard() {
  for (let i = 0; i < 26; i++) {
    keyboardKey = document.createElement("button");
    keyboardKey.innerHTML = String.fromCharCode(65 + i);
    keyboard.appendChild(keyboardKey);
  }
})();


//hintGeneration
let question = Math.floor(Math.random() * wordList.length);
let hint = document.querySelector(".hint-text b");
hint.innerHTML = wordList[question]["hint"];


// Guess system
let guess = document.querySelector(".guesses-text b");
let wrongGuessCount = 0;
guess.innerText = `${wrongGuessCount} / 6`;


// lines
const wordDisplay = document.querySelector(".word-display");
wordDisplay.innerHTML = wordList[question]["word"]
  .split("")
  .map(() => `<li class="letter"></li>`)
  .join("");


//disabled
let hangmanImage = document.querySelector(".hangman-box img");
let keyHolder = document.querySelectorAll(".keyboard button");
keyHolder.forEach((e) => {
  e.addEventListener("click", () => {
    if(wrongGuessCount===6)
    {
        
    }
    e.disabled = true;
    let letter = e.textContent;
    wordList[question]["word"].split("").forEach((char, idx) => {
      if (letter === char) {
        console.log("Matching character:", char);
        wordDisplay.querySelectorAll("li")[idx].innerText = letter;
        wordDisplay.querySelectorAll("li")[idx].classList.add("guessed");
      } else {
        wrongGuessCount++;
        hangmanImage.src = `hangman-game-images/images/hangman-${wrongGuessCount}.svg`;
      }
      guess.innerText = `${wrongGuessCount} / 6`;
    });
  });
});
