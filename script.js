// create futureDevelopers array
const futureDevelopers = ["subhan", "bunyad", "amin", "suleyman", "sekine"];

// get random name from futureDevelopers array
const randomIndex = Math.floor(Math.random() * futureDevelopers.length);
const randomFutureDeveloper = futureDevelopers[randomIndex];
// display developer's name in underscored version
let displayedName = "";
for (let i = 0; i < randomFutureDeveloper.length; i++) {
  displayedName = displayedName + "_ ";
}

document.getElementById("displayedName").textContent = displayedName;

// create guessedLetters array
let guessedLetters = [];

// create guessFutureDeveloper function
function guessFutureDeveloper() {
  // get input value
  let input = document.getElementById("inputValue");
  // check if it exist
  if (!input.value) {
    console.log("Please fill the input");
    return;
  }

  if (guessedLetters.includes(input.value)) {
    console.log("You already guessed!");
    return;
  }

  guessedLetters.push(input.value);

  document.getElementById("inputValue").value = "";

  let updatedText = "";
  let isAllLettersGuessed = true;
  for (let i = 0; i < randomFutureDeveloper.length; i++) {
    if (guessedLetters.includes(randomFutureDeveloper[i])) {
      updatedText = updatedText + randomFutureDeveloper[i] + " ";
    } else {
      updatedText = updatedText + "_ ";
      isAllLettersGuessed = false;
    }
  }

  document.getElementById("displayedName").textContent = updatedText;

  if (isAllLettersGuessed) {
    console.log("You won!");
  }
}
// if every letter is guessed finish the game
