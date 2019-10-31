const Letter = require("./letter.js");

let Word = function (word) {
    this.word = word;

    let wordArr = [];
    for (let i = 0; i < this.word.length; i++) {
        wordArr[i] = new Letter(this.word[i]);
    }
    this.wordArr = wordArr;

    this.checkGuess = function(guess) {
        let rightGuess = false;
        for (let i = 0; i < this.wordArr.length; i++) {
            if (this.wordArr[i].checkLetter(guess)) {
                rightGuess = true;
            }
        }
        return rightGuess;
    }

    this.updateLetters = function(guess) {
        for (let i = 0; i < this.wordArr.length; i++) {
                this.wordArr[i].checkLetter(guess);
        }

    }

    this.isGuessed = function() {
        for (let i = 0; i < wordArr.length; i++) {
            if (!wordArr[i].guessed) {
                return false;
            }
        }
        return true;
    }
    
    Word.prototype.toString = function() {
        let result = [];
        for (let i = 0; i < this.wordArr.length; i++) {
            result[i] = this.wordArr[i].getChar();
        }
        return result.join(" ");
    }
}

module.exports = Word;

let newWord = new Word("apple");
