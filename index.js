const inquirer = require("inquirer");
const fs = require("fs");
const Word = require("./word.js");

// Get a random number to index an array.
function chooseRandomWord(arr) {
    const randomIndex = Math.round(Math.random() * arr.length);
    return arr[randomIndex];
}

// Main game function. An async function so that inquirer.prompt can be looped.
async function playGame(word) {
    console.log(word);
    let guessesLeft = 8,
        currentWord = new Word(word),
        alreadyGuessed = new Set([]);

    
    while (!currentWord.isGuessed() && guessesLeft > 0) {

        console.log(`\nThe word is: ${currentWord + ""}\n`);

        await inquirer.prompt([{

            type: "input",
            name: "currentGuess",
            message: "Please enter a guess: "

        }]).then((guess) => {
            // Check if letter has already been guessed.
            if (alreadyGuessed.has(guess.currentGuess)) {
                console.log(`\nYou already guessed "${guess.currentGuess}". Let's try again.\n`);
                console.log("--------------------------------------------------\n");
                return;
            }
            // Add the guess to the set of guesses.
            alreadyGuessed.add(guess.currentGuess);

            // Check if the guess is correct.
            if (currentWord.checkGuess(guess.currentGuess)) {
                console.log("\nThat's right!\n");
                currentWord.updateLetters(guess.currentGuess);
            } else {
                console.log("\nLooks like that letter isn't in the word. You lose a guess");
                guessesLeft--;
                console.log(`\nYou have ${guessesLeft} guesses left.\n`);
            }
            console.log("--------------------------------------------------\n");
        })
    }
    // If guesses left is 0 then the user lost.
    if (guessesLeft > 0) {
        console.log(`You won! You had ${guessesLeft} guesses left and the word was "${word + ""}"`);
    } else {
        console.log(`Oh no! You ran out of guesses...the word was ${word}`);
    }
}

// Read the words.txt file and put words in an array. 
fs.readFile("./words.txt", "utf8", (err, data) => {
    if (err) throw err;
    const allWords = data.split(", ");

    console.log("\n--------------------------------------------------\n");
    console.log(`Welcome to Hangman!`);
    console.log(`You will have 8 guesses to try to win. Good luck!`);
    console.log("\n--------------------------------------------------\n");


    playGame(chooseRandomWord(allWords));
})