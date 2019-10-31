const inquirer = require("inquirer");
const fs = require("fs");
const Word = require("./word.js");


fs.readFile("./words.txt", "utf8", (err, data) => {
    if (err) throw err;
    const allWords = data.split(", ");
})


function chooseRandomWord(arr) {
    const randomIndex = Math.round(Math.random() * arr.length);
    return arr[randomIndex];
}

function playGame(word) {
    let guessesLeft = 8,
        newWord = new Word(word);

    console.log("\n\n--------------------------------------------------\n\n");
    console.log(`Welcome to Hangman!`);
    console.log(`You will have ${guessesLeft} guess to try to win.`);
}