let characters = [
  (charactersLowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]),
  (charactersUpperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]),
  (charactersNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]),
  (charactersSymbols = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ]),
];
const upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordOneEl = document.getElementById("password-one-el");
let passwordTwoEl = document.getElementById("password-two-el");
let lengthEl = document.getElementById("length-el");
let sliderEl = document.getElementById("slider-el");
let length = sliderEl.value;
let randomPasswordOne = "";
let randomPasswordTwo = "";

lengthEl.textContent = "Length: " + sliderEl.value;

sliderEl.oninput = function () {
  lengthEl.textContent = "Length: " + sliderEl.value;
  length = sliderEl.value;
};

function randomIndex(randomSet) {
  if (randomSet === "characterSets") {
    return Math.floor(Math.random() * characters.length);
  }
  if (randomSet === 0) {
    return Math.floor(Math.random() * characters[0].length);
  } else if (randomSet === 1) {
    return Math.floor(Math.random() * characters[1].length);
  } else if (randomSet === 2) {
    return Math.floor(Math.random() * characters[2].length);
  } else if (randomSet === 3) {
    return Math.floor(Math.random() * characters[3].length);
  }
}

function generatePasswords() {
  randomPasswordOne = "";
  randomPasswordTwo = "";
  for (let i = 0; i < length; i++) {
    let randomSet = randomIndex("characterSets");
    randomPasswordOne += characters[randomSet][randomIndex(randomSet)];
    randomPasswordTwo += characters[randomSet][randomIndex(randomSet)];
  }
  passwordOneEl.textContent = randomPasswordOne;
  passwordTwoEl.textContent = randomPasswordTwo;
}

function copy(number) {
  if (number === 1) {
    navigator.clipboard.writeText(randomPasswordOne);
  } else {
    navigator.clipboard.writeText(randomPasswordTwo);
  }
}

function toggleCharacters(type) {
  let capitalsEnabled;
  let numbersEnabled;
  let symbolsEnabled;
  if (type === "capitals" && capitalsEnabled) {
    const index = characters.indexOf(charactersUpperCase);
    if (index > -1) {
      characters.splice(index, 1);
    }
    capitalsEnabled = false;
  } else if (type === "capitals" && !capitalsEnabled) {
    characters.push(upperCaseCharacters);
  } else if (type === "numbers" && numbersEnabled) {
    const index = characters.indexOf(charactersNumbers);
    if (index > -1) {
      characters.splice(index, 1);
    }
    numbersEnabled = false;
  } else if (type === "numbers" && !numbersEnabled) {
    characters.push(numberCharacters);
  } else if (type === "symbols" && symbolsEnabled) {
    const index = characters.indexOf(charactersSymbols);
    if (index > -1) {
      characters.splice(index, 1);
    }
    symbolsEnabled = false;
  } else if (type === "symbols" && !symbolsEnabled) {
    characters.push(symbolCharacters);
  }
}
